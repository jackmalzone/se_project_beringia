import './UseCases.css'

interface UseCasesProps {
  title: string;
  description: string;
  cases: Array<{
    id: string;
    title: string;
    description: string;
    keyPoints: string[];
  }>;
}

export const UseCases = ({ title, description, cases }: UseCasesProps) => {
  return (
    <section className="use-cases">
      <div className="use-cases__container">
        <h2 className="use-cases__title">{title}</h2>
        <p className="use-cases__description">{description}</p>
        
        <div className="use-cases__grid">
          {cases.map(useCase => (
            <div key={useCase.id} className="use-cases__card">
              <h3 className="use-cases__card-title">{useCase.title}</h3>
              <p className="use-cases__card-description">{useCase.description}</p>
              <ul className="use-cases__card-points">
                {useCase.keyPoints.map((point, index) => (
                  <li key={index} className="use-cases__card-point">{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 