import './Loading.css'
import beringiaLogo from '../../assets/logos/beringia-logo.svg'

const loadingPhrases = [
  'Exploring the depths...',
  'Navigating new waters...',
  'Mapping the future...',
  'Connecting oceans...',
  'Advancing marine technology...',
  'Bridging continents...',
  'Innovating underwater...'
]

export const Loading = () => {
  return (
    <div className="loading-container">
      <div className="logo-container">
        <img src={beringiaLogo} alt="Beringia Logo" className="logo" />
        <div className="pulse-ring"></div>
      </div>
      <div className="phrases">
        {loadingPhrases.map((phrase, index) => (
          <span key={index} className="phrase" style={{ animationDelay: `${index * 3}s` }}>
            {phrase}
          </span>
        ))}
      </div>
    </div>
  )
}
