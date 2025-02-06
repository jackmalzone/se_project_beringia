import { useState } from 'react'
import seascapeImage from '../../assets/beringia/galapagos-seascape.jpg'
import './Contributions.css'

interface ContributionsItem {
  period: string
  title: string
  description: string
}

const contributionsData: ContributionsItem[] = [
  {
    period: "Present-2024",
    title: "Vehicle Control Systems",
    description: "Market viability for new concepts in vehicle control for both remote and autonomous vehicles.  Work implemented Beringia's 5-Hub approach for innovative technologies."
  },
  {
    period: "2024-2022",
    title: "Hydrus MicroAUV Test",
    description: "Product test & verification of the Hydrus microAUV followed by using our network to work with key market influencers rapid product acceptance and placement.  Hydrus is a scalable 6-degree freedom fully autonomous solution for providing high resolution, georeferenced photogrammetry to depth as great as 3000m."
  },
  {
    period: "2022-2021",
    title: "AUV Data as a Service (DaaS)",
    description: "Customized Oceanographic Data as a Service (DaaS) model utilizing  small form factor, inexpensive AUV's.  Work included constructing the business model, GTM strategy including identification of key markets and partnerships."
  },
  {
    period: "2019-2016",
    title: "Autonomous Force Multiplier",
    description: "\"Multi-grid\" solutions for combining the Hydrographic data from multiple mapping USV's into a single grid.  The solution maximizes efficiency by ensuring 100% survey coverage without duplicating efforts.  Feature set were further developed by Sand Point Hydrographic and are now part of the standard deliverable with QINSy."
  },
  {
    period: "2015-2011",
    title: "Portable High-Resolution Multibeam",
    description: "Beta system design, build, test & performance verification of the first portable, completely self contained multibeam hydrographic system specific for small vessel use.  Groundwork paved the way to the what is now an industry standard."
  },
  {
    period: "2011-2009",
    title: "Next Generation Doppler Velocity Log Market Research",
    description: "Developed the business case and GTM strategy for the Second Generation Doppler Velocity Logs.  Work included securing key partnerships with major INS and ROV manufacturers.  This generation of DVL is now an industry standard in subsea navigation."
  },
  {
    period: "2009-2008",
    title: "4-Dimensional Geospatial Software Solutions",
    description: "Provided test and verification and GTM strategy of the Eonfusion 4-Dimensional Geospatial software solution.  Eonfusion provided the ability to perform visual analysis across time, space and attributes of any geospatial data.  "
  },
  {
    period: "2008-2006",
    title: "Multibeam Sonars for Autonomous Underwater Vehicles | Implementation of Water Column Data for Scientific Applications | Development of the Next Generation Shallow Water Multibeam",
    description: "Developed, tested and verified the implementation of RESON Seabat multibeam sonars as an AUV.  Notable implementations include ISE Explorer (Bremen University), MBARI Dorado, WHOI Sentry, WHOI Alvin. All now benchmark solutions for all AUV mapping solutions to follow | Developed, tested hardware and software to output water column sonar data from RESON Seabat Multibeam Sonars.  Resulting methodologies are now an industry standard across multiple applications | Development, Test and Verification of the Seabat 7125 multibeam echosounder.  Benchmark development for all sonars to follow."
  },
  {
    period: "2005-2003",
    title: "Bluefin 21 Hydrographic Payload Integration | Bluefin 21 AUV Sea Trials ",
    description: "Integrated, tested and verified performance of a hydrographic payload suite including multibeam, sub-bottom profiler, Doppler Velocity Log and Sidescan Sonar in a Bluefin 21 inch vehicle | Sea Trials for the Bluefin 21 inch Autonomous Underwater Vehicle"
  },
  {
    period: "2003-1998",
    title: "SONAR Water Column data suitability trials | Design and test viability of multibeam sonar as an AUV payload | Became a father",
    description: "Utilizing Gen 1 architecture, suitability of water column data collection.  Project led to what is now standard with future generations of multibeam SONAR | Collaboration with the Monterey Bay Aquarium Research Institute to design and test the viability of high resolution multibeam sonars as a payload to obtain centimeter level accuracy of the deep sea. | The greatest son in the history of mankind was born"
  }
]

const formatContributionsContent = (text: string) => {
  if (!text.includes('|')) return text
  return text.split('|').map((item) => item.trim())
}

const ContributionsTitle = ({ title }: { title: string }) => {
  const titles = formatContributionsContent(title)
  
  return Array.isArray(titles) ? (
    <div className="contributions__titles">
      {titles.map((title, index) => (
        <div key={index} className="contributions__title-wrapper">
          <span className="contributions__title-number">{index + 1}</span>
          <h3 className="contributions__title">
            {title}
          </h3>
        </div>
      ))}
    </div>
  ) : (
    <h3 className="contributions__title">{title}</h3>
  )
}

const ContributionsContent = ({ content }: { content: string }) => {
  const items = formatContributionsContent(content)
  
  return Array.isArray(items) ? (
    <div className="contributions__content-multiple">
      {items.map((item, index) => (
        <div key={index} className="contributions__content-item">
          <span className="contributions__content-number">{index + 1}</span>
          <p>{item}</p>
        </div>
      ))}
    </div>
  ) : (
    <p>{content}</p>
  )
}

const Contributions = () => {
  const [expandedItem, setExpandedItem] = useState<number | null>(null)

  return (
    <section className="contributions">
      <div className="contributions__background" style={{ backgroundImage: `url(${seascapeImage})` }} />
      <div className="contributions__container">
        <h2 className="contributions__heading">Notable Contributions</h2>
        <div className="contributions__items">
          {contributionsData.map((item, index) => (
            <div 
              key={index} 
              className={`contributions__item ${expandedItem === index ? 'contributions__item--expanded' : ''}`}
              onClick={() => setExpandedItem(expandedItem === index ? null : index)}
            >
              <div className="contributions__period">{item.period}</div>
              <div className="contributions__content">
                <ContributionsTitle title={item.title} />
                {expandedItem === index && (
                  <ContributionsContent content={item.description} />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Contributions