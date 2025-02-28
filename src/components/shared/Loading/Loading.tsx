import { useEffect, useState } from 'react'
import './Loading.css'
import beringiaLogo from '../../../assets/beringia/logo-bridge-white.webp'

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
  const [progress, setProgress] = useState(0)
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer)
          setIsComplete(true)
          onLoadingComplete?.()
          return 100
        }
        return Math.min(prev + 1, 100)
      })
    }, 30)

    return () => clearInterval(timer)
  }, [onLoadingComplete])

  return (
    <div className={`loading-container ${isComplete ? 'loading-container-fade-out' : ''}`}>
      <div className="logo-container">
        <img src={beringiaLogo} alt="Beringia Logo" className="logo" />
        <div className="pulse-ring"></div>
      </div>
      <div className="phrases">
        <span className="phrase" key={loadingPhrases[progress]}>
          {loadingPhrases[progress]}
        </span>
      </div>
    </div>
  )
}
