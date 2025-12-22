import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ExternalLink } from 'lucide-react';

interface CaseStudyModalProps {
  isOpen: boolean;
  onClose: () => void;
  pages?: string[];
  driveLink?: string;
}

export function CaseStudyModal({ isOpen, onClose, pages = [], driveLink }: CaseStudyModalProps) {
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

  // Auto-open Google Drive link in new tab when modal opens
  useEffect(() => {
    if (isOpen && driveLink) {
      window.open(driveLink, '_blank');
    }
  }, [isOpen, driveLink]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
            style={{ top: '80px' }} // Start below navbar (navbar is 80px on desktop)
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-5xl max-h-[85vh] bg-white rounded-3xl shadow-2xl overflow-hidden z-[101]"
            style={{ marginTop: '40px' }} // Offset to account for navbar
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 z-10 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-white transition-all hover:scale-110"
              aria-label="Close modal"
            >
              <X className="w-6 h-6 text-gray-800" />
            </button>

            {/* Scrollable Content */}
            <div className="overflow-y-auto h-full p-8 md:p-12">
              {driveLink ? (
                <div className="flex flex-col items-center justify-center min-h-[400px] space-y-6">
                  <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl text-center max-w-md">
                    <ExternalLink className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                    <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                      Opening Case Study
                    </h3>
                    <p className="text-gray-600 mb-6">
                      The project files are opening in a new tab. If the tab didn't open, click the button below.
                    </p>
                    <a
                      href={driveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full transition-all hover:scale-105 shadow-lg"
                    >
                      <ExternalLink className="w-5 h-5" />
                      Open Google Drive
                    </a>
                  </div>
                </div>
              ) : (
                <div className="space-y-8">
                  {pages.map((page, index) => (
                    <div key={index} className="w-full">
                      <img
                        src={page}
                        alt={`Case study page ${index + 1}`}
                        className="w-full h-auto rounded-2xl shadow-lg"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}