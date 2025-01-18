import './HeroBanner.css'

interface HeroBannerProps {
  title: string;
  subtitle: string;
  backgroundImage?: string;
}

const HeroBanner = ({ title, subtitle, backgroundImage }: HeroBannerProps) => {
  return (
    <section 
      className="hero-banner"
      style={backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : undefined}
    >
      <div className="hero-banner__content">
        <h1 className="hero-banner__title">{title}</h1>
        <p className="hero-banner__subtitle">{subtitle}</p>
      </div>
    </section>
  )
}

export default HeroBanner