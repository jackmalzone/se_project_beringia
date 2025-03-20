import React, { useState } from 'react';
import './SellingPoints.css'

interface SellingPoint {
  id: string;
  icon?: string;
  title: string;
  description: string;
  features: string[];
  link?: string;
  documentation?: {
    specs: string;
    manual?: string;
  };
}

interface SellingPointsProps {
  title: string;
  points: SellingPoint[];
}

export const SellingPoints: React.FC<SellingPointsProps> = ({ title, points }) => {
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

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
              <img
                src={point.icon}
                alt=""
                className="selling-points__icon"
                aria-hidden="true"
              />
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
                  <a 
                    href={point.documentation.specs}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="selling-points__doc-link"
                  >
                    Specs
                  </a>
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
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}