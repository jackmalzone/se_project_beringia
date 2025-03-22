import React from 'react';
import { BsDownload } from 'react-icons/bs';
import './PdfModal.css';

interface PdfModalProps {
  isOpen: boolean;
  onClose: () => void;
  pdfUrl: string;
  title?: string;
}

export const PdfModal: React.FC<PdfModalProps> = ({ isOpen, onClose, pdfUrl, title }) => {
  if (!isOpen) return null;

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = title ? `${title.toLowerCase().replace(/\s+/g, '-')}.pdf` : 'document.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

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
          <iframe
            src={`${pdfUrl}#toolbar=0&navpanes=0`}
            title={`PDF Viewer - ${title || 'Document'}`}
            className="pdf-modal-iframe"
          />
        </div>
      </div>
    </div>
  );
}; 