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
        const wb = XLSX.read(data, { type: 'array' });
        
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

  const renderSheet = (sheetName: string) => {
    const worksheet = workbook.Sheets[sheetName];
    const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 }) as any[][];
    
    if (jsonData.length === 0) {
      return <div className="p-4 text-muted-foreground">Empty sheet</div>;
    }

    return (
      <div className="overflow-auto max-h-[450px]">
        <table className="w-full border-collapse text-sm">
          <tbody>
            {jsonData.map((row, rowIndex) => (
              <tr key={rowIndex} className={rowIndex === 0 ? 'bg-muted font-semibold sticky top-0 z-10' : 'hover:bg-muted/50'}>
                {row.map((cell, cellIndex) => {
                  const isHeader = rowIndex === 0;
                  const Tag = isHeader ? 'th' : 'td';
                  return (
                    <Tag
                      key={cellIndex}
                      className={`border border-border p-2 ${isHeader ? 'text-left' : ''} ${
                        typeof cell === 'number' ? 'text-right' : 'text-left'
                      }`}
                    >
                      {cell !== null && cell !== undefined ? String(cell) : ''}
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
