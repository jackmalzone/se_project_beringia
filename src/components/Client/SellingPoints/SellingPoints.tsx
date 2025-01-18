import './SellingPoints.css'

interface SellingPoint {
  id: string;
  title: string;
  description: string;
  icon?: string;
  features: string[];
}

interface SellingPointsProps {
  title: string;
  points: SellingPoint[];
}

export const SellingPoints = ({ title, points }: SellingPointsProps) => {
  return (
    <section className="selling-points">
      <div className="container">
        <h2 className="selling-points__title">{title}</h2>
        <div className="selling-points__grid">
          {points.map((point) => (
            <div key={point.id} className="selling-points__card">
              {point.icon && (
                <img 
                  src={point.icon} 
                  alt={`${point.title} icon`} 
                  className="selling-points__icon"
                />
              )}
              <h3 className="selling-points__card-title">{point.title}</h3>
              <p className="selling-points__description">{point.description}</p>
              <ul className="selling-points__features">
                {point.features.map((feature, index) => (
                  <li key={index} className="selling-points__feature">
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