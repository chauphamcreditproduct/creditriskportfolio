import React, { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ZoomIn, ZoomOut, ChevronLeft, ChevronRight, AlertCircle } from 'lucide-react';

// PDF.js setup
import * as pdfjsLib from 'pdfjs-dist';
// Use Vite's ?url to get the worker URL string and let pdf.js load it
// IMPORTANT: Keep this import path exactly as below for pdfjs v3
// If this ever changes, update accordingly.
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import workerSrc from 'pdfjs-dist/build/pdf.worker.min.mjs?url';

pdfjsLib.GlobalWorkerOptions.workerSrc = workerSrc as string;

interface PdfViewerProps {
  fileUrl: string;
}

const PdfViewer: React.FC<PdfViewerProps> = ({ fileUrl }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [pdf, setPdf] = useState<any>(null);
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(1);
  const [scale, setScale] = useState(1.2);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  // Load document
  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setError(null);
    const task = pdfjsLib.getDocument(fileUrl);
    task.promise
      .then((doc) => {
        if (cancelled) return;
        setPdf(doc);
        setPages(doc.numPages);
        setPage(1);
      })
      .catch((e) => {
        console.error('PDF load error:', e);
        setError('Unable to load PDF preview.');
      })
      .finally(() => setLoading(false));

    return () => {
      cancelled = true;
      try {
        // Close underlying worker/streams
        // @ts-ignore
        task?.destroy?.();
      } catch { }
    };
  }, [fileUrl]);

  // Render current page
  useEffect(() => {
    const render = async () => {
      if (!pdf || !canvasRef.current) return;
      try {
        const p = await pdf.getPage(page);
        const viewport = p.getViewport({ scale });
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        if (!context) return;
        canvas.height = viewport.height;
        canvas.width = viewport.width;
        const renderContext = {
          canvasContext: context,
          viewport,
        } as any;
        await p.render(renderContext).promise;
      } catch (e) {
        console.error('PDF render error:', e);
        setError('Unable to render PDF page.');
      }
    };
    render();
  }, [pdf, page, scale]);

  const canPrev = page > 1;
  const canNext = page < pages;

  return (
    <div className="w-full">
      <div className="flex items-center justify-between px-4 py-2 border-b bg-background/60">
        <div className="text-sm text-muted-foreground">Page {page} / {pages}</div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon" disabled={!canPrev} onClick={() => setPage((p) => Math.max(1, p - 1))} aria-label="Previous page">
            <ChevronLeft className="w-4 h-4" />
          </Button>
          <Button variant="outline" size="icon" onClick={() => setScale((s) => Math.max(0.5, +(s - 0.2).toFixed(2)))} aria-label="Zoom out">
            <ZoomOut className="w-4 h-4" />
          </Button>
          <Button variant="outline" size="icon" onClick={() => setScale((s) => Math.min(3, +(s + 0.2).toFixed(2)))} aria-label="Zoom in">
            <ZoomIn className="w-4 h-4" />
          </Button>
          <Button variant="outline" size="icon" disabled={!canNext} onClick={() => setPage((p) => Math.min(pages, p + 1))} aria-label="Next page">
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {error ? (
        <div className="p-4 text-sm text-muted-foreground bg-muted/20 flex items-center gap-2">
          <AlertCircle className="w-4 h-4" />
          {error} Use the buttons below to open or download the PDF.
        </div>
      ) : (
        <div className="w-full overflow-auto">
          {loading ? (
            <div className="h-[500px] flex items-center justify-center text-sm text-muted-foreground">Loading PDF…</div>
          ) : (
            <canvas ref={canvasRef} className="block mx-auto" style={{ maxWidth: '100%' }} />
          )}
        </div>
      )}
    </div>
  );
};

export default PdfViewer;
