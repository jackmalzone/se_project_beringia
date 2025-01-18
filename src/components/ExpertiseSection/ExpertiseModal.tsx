import './ExpertiseModal.css'

interface ExpertiseModalProps {
  title: string;
  description: string;
  details: string[];
}

const ExpertiseModal = ({ title, description, details }: ExpertiseModalProps) => {
  return (
    <div className="expertise-modal">
      <p className="expertise-modal__description">{description}</p>
      {details.length > 0 && (
        <div className="expertise-modal__details">
          <h3 className="expertise-modal__subtitle">Key Services:</h3>
          <ul className="expertise-modal__list">
            {details.map((detail, index) => (
              <li key={index} className="expertise-modal__list-item">{detail}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default ExpertiseModal 