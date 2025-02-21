import { useState, useRef } from 'react'
import { FaPlay, FaPause, FaEye, FaEyeSlash, FaUndo, FaMouse, FaSearchPlus, FaHandPointer } from 'react-icons/fa'
import { Sketchfab } from '../../Sketchfab/Sketchfab'
import './Interactive.css'

interface InteractiveProps {
  modelId: string;
  title: string;
  description: string;
}

export const Interactive = ({ modelId, title, description }: InteractiveProps) => {
  const [isRotating, setIsRotating] = useState(true);
  const [showAnnotations, setShowAnnotations] = useState(true);
  const clientRef = useRef<any>(null);
  
  const handleApiLoad = (api: any) => {
    clientRef.current = api;
    console.log('Sketchfab API loaded');
  };

  const handleResetView = () => {
    if (clientRef.current) {
      clientRef.current.recenterCamera();
      clientRef.current.setFov(45); // Reset to default FOV
    }
  };

  const toggleRotation = () => {
    setIsRotating(!isRotating);
    if (clientRef.current) {
      if (!isRotating) {
        clientRef.current.startRotation(30);
      } else {
        clientRef.current.stopRotation();
      }
    }
  };

  const toggleAnnotations = () => {
    setShowAnnotations(!showAnnotations);
    if (clientRef.current) {
      if (!showAnnotations) {
        clientRef.current.showAnnotations();
      } else {
        clientRef.current.hideAnnotations();
      }
    }
  };

  return (
    <section className="interactive">
      <div className="interactive__container">
        <h2 className="interactive__title">Explore {title} in 3D</h2>
        <p className="interactive__description">{description}</p>
        
        <div className="interactive__controls">
          <button 
            className={`interactive__control ${isRotating ? 'interactive__control-active' : ''}`}
            onClick={toggleRotation}
          >
            {isRotating ? <><FaPause /> Pause Rotation</> : <><FaPlay /> Start Rotation</>}
          </button>
          <button 
            className={`interactive__control ${showAnnotations ? 'interactive__control-active' : ''}`}
            onClick={toggleAnnotations}
          >
            {showAnnotations ? <><FaEyeSlash /> Hide Labels</> : <><FaEye /> Show Labels</>}
          </button>
          <button 
            className="interactive__control" 
            onClick={handleResetView}
          >
            <><FaUndo /> Reset View</>
          </button>
        </div>
        
        <div className="interactive__model">
          <Sketchfab 
            modelId={modelId}
            title={title}
            autoRotate={isRotating}
            annotations={showAnnotations}
            ui_inspector={false}
            transparent={true}
            onLoad={handleApiLoad}
          />
        </div>
        
        <div className="interactive__instructions">
          <h3 className="interactive__instructions-title">Interaction Guide</h3>
          <ul className="interactive__instructions-list">
            <li><FaMouse /> Click and drag to rotate</li>
            <li><FaHandPointer /> Double click to focus on parts</li>
            <li><FaSearchPlus /> Scroll to zoom in/out</li>
            <li><FaHandPointer /> Click annotations to learn more</li>
          </ul>
        </div>
      </div>
    </section>
  );
}; 