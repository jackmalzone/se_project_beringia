import { FaCheckCircle } from 'react-icons/fa'
import './ValueProposition.css'

interface ValuePropositionProps {
  title: string;
  description: string;
  highlights: string[];
}

export const ValueProposition = ({ title, description, highlights }: ValuePropositionProps) => {
  return (
    <section className="value-proposition">
      <div className="value-proposition__container">
        <h2 className="value-proposition__title">{title}</h2>
        <p className="value-proposition__description">{description}</p>
        <div className="value-proposition__highlights">
          {highlights.map((highlight, index) => (
            <div 
              key={index} 
              className="value-proposition__highlight"
              style={{ 
                animationDelay: `${index * 0.1}s` 
              }}
            >
              <FaCheckCircle className="value-proposition__highlight-icon" />
              <span className="value-proposition__highlight-text">{highlight}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}