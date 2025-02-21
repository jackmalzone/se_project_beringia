import React from 'react';
import './SellingPoints.css'

interface SellingPoint {
  id: string;
  icon?: string;
  title: string;
  description: string;
  features: string[];
}

interface SellingPointsProps {
  title: string;
  points: SellingPoint[];
}

export const SellingPoints: React.FC<SellingPointsProps> = ({ title, points }) => {
  return (
    <section className="selling-points">
      <div className="selling-points__container">
        <h2 className="selling-points__title">{title}</h2>
        <div className="selling-points__grid">
          {points.map((point) => (
            <div key={point.id} className="selling-points__item">
              <img
                src={point.icon}
                alt=""
                className="selling-points__icon"
                aria-hidden="true"
              />
              <h3 className="selling-points__item-title">{point.title}</h3>
              <p className="selling-points__text">{point.description}</p>
              <ul className="selling-points__list">
                {point.features.map((feature, index) => (
                  <li key={index} className="selling-points__list-item">
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}