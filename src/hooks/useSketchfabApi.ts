import { useState, useEffect } from 'react';

interface SketchfabApiState {
  isLoaded: boolean;
  error: string | null;
}

export const useSketchfabApi = (): SketchfabApiState => {
  const [state, setState] = useState<SketchfabApiState>({
    isLoaded: false,
    error: null
  });

  useEffect(() => {
    // Check if script is already loaded
    if (window.Sketchfab) {
      setState({ isLoaded: true, error: null });
      return;
    }

    // Create script element
    const script = document.createElement('script');
    script.src = 'https://static.sketchfab.com/api/sketchfab-viewer-1.12.1.js';
    script.async = true;
    
    script.onload = () => {
      setState({ isLoaded: true, error: null });
    };

    script.onerror = () => {
      setState({ 
        isLoaded: false, 
        error: 'Failed to load Sketchfab API. Please check your internet connection and try again.' 
      });
    };
    
    // Add script to document
    document.body.appendChild(script);

    // Cleanup
    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return state;
}; 