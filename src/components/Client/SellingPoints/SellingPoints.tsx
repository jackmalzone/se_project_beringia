import React, { useState } from 'react';
import { IconType } from 'react-icons';
import { PdfModal } from '../../PdfModal/PdfModal';
import { useModal } from '../../../hooks/useModal';
import './SellingPoints.css'

interface SellingPoint {
  id: string;
  icon?: string | IconType;
  title: string;
  description: string;
  features: string[];
  link?: string;
  documentation?: {
    specs: string;
    manual?: string;
    benthicSurvey?: string;
  };
}

interface SellingPointsProps {
  title: string;
  points: SellingPoint[];
}

const isExternalUrl = (url: string): boolean => {
  return url.startsWith('http://') || url.startsWith('https://');
};

export const SellingPoints: React.FC<SellingPointsProps> = ({ title, points }) => {
  const [expandedItem, setExpandedItem] = useState<string | null>(null);
  const [currentPdf, setCurrentPdf] = useState({ url: '', title: '' });
  const { isOpen: isPdfModalOpen, open: openPdfModal, close: closePdfModal } = useModal();

  const handleTitleClick = (id: string, link?: string) => {
    if (link) {
      window.open(link, '_blank');
    }
  };

  const handleCardClick = (id: string, link?: string, isTitle: boolean = false) => {
    if (!isTitle) {
      setExpandedItem(expandedItem === id ? null : id);
    }
  };

  const handlePdfClick = (url: string, title: string) => {
    setCurrentPdf({ url, title });
    openPdfModal();
  };

  const handleSpecsClick = (e: React.MouseEvent, specs: string, title: string) => {
    e.stopPropagation();
    if (isExternalUrl(specs)) {
      window.open(specs, '_blank');
    } else {
      handlePdfClick(specs, title);
    }
  };

  const renderIcon = (icon?: string | IconType) => {
    if (!icon) return null;
    
    if (typeof icon === 'string') {
      return (
        <img
          src={icon}
          alt=""
          className="selling-points__icon"
          aria-hidden="true"
        />
      );
    }
    
    const IconComponent = icon;
    return <IconComponent className="selling-points__icon" aria-hidden="true" />;
  };

  return (
    <section className="selling-points">
      <div className="selling-points__container">
        <h2 className="selling-points__title">{title}</h2>
        <div className="selling-points__grid">
          {points.map((point) => (
            <div 
              key={point.id} 
              className={`selling-points__item ${expandedItem === point.id ? 'selling-points__item--expanded' : ''}`}
              onClick={() => handleCardClick(point.id, point.link)}
            >
              <div className="selling-points__header">
                {renderIcon(point.icon)}
                <h3 
                  className={`selling-points__item-title ${point.link ? 'selling-points__item-title--clickable' : ''}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleTitleClick(point.id, point.link);
                  }}
                >
                  {point.title}
                </h3>
              </div>
              <p className="selling-points__text">{point.description}</p>
              <ul className={`selling-points__list ${expandedItem === point.id ? 'selling-points__list--expanded' : ''}`}>
                {point.features.map((feature, index) => (
                  <li key={index} className="selling-points__list-item">
                    {feature}
                  </li>
                ))}
              </ul>
              {point.documentation && (
                <div className="selling-points__item-docs">
                  <button 
                    className="selling-points__doc-link"
                    onClick={(e) => handleSpecsClick(e, point.documentation!.specs, point.title)}
                  >
                    Specs
                  </button>
                  {point.documentation.manual && (
                    <>
                      <span className="selling-points__doc-separator">|</span>
                      <a 
                        href={point.documentation.manual}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="selling-points__doc-link"
                      >
                        Manual
                      </a>
                    </>
                  )}
                  {point.documentation.benthicSurvey && (
                    <>
                      <span className="selling-points__doc-separator">|</span>
                      <button 
                        className="selling-points__doc-link"
                        onClick={() => handlePdfClick(point.documentation!.benthicSurvey!, `${point.title} - Benthic Survey Evaluation`)}
                      >
                        Evaluation
                      </button>
                    </>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <PdfModal
        isOpen={isPdfModalOpen}
        onClose={closePdfModal}
        pdfUrl={currentPdf.url}
        title={currentPdf.title}
      />
    </section>
  );
};