import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ExternalLink, ArrowLeft, ArrowRight } from 'lucide-react';

interface PDFViewerModalProps {
  isOpen: boolean;
  onClose: () => void;
  pdfUrl: string;
  projectTitle: string;
  onNext?: () => void;
  onPrevious?: () => void;
}

export function PDFViewerModal({ 
  isOpen, 
  onClose, 
  pdfUrl, 
  projectTitle,
  onNext,
  onPrevious 
}: PDFViewerModalProps) {
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleEscape);
    }
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  // Convert Google Drive link to embedded viewer format
  const getEmbedUrl = (url: string) => {
    // Check if it's a Google Drive link
    const driveMatch = url.match(/\/file\/d\/([a-zA-Z0-9_-]+)/);
    if (driveMatch) {
      const fileId = driveMatch[1];
      return `https://drive.google.com/file/d/${fileId}/preview`;
    }
    // Return original URL if not a Google Drive link
    return url;
  };

  const embedUrl = getEmbedUrl(pdfUrl);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[99999] flex items-center justify-center p-4 pt-24"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[99998]"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Modal Content */}
          <motion.div
            className="relative w-full h-full max-w-7xl bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col z-[99999]"
            style={{ maxHeight: 'calc(100vh - 120px)' }}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
          >
            {/* Header */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 px-4 sm:px-6 py-3 sm:py-4 bg-gradient-to-r from-gray-50 to-white border-b border-gray-200">
              <h2 className="text-lg sm:text-2xl text-gray-900 font-medium pr-2">{projectTitle}</h2>
              <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
                <a
                  href={pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 sm:px-4 py-1.5 sm:py-2 bg-gray-900 text-white text-sm rounded-full hover:bg-gray-800 transition-all hover:scale-105"
                  onClick={(e) => e.stopPropagation()}
                >
                  <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  <span className="hidden xs:inline">Open</span>
                </a>
                <button
                  onClick={onClose}
                  className="p-1.5 sm:p-2 hover:bg-gray-200 rounded-full transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5 sm:w-6 sm:h-6 text-gray-800" />
                </button>
              </div>
            </div>

            {/* Navigation Buttons */}
            {onPrevious && (
              <button
                onClick={onPrevious}
                className="absolute top-1/2 left-4 -translate-y-1/2 z-50 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-white transition-all hover:scale-110"
                aria-label="Previous project"
              >
                <ArrowLeft className="w-6 h-6 text-gray-800" />
              </button>
            )}
            {onNext && (
              <button
                onClick={onNext}
                className="absolute top-1/2 right-4 -translate-y-1/2 z-50 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-white transition-all hover:scale-110"
                aria-label="Next project"
              >
                <ArrowRight className="w-6 h-6 text-gray-800" />
              </button>
            )}

            {/* PDF Viewer */}
            <div className="flex-1 overflow-hidden bg-gray-100">
              <iframe
                src={`${embedUrl}#view=FitH`}
                className="w-full h-full border-0"
                title={projectTitle}
              />
            </div>

            {/* Alternative: Google Docs Viewer (uncomment if iframe doesn't work) */}
            {/* <div className="flex-1 overflow-hidden bg-gray-100">
              <iframe
                src={`https://docs.google.com/viewer?url=${encodeURIComponent(pdfUrl)}&embedded=true`}
                className="w-full h-full border-0"
                title={projectTitle}
              />
            </div> */}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}