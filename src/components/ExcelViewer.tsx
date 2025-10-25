import React, { useState, useEffect } from 'react';
import * as XLSX from 'xlsx';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card } from '@/components/ui/card';
import { Loader2 } from 'lucide-react';

interface ExcelViewerProps {
  fileUrl: string;
}

const ExcelViewer: React.FC<ExcelViewerProps> = ({ fileUrl }) => {
  const [workbook, setWorkbook] = useState<XLSX.WorkBook | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeSheet, setActiveSheet] = useState<string>('');

  useEffect(() => {
    const loadExcel = async () => {
      try {
        setLoading(true);
        const response = await fetch(fileUrl);
        const arrayBuffer = await response.arrayBuffer();
        const data = new Uint8Array(arrayBuffer);
        const wb = XLSX.read(data, { type: 'array', cellStyles: true, cellDates: true });
        
        setWorkbook(wb);
        if (wb.SheetNames.length > 0) {
          setActiveSheet(wb.SheetNames[0]);
        }
        setLoading(false);
      } catch (err) {
        setError('Failed to load Excel file');
        setLoading(false);
        console.error(err);
      }
    };

    loadExcel();
  }, [fileUrl]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-[500px]">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  if (error || !workbook) {
    return (
      <div className="flex items-center justify-center h-[500px] text-destructive">
        {error || 'Unable to load file'}
      </div>
    );
  }

  const formatCellValue = (cell: any, cellAddress: string, worksheet: XLSX.WorkSheet): string => {
    if (cell === null || cell === undefined || cell === '') return '';
    
    const cellObj = worksheet[cellAddress];
    if (!cellObj) return String(cell);

    // Use the formatted value from Excel if available
    const formattedText = cellObj.w;
    
    // Check if it has "x" suffix (like 1.5x)
    if (formattedText && formattedText.includes('x') && !formattedText.includes('Excel')) {
      return formattedText;
    }

    // Check if cell has a number format
    const numFmt = cellObj.z || cellObj.w;
    
    // Handle percentage format
    if (numFmt && numFmt.includes('%')) {
      const numValue = typeof cell === 'number' ? cell : parseFloat(cell);
      if (!isNaN(numValue)) {
        return (numValue * 100).toFixed(2) + '%';
      }
    }
    
    // Handle year format (4-digit numbers between 2000-2050)
    if (typeof cell === 'number' && cell >= 2000 && cell <= 2050 && Number.isInteger(cell)) {
      return cell.toString();
    }
    
    // Handle scientific notation
    if (typeof cell === 'number' && (Math.abs(cell) >= 1e10 || (Math.abs(cell) < 0.0001 && cell !== 0))) {
      return cell.toExponential(2);
    }
    
    // Handle number formatting with thousands separator
    if (typeof cell === 'number') {
      return cell.toLocaleString('en-US', { 
        minimumFractionDigits: 2, 
        maximumFractionDigits: 2 
      });
    }
    
    return formattedText || String(cell);
  };

  const getCellStyle = (cellAddress: string, worksheet: XLSX.WorkSheet) => {
    const cellObj = worksheet[cellAddress];
    if (!cellObj) return {};

    const styles: React.CSSProperties = {};
    
    // Check for cell styling
    if (cellObj.s) {
      const cellStyle = cellObj.s;
      
      // Background color (yellow highlight)
      if (cellStyle.fgColor && cellStyle.fgColor.rgb) {
        const rgb = cellStyle.fgColor.rgb;
        styles.backgroundColor = `#${rgb}`;
      }
      
      // Font color for negative numbers
      if (cellStyle.font && cellStyle.font.color && cellStyle.font.color.rgb) {
        const rgb = cellStyle.font.color.rgb;
        styles.color = `#${rgb}`;
      }
    }
    
    // Default: check if value is negative number and make it red
    const value = cellObj.v;
    if (typeof value === 'number' && value < 0 && !styles.color) {
      styles.color = '#dc2626'; // red-600
    }
    
    return styles;
  };

  const renderSheet = (sheetName: string) => {
    const worksheet = workbook.Sheets[sheetName];
    const range = XLSX.utils.decode_range(worksheet['!ref'] || 'A1');
    
    const rows: any[][] = [];
    const colIndices: number[] = [];
    
    // First pass: identify non-empty columns
    for (let C = range.s.c; C <= range.e.c; ++C) {
      let hasContent = false;
      for (let R = range.s.r; R <= range.e.r; ++R) {
        const cellAddress = XLSX.utils.encode_cell({ r: R, c: C });
        const cell = worksheet[cellAddress];
        if (cell && cell.v !== null && cell.v !== undefined && cell.v !== '') {
          hasContent = true;
          break;
        }
      }
      if (hasContent) {
        colIndices.push(C);
      }
    }
    
    // Second pass: build rows with only non-empty columns
    for (let R = range.s.r; R <= range.e.r; ++R) {
      const row: any[] = [];
      for (const C of colIndices) {
        const cellAddress = XLSX.utils.encode_cell({ r: R, c: C });
        const cell = worksheet[cellAddress];
        row.push(cell ? cell.v : '');
      }
      rows.push(row);
    }
    
    if (rows.length === 0) {
      return <div className="p-4 text-muted-foreground">Empty sheet</div>;
    }

    return (
      <div className="overflow-auto max-h-[450px] bg-background">
        <table className="w-full border-collapse text-sm font-sans">
          <tbody>
            {rows.map((row, rowIndex) => (
              <tr key={rowIndex} className={rowIndex === 0 ? 'bg-primary text-white font-bold sticky top-0 z-10' : 'hover:bg-accent/5'}>
                {row.map((cell, cellIndex) => {
                  const isHeader = rowIndex === 0;
                  const Tag = isHeader ? 'th' : 'td';
                  const actualColIndex = colIndices[cellIndex];
                  const cellAddress = XLSX.utils.encode_cell({ r: rowIndex + range.s.r, c: actualColIndex });
                  const cellStyle = getCellStyle(cellAddress, worksheet);
                  const formattedValue = formatCellValue(cell, cellAddress, worksheet);
                  
                  // Determine alignment
                  const isNumber = typeof cell === 'number' && !(cell >= 2000 && cell <= 2050);
                  const alignment = isHeader ? 'text-center' : (isNumber ? 'text-right' : 'text-left');
                  
                  return (
                    <Tag
                      key={cellIndex}
                      className={`border border-border px-4 py-3 ${alignment}`}
                      style={isHeader ? {} : cellStyle}
                    >
                      {formattedValue}
                    </Tag>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <div className="w-full">
      <Tabs value={activeSheet} onValueChange={setActiveSheet} className="w-full">
        <TabsList className="w-full justify-start border-b rounded-none bg-muted/30 h-auto p-1">
          {workbook.SheetNames.map((sheetName) => (
            <TabsTrigger
              key={sheetName}
              value={sheetName}
              className="data-[state=active]:bg-background data-[state=active]:shadow-sm px-4 py-2"
            >
              {sheetName}
            </TabsTrigger>
          ))}
        </TabsList>
        {workbook.SheetNames.map((sheetName) => (
          <TabsContent key={sheetName} value={sheetName} className="mt-0 border-0">
            {renderSheet(sheetName)}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default ExcelViewer;
