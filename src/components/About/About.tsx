import { Link } from 'react-router-dom';
import penguinImage from '../../assets/beringia/penguin.jpeg';
import './About.css';
import ErrorBoundary from '../shared/ErrorBoundary/ErrorBoundary'

export const AboutContent = () => {
  return (
    <div className="about__content">
      <div className="about__hero">
        <div className="about__hero-overlay"></div>
        <div className="about__hero-content">
          <h1 className="about__hero-title">About Beringia Marine</h1>
          <div className="about__hero-image-wrapper">
            <div className="about__hero-image-container">
              <img src={penguinImage} alt="Chris Malzone with Emperor Penguin in Antarctica" className="about__hero-image" />
            </div>
            <p className="about__hero-image-caption">
              Chris Malzone, 1994. Emperor Penguin encounter captured on Konica Autoreflex A 
              with Polarizing Lens and Fuji Velvia film. Antarctica.
            </p>
          </div>
        </div>
      </div>
      
      <div className="about__container">
        <h2 className="about__title">About Beringia Marine</h2>
        <p className="about__text">
          Beringia Marine was founded after three decades of experience in marine technology, spanning marine research, ocean engineering, field operations, business development, and executive-level leadership. Throughout this journey, we identified significant gaps in the market, particularly in the early stages of design and solution viability.
        </p>
        
        <p className="about__text">
          We aim to bridge these gaps by leveraging our diverse expertise and extensive network across all verticals of the marine industry. We conduct thorough market research to identify real-world needs for our oceans, focusing on areas that minimize competition and offer high-impact solutions. From initial concept through engineering, business development, and scaling, we ensure solutions are technically sound, aligned with market demands, and positioned for sustainable, long-term growth. By connecting our clients with the right partners and resources, we help businesses maximize their impact and fulfill crucial needs for ocean preservation and innovation.
        </p>

      <h2 className="about__title">Leadership</h2>
      <h3 className="about__subtitle">Chris Malzone</h3>
      <p className="about__text">
        Chris Malzone is a seasoned marine technologist and business strategist with over three decades of experience in marine technology, sales, and project management. As the Principal of Beringia Marine Technologies, Chris has led the development and deployment of innovative offshore technologies, successfully managing key offshore projects and consulting clients on the integration of advanced subsea systems.
      </p>
      
      <p className="about__text">
        Throughout his career, Chris has held senior roles, including at Advanced Navigation, where he contributed to significant sales growth, and at AML Oceanographic, where he helped the company achieve record revenues. His focus is on product development, business growth, and market strategy, with expertise in subsea technology and autonomous systems.
      </p>
      
      <p className="about__text">
        With a Bachelor's degree in Geology and a Masters degree in Oceanography, Chris brings a unique technical perspective to every project, driving success through innovative solutions and strategic partnerships.
      </p>

        <div className="about__social">
          <a href="https://linkedin.com/in/chrismalzone" target="_blank" rel="noopener noreferrer" className="about__social-link">LinkedIn</a>
          <a href="https://instagram.com/inoceansgroup" target="_blank" rel="noopener noreferrer" className="about__social-link">Instagram</a>
        </div>
      </div>
    </div>
  );
};

// Standalone page version
const About = () => {
  return (
    <div className="about">
      <ErrorBoundary>
        <AboutContent />
      </ErrorBoundary>
    </div>
  );
};

export default About;