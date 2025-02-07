import { useEffect, useState } from 'react'
import './Loading.css'
import beringiaLogo from '../../assets/beringia/logo-bridge-white.webp'

const loadingPhrases = [
  'Initializing marine systems...',
  'Calibrating navigation sensors...',
  'Establishing ocean connectivity...',
  'Loading hydrographic data...',
  'Configuring autonomous systems...',
  'Optimizing sonar arrays...',
  'Mapping ocean intelligence...',
  'Syncing marine networks...',
  'Deploying underwater solutions...',
  'Processing bathymetric data...',
  'Analyzing subsea telemetry...',
  'Initializing ROV systems...',
  'Configuring multibeam arrays...',
  'Loading acoustic profiles...',
  'Syncing GPS coordinates...',
  'Calibrating depth sensors...',
  'Processing marine data...',
  'Initializing navigation systems...'
]

const getRandomPhrase = (currentPhrase: string): string => {
  const availablePhrases = loadingPhrases.filter(phrase => phrase !== currentPhrase)
  const randomIndex = Math.floor(Math.random() * availablePhrases.length)
  return availablePhrases[randomIndex]
}

interface LoadingProps {
  onLoadingComplete?: () => void;
}

export const Loading = ({ onLoadingComplete }: LoadingProps) => {
  const [isFading, setIsFading] = useState(false)
  const [currentPhrase, setCurrentPhrase] = useState(loadingPhrases[0])

  useEffect(() => {
    // Cycle through random phrases
    const phraseInterval = setInterval(() => {
      setCurrentPhrase(prevPhrase => getRandomPhrase(prevPhrase))
    }, 1500)

    // Start fade out slightly before the parent component removes the loading screen
    const fadeTimer = setTimeout(() => {
      setIsFading(true)
      onLoadingComplete?.()
    }, 2500)

    return () => {
      clearInterval(phraseInterval)
      clearTimeout(fadeTimer)
    }
  }, [])

  return (
    <div className={`loading-container ${isFading ? 'loading-container-fade-out' : ''}`}>
      <div className="logo-container">
        <img src={beringiaLogo} alt="Beringia Logo" className="logo" />
        <div className="pulse-ring"></div>
      </div>
      <div className="phrases">
        <span className="phrase" key={currentPhrase}>
          {currentPhrase}
        </span>
      </div>
    </div>
  )
}
