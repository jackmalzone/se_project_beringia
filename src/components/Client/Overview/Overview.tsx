import './Overview.css'

interface OverviewProps {
  title: string;
  description: string;
  headerImage: string;
}

export const Overview = ({ title, description, headerImage }: OverviewProps) => {
  return (
    <section className="overview">
      <div className="overview__header">
        <img 
          src={headerImage} 
          alt={`${title} header`} 
          className="overview__header-image"
        />
      </div>
      <div className="container">
        <div className="overview__content">
          <h1 className="overview__title">{title}</h1>
          <p className="overview__description">{description}</p>
        </div>
      </div>
    </section>
  )
}
