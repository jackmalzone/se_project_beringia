import './About.css';

export const AboutContent = () => {
  return (
    <div className="about__content">
      <h2 className="about__title">Our Story</h2>
      <p className="about__text">Beringia Marine was founded after three decades of experience in marine technology, spanning marine research, ocean engineering, field operations, business development, and executive-level leadership. Throughout this journey, we identified significant gaps in the market, particularly in the early stages of design and solution viability.</p>
      
      <p className="about__text">We aim to bridge these gaps by leveraging our diverse expertise and extensive network across all verticals of the marine industry. We conduct thorough market research to identify real-world needs for our oceans, focusing on areas that minimize competition and offer high-impact solutions. From initial concept through engineering, business development, and scaling, we ensure solutions are technically sound, aligned with market demands, and positioned for sustainable, long-term growth. By connecting our clients with the right partners and resources, we help businesses maximize their impact and fulfill crucial needs for ocean preservation and innovation.</p>
    </div>
  );
};

// Standalone page version
const About = () => {
  return (
    <div className="about">
      <AboutContent />
    </div>
  );
};

export default About;