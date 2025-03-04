import { useRef, useState, useCallback, useEffect } from 'react'
import { SketchfabClient, SketchfabAPI } from '../../api/sketchfab-client'
import { useSketchfabApi } from '../../hooks/useSketchfabApi'
import { withErrorHandler } from '../shared/error-handler/error-handler'
import './Sketchfab.css'

interface SketchfabProps {
  modelId: string
  title: string
  autoRotate?: boolean
  annotations?: boolean
  ui_controls?: boolean
  ui_inspector?: boolean
  transparent?: boolean
  ui_theme?: 'dark' | 'light'
  onLoad?: (api: SketchfabAPI) => void
  onError?: (error: Error) => void
}

const SketchfabComponent = ({ 
  modelId, 
  title,
  autoRotate = true,
  annotations = true,
  ui_controls = true,
  ui_inspector = false,
  transparent = true,
  ui_theme = 'dark',
  onLoad,
  onError
}: SketchfabProps) => {
  const [isLoading, setIsLoading] = useState(true)
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const clientRef = useRef<SketchfabClient | null>(null)
  const { isLoaded: isApiLoaded, error: apiError } = useSketchfabApi()
  const previousModelIdRef = useRef(modelId)

  const handleApiSuccess = useCallback((api: SketchfabAPI) => {
    setIsLoading(false)
    if (onLoad) onLoad(api)
  }, [onLoad])

  const handleApiError = useCallback((error: Error) => {
    setIsLoading(false)
    if (onError) onError(error)
  }, [onError])

  useEffect(() => {
    if (!isApiLoaded || !iframeRef.current) return
    if (apiError) {
      handleApiError(new Error('Failed to load Sketchfab API'))
      return
    }

    // Only reinitialize if the model ID has changed
    if (previousModelIdRef.current === modelId && clientRef.current) {
      return
    }
    previousModelIdRef.current = modelId

    try {
      // Initialize client
      clientRef.current = new SketchfabClient(iframeRef.current, {
        modelId,
        success: handleApiSuccess,
        error: handleApiError,
        autostart: true,
        annotations_visible: annotations,
        autospin: autoRotate,
        ui_controls,
        ui_inspector,
        transparent,
        ui_theme
      })
    } catch (err) {
      handleApiError(err instanceof Error ? err : new Error('Failed to initialize Sketchfab client'))
    }

    return () => {
      clientRef.current = null
    }
  }, [
    isApiLoaded,
    apiError,
    modelId,
    annotations,
    autoRotate,
    ui_controls,
    ui_inspector,
    transparent,
    ui_theme,
    handleApiSuccess,
    handleApiError
  ])

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
        allow="autoplay; fullscreen; xr-spatial-tracking; accelerometer; gyroscope"
        data-xr-spatial-tracking="true"
        data-web-share="true"
        src={SketchfabClient.getEmbedUrl(modelId, { ui_theme })}
      />
    </div>
  )
}

// Wrap the component with error handling
export const Sketchfab = withErrorHandler(SketchfabComponent) 