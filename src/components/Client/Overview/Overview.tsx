import './Overview.css'

interface OverviewProps {
  title: string;
  description: string;
  headerImage: string;
}

export const Overview = ({ title, description, headerImage }: OverviewProps) => {
  return (
    <div className="overview__wrapper">
      <section className="overview">
        <div 
          className="overview__header" 
          style={{ backgroundImage: `url(${headerImage})` }}
        >
          <div className="overview__content">
            <h1 className="overview__title">{title}</h1>
            <p className="overview__description">{description}</p>
          </div>
        </div>
      </section>
    </div>
  )
}
