import { SketchfabAPI } from '../api/sketchfab-client'

interface Window {
  Sketchfab: {
    (iframe: HTMLIFrameElement, options: unknown): SketchfabAPI;
    version: string;
  };
} 