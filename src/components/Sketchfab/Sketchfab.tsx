import { useState, useEffect, useRef } from 'react'
import { SketchfabClient } from '../../api/sketchfab-client'
import { useSketchfabApi } from '../../hooks/useSketchfabApi'
import './Sketchfab.css'

interface SketchfabProps {
  modelId: string;
  title: string;
  autoRotate?: boolean;
  annotations?: boolean;
  ui_controls?: boolean;
  ui_inspector?: boolean;
  transparent?: boolean;
  ui_theme?: 'dark' | 'light';
  onLoad?: (api: any) => void;
}

export const Sketchfab = ({ 
  modelId, 
  title,
  autoRotate = true,
  annotations = true,
  ui_controls = true,
  ui_inspector = false,
  transparent = true,
  ui_theme = 'dark',
  onLoad
}: SketchfabProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const clientRef = useRef<SketchfabClient | null>(null);
  const { isLoaded: isApiLoaded, error: apiError } = useSketchfabApi();

  useEffect(() => {
    if (!isApiLoaded || !iframeRef.current) return;
    if (apiError) {
      setError('Failed to load Sketchfab API');
      setIsLoading(false);
      return;
    }

    try {
      // Initialize client
      clientRef.current = new SketchfabClient(iframeRef.current, {
        modelId: '11c4619cc5e44045b1df5fd4abdcb586', // Use the actual model ID
        success: (api) => {
          setIsLoading(false);
          setError(null);
          if (onLoad) onLoad(api);
        },
        error: (error) => {
          console.error('Sketchfab API error:', error);
          setError(error.message || 'Failed to load 3D model');
          setIsLoading(false);
        },
        autostart: true,
        annotations_visible: annotations,
        autospin: autoRotate,
        ui_controls,
        ui_inspector,
        transparent,
        ui_theme
      });
    } catch (err) {
      setError((err as Error).message || 'An unexpected error occurred');
      setIsLoading(false);
    }

    return () => {
      clientRef.current = null;
    };
  }, [isApiLoaded, apiError, modelId, annotations, autoRotate, ui_controls, ui_inspector, transparent, ui_theme]);

  return (
    <div className="sketchfab">
      {isLoading && (
        <div className="sketchfab__loader">
          <div className="sketchfab__loader-spinner"></div>
          <p className="sketchfab__loader-text">Loading 3D Model...</p>
        </div>
      )}
      <iframe
        ref={iframeRef}
        title={title}
        className="sketchfab__iframe"
        frameBorder="0"
        allowFullScreen={true}
        allow="autoplay; fullscreen; xr-spatial-tracking"
        data-xr-spatial-tracking="true"
        data-web-share="true"
        src={`https://sketchfab.com/models/11c4619cc5e44045b1df5fd4abdcb586/embed?preload=1&ui_theme=${ui_theme}`}
      />
      {error && (
        <div className="sketchfab__error">
          <p className="sketchfab__error-text">{error}</p>
          <p className="sketchfab__error-details">
            Please check if the model ID is correct and try again.
          </p>
        </div>
      )}
    </div>
  );
}; 