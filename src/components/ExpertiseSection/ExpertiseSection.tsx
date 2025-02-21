import { useModal } from '../../contexts/ModalContext'
import './ExpertiseSection.css'
import '../ModalContact/ModalContact.css'
import ModalContact from '../ModalContact/ModalContact'

interface ExpertiseCard {
  title: string;
  subtitle: string;
  description: string;
  ctaText: string;
  details: string[];
}

const expertiseData: ExpertiseCard[] = [
  {
    title: "Validate",
    subtitle: "Benchmarking, Testing & Validating the Path To Success",
    description: "The first step in achieving success is establishing clear benchmarks. This phase ensures that both Beringia Marine and their client understand the necessary steps to reach their goals. Benchmarks may include technical engineering milestones, infrastructure readiness, and business development objectives. Once defined, these benchmarks are rigorously tested and validated, aligning both the company and Beringia Marine on the path forward, creating a shared vision of success.",
    ctaText: "Get in Touch",
    details: ["Benchmarking", "Testing", "Validation"]
  },
  {
    title: "Execute",
    subtitle: "Business Development Consulting",
    description: "With a solid foundation, the next phase focuses on market research and strategy development. During the execution stage, the Beringia Marine identifies the most viable markets and determines the unique selling points that will resonate with these audiences. A tailored business strategy is formed, and key partnerships are identified and secured, laying the groundwork for successful market entry and growth.",
    ctaText: "Learn More",
    details: ["Market Research", "Strategy Development", "Partnership Building"]
  },
  {
    title: "Grow",
    subtitle: "Business Development",
    description: "Building on the execution phase, the grow phase is where strategy turns into action. Beringia Marine works to build a strong pipeline and expand the company's strategic network, all while fostering a company culture that resonates with target markets. This stage is crucial for growing long-term relationships and ensuring the company's brand aligns with market needs and expectations.",
    ctaText: "Ping me!",
    details: ["Pipeline Building", "Strategic Network Expansion", "Company Culture Alignment"]
  },
  {
    title: "Productize",
    subtitle: "Mission Ready",
    description: "Having a solution is not enough; it must be fully productized to be successful. During this phase, Beringia Marine ensures that validated solutions are packaged in a way that allows for seamless deployment, even in the harshest marine environments. The focus is on reducing downtime, maximizing return on investment, and ensuring the product is robust and reliable for end users.",
    ctaText: "Let's Chat!",
    details: ["Product Development", "Deployment Readiness", "Customer Success"]
  },
  {
    title: "Scale",
    subtitle: "Long Term Growth",
    description: "Once the solution is productized, it must be ready for rapid growth. The final phase prepares the company for scaling by implementing a management structure that minimizes time-to-market and ensures a customer success model is in place. This future-proof approach enables the company to expand efficiently while maintaining high standards of quality and customer satisfaction.",
    ctaText: "Contact Us",
    details: ["Management Structure", "Time-to-Market", "Customer Success"]
  }
];

const ExpertiseSection = () => {
  const { openModal } = useModal()

  const handleExpertiseClick = () => {
    openModal(<ModalContact />, { size: 'small' })
  }

  return (
    <section className="expertise">
      <div className="expertise__container">
        <h2 className="expertise__title">Our Expertise</h2>
        <h3 className="expertise__subtitle">Validate - Execute - Grow - Productize - Scale</h3>
        
        <div className="expertise-cards">
          {expertiseData.map((card, index) => (
            <div key={index} className="expertise-card">
              <h4 className="expertise-card__title">{card.title}</h4>
              <h5 className="expertise-card__subtitle">{card.subtitle}</h5>
              <p className="expertise-card__description">{card.description}</p>
              <button 
                className="expertise-card__cta"
                onClick={() => handleExpertiseClick()}
              >
                {card.ctaText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ExpertiseSection