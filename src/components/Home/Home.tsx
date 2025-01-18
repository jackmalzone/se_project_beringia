import HeroBanner from '../HeroBanner/HeroBanner'
import ExpertiseSection from '../ExpertiseSection/ExpertiseSection'
import Contributions from '../Contributions/Contributions'

import './Home.css'

const Home = () => {
  return (
    <div className="home">
      <HeroBanner
        title="Beringia Marine Technologies"
        subtitle="Sales Engineering & Consulting"
      />
      
      <section className="home__section home__section_mission">
        <div className="home__container">
          <h2 className="home__title">Our Mission</h2>
          <p className="home__text">
            Beringia Marine provides the experience and passion necessary for 
            increasing our knowledge of the oceans. We work with companies to 
            identify and fill the gaps in marine technology to provide scalable 
            solutions for our oceans. Whether you're an established player or a start up, Beringia has the expertise, network and passion to rapidly scale your success. 
          </p>
        </div>
      </section>
      
      <ExpertiseSection />
      <Contributions />
    </div>
  )
}

export default Home