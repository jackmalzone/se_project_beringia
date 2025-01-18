import { useState, FormEvent } from 'react';
import { useModal } from '../../contexts/ModalContext'
import './ExpertiseSection.css'

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
  const { openModal, closeModal } = useModal()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleExpertiseClick = (expertise: ExpertiseCard) => {
    openModal(
      <div className="modal-contact">
        <h2 className="modal-contact__title">Contact Us</h2>
        <div className="contact__details">
          <p className="contact__detail">
            <strong>Email:</strong> 
            <a href="mailto:info@beringia-marine.com" className="contact__link">
              info@beringia-marine.com
            </a>
          </p>
          <p className="contact__detail">
            <strong>Phone:</strong> 
            <a href="tel:+18057040462" className="contact__link">
              +1 805 704 0462
            </a>
          </p>
        </div>
        <form className="contact__form" onSubmit={(e) => {
          e.preventDefault();
          console.log('Form submitted:', formData);
          closeModal();
        }}>
          <input
            type="text"
            placeholder="Name"
            required
            className="contact__input"
            value={formData.name}
            onChange={e => setFormData({...formData, name: e.target.value})}
          />
          <input
            type="email"
            placeholder="Email"
            required
            className="contact__input"
            value={formData.email}
            onChange={e => setFormData({...formData, email: e.target.value})}
          />
          <input
            type="text"
            placeholder="Subject"
            required
            className="contact__input"
            value={formData.subject}
            onChange={e => setFormData({...formData, subject: e.target.value})}
          />
          <textarea
            placeholder="Message"
            required
            className="contact__input contact__input--textarea"
            value={formData.message}
            onChange={e => setFormData({...formData, message: e.target.value})}
          />
          <button type="submit" className="contact__submit">Submit</button>
        </form>
      </div>,
      { title: expertise.title, size: 'small' }
    )
  }

  return (
    <section className="expertise">
      <div className="expertise__container">
        <h2 className="expertise__title">Our Expertise</h2>
        <h3 className="expertise__subtitle">Validate - Execute - Grow - Productize - Scale</h3>
        
        <div className="expertise__cards">
          {expertiseData.map((card, index) => (
            <div key={index} className="expertise__card">
              <h4 className="expertise__card-title">{card.title}</h4>
              <h5 className="expertise__card-subtitle">{card.subtitle}</h5>
              <p className="expertise__card-description">{card.description}</p>
              <button 
                className="expertise__card-cta"
                onClick={() => handleExpertiseClick(card)}
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