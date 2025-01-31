import './SeascapeDivider.css'
import seascapeImage from '../../assets/beringia/galapagos-seascape.jpg'

interface SeascapeDividerProps {
  height?: number;
  opacity?: number;
}

export const SeascapeDivider = ({ height = 160, opacity = 0.15 }: SeascapeDividerProps) => {
  return (
    <div 
      className="seascape-divider"
      style={{ 
        backgroundImage: `url(${seascapeImage})`,
        height: `${height}px`,
        opacity
      }} 
    />
  )
}