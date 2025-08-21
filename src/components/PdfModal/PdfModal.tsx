import React, { useState, useEffect } from 'react';
import { BsDownload } from 'react-icons/bs';
import { useViewport } from '../../hooks/useViewport';
import './PdfModal.css';

interface PdfModalProps {
  isOpen: boolean;
  onClose: () => void;
  pdfUrl: string;
  title?: string;
}

export const PdfModal: React.FC<PdfModalProps> = ({ isOpen, onClose, pdfUrl, title }) => {
  const { isMobile } = useViewport();
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsLoading(true);
      setHasError(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = title ? `${title.toLowerCase().replace(/\s+/g, '-')}.pdf` : 'document.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  const handleIframeError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  // For mobile, provide a direct link instead of iframe to avoid crashes
  if (isMobile) {
    return (
      <div className="pdf-modal-overlay" onClick={onClose}>
        <div className="pdf-modal-content pdf-modal-content--mobile" onClick={e => e.stopPropagation()}>
          <div className="pdf-modal-header">
            {title && <h2 className="pdf-modal-title">{title}</h2>}
            <div className="pdf-modal-actions">
              <button 
                className="pdf-modal-close" 
                onClick={onClose}
                aria-label="Close modal"
              >
                ×
              </button>
            </div>
          </div>
          <div className="pdf-modal-body pdf-modal-body--mobile">
            <div className="pdf-modal-mobile-content">
              <div className="pdf-modal-mobile-icon">📄</div>
              <h3 className="pdf-modal-mobile-title">PDF Document</h3>
              <p className="pdf-modal-mobile-description">
                This document is best viewed on desktop or by downloading to your device.
              </p>
              <div className="pdf-modal-mobile-actions">
                <button 
                  className="pdf-modal-mobile-button pdf-modal-mobile-button--primary"
                  onClick={() => window.open(pdfUrl, '_blank')}
                >
                  Open in Browser
                </button>
                <button 
                  className="pdf-modal-mobile-button pdf-modal-mobile-button--secondary"
                  onClick={handleDownload}
                >
                  <BsDownload />
                  Download PDF
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Desktop version with iframe
  return (
    <div className="pdf-modal-overlay" onClick={onClose}>
      <div className="pdf-modal-content" onClick={e => e.stopPropagation()}>
        <div className="pdf-modal-header">
          {title && <h2 className="pdf-modal-title">{title}</h2>}
          <div className="pdf-modal-actions">
            <button 
              className="pdf-modal-download" 
              onClick={handleDownload}
              aria-label="Download PDF"
            >
              <BsDownload />
            </button>
            <button 
              className="pdf-modal-close" 
              onClick={onClose}
              aria-label="Close modal"
            >
              ×
            </button>
          </div>
        </div>
        <div className="pdf-modal-body">
          {isLoading && (
            <div className="pdf-modal-loading">
              <div className="pdf-modal-loading-spinner"></div>
              <p>Loading PDF...</p>
            </div>
          )}
          {hasError && (
            <div className="pdf-modal-error">
              <p>Failed to load PDF. Please try downloading instead.</p>
              <button 
                className="pdf-modal-error-button"
                onClick={handleDownload}
              >
                Download PDF
              </button>
            </div>
          )}
          <iframe
            src={`${pdfUrl}#view=FitH&scrollbar=0&toolbar=1&navpanes=1`}
            title={`PDF Viewer - ${title || 'Document'}`}
            className="pdf-modal-iframe"
            onLoad={handleIframeLoad}
            onError={handleIframeError}
            style={{ display: isLoading || hasError ? 'none' : 'block' }}
          />
        </div>
      </div>
    </div>
  );
}; 