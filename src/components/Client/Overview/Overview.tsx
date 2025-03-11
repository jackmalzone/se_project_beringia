import './Overview.css'

interface OverviewProps {
  title: string;
  description: string;
  headerImage: string;
  logo?: string;
  website?: string;
}

export const Overview = ({ title, description, headerImage, logo, website }: OverviewProps) => {
  return (
    <div className="overview__wrapper">
      <section className="overview">
        <div 
          className="overview__header" 
          style={{ backgroundImage: `url(${headerImage})` }}
        >
          <div className="overview__content">
            {logo ? (
              <div className="overview__logo">
                {website ? (
                  <a 
                    href={website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="overview__logo-link"
                  >
                    <img src={logo} alt={`${title} logo`} className="overview__logo-image" />
                  </a>
                ) : (
                  <img src={logo} alt={`${title} logo`} className="overview__logo-image" />
                )}
              </div>
            ) : (
              <h1 className="overview__title">{title}</h1>
            )}
            <p className="overview__description">{description}</p>
          </div>
        </div>
      </section>
    </div>
  )
}
