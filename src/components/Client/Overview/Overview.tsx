import './Overview.css'

interface OverviewProps {
  title: string;
  description: string;
  headerImage: string;
  logo?: string;
}

export const Overview = ({ title, description, headerImage, logo }: OverviewProps) => {
  return (
    <div className="overview__wrapper">
      <section className="overview">
        <div 
          className="overview__header" 
          style={{ backgroundImage: `url(${headerImage})` }}
        >
          <div className="overview__content">
            {logo && (
              <div className="overview__logo">
                <img src={logo} alt={`${title} logo`} className="overview__logo-image" />
              </div>
            )}
            <p className="overview__description">{description}</p>
          </div>
        </div>
      </section>
    </div>
  )
}
