interface SketchfabOptions {
  modelId: string;
  success?: (api: SketchfabAPI) => void;
  error?: (error: Error) => void;
  autostart?: boolean;
  annotations_visible?: boolean;
  autospin?: boolean;
  ui_infos?: boolean;
  ui_controls?: boolean;
  ui_inspector?: boolean;
  transparent?: boolean;
  preload?: boolean;
  ui_theme?: 'dark' | 'light';
  [key: string]: unknown;
}

// Sketchfab constructor options
interface SketchfabInitOptions {
  success: (api: SketchfabAPI) => void;
  error?: (error: Error) => void;
  autostart?: boolean;
  ui_theme?: 'dark' | 'light';
  preload?: number;
}

// Sketchfab constructor type
interface SketchfabConstructor {
  new (iframe: HTMLIFrameElement): {
    init: (modelId: string, options: SketchfabInitOptions) => void;
  };
}

declare global {
  interface Window {
    Sketchfab: SketchfabConstructor;
  }
}

export interface SketchfabAPI {
  start: () => void;
  stop: () => void;
  addEventListener: (event: string, callback: (response: unknown) => void) => void;
  removeEventListener: (event: string, callback: (response: unknown) => void) => void;
  getCameraLookAt: (callback: (err: Error | null, camera: CameraPosition) => void) => void;
  setCameraLookAt: (position: number[], target: number[], duration?: number) => void;
  getAnnotationList: (callback: (err: Error | null, annotations: AnnotationData[]) => void) => void;
  showAnnotations: () => void;
  hideAnnotations: () => void;
  setBackground: (color: [number, number, number]) => void;
  setMaterialColor: (materialId: number, color: [number, number, number]) => void;
  highlightMaterial: (materialId: number, enabled: boolean) => void;
  setFov: (fov: number) => void;
  getFov: (callback: (err: Error | null, fov: number) => void) => void;
  setCameraPosition: (position: [number, number, number]) => void;
  setCameraTarget: (target: [number, number, number]) => void;
  getCameraPosition: (callback: (position: [number, number, number]) => void) => void;
  recenterCamera: () => void;
  setAutoRotate: (enabled: boolean) => void;
  setRotationSpeed: (speed: number) => void;
  getMaterialList: (callback: (materials: unknown[]) => void) => void;
  highlight: (instanceId: number, callback: (err: Error, result: unknown) => void) => void;
  setEnvironment: (id: number) => void;
  showUI: () => void;
  hideUI: () => void;
}

interface CameraPosition {
  position: [number, number, number];
  target: [number, number, number];
}

interface AnnotationData {
  id: string;
  title: string;
  content: string;
  position: [number, number, number];
}

export class SketchfabClient {
  private client: SketchfabAPI | null = null;
  private iframe: HTMLIFrameElement;

  // Add static utility for model IDs
  public static readonly MODEL_IDS = {
    HYDRUS_SHIPWRECK: '11c4619cc5e44045b1df5fd4abdcb586',
    SUBSONUS: 'your-subsonus-model-id'
  } as const;

  // Add static utility for generating embed URLs
  public static getEmbedUrl(modelId: string, options: Partial<SketchfabOptions> = {}): string {
    const defaultOptions: Partial<SketchfabOptions> = {
      autostart: true,
      annotations_visible: true,
      autospin: true,
      ui_infos: true,
      ui_controls: true,
      ui_inspector: false,
      transparent: true,
      preload: true,
      ui_theme: 'dark'
    };

    const finalOptions = { ...defaultOptions, ...options };
    const params = new URLSearchParams(
      Object.entries(finalOptions)
        .filter(([key]) => key !== 'modelId' && key !== 'success' && key !== 'error')
        .map(([key, value]) => [key, value ? '1' : '0'])
    );

    if (finalOptions.ui_theme) {
      params.set('ui_theme', finalOptions.ui_theme);
    }

    return `https://sketchfab.com/models/${modelId}/embed?${params.toString()}`;
  }

  constructor(iframe: HTMLIFrameElement, options: SketchfabOptions) {
    this.iframe = iframe;
    this.initClient(options);
  }

  private initClient(options: SketchfabOptions) {
    if (!window.Sketchfab) {
      throw new Error('Sketchfab API not loaded');
    }

    const client = new window.Sketchfab(this.iframe);
    
    client.init(options.modelId, {
      success: (api: SketchfabAPI) => {
        this.client = api;
        api.start();
        api.addEventListener('viewerready', () => {
          if (options.success) options.success(api);
        });
      },
      error: options.error,
      autostart: true,
      ui_theme: options.ui_theme,
      preload: 1
    });
  }

  // Camera Controls
  public setCameraPosition(position: [number, number, number], target?: [number, number, number]) {
    if (this.client) {
      this.client.setCameraPosition(position);
      if (target) this.client.setCameraTarget(target);
    }
  }

  public getCameraPosition(): Promise<[number, number, number]> {
    return new Promise((resolve) => {
      if (!this.client) return;
      this.client.getCameraPosition(resolve);
    });
  }

  public recenterCamera() {
    if (this.client) this.client.recenterCamera();
  }

  // Animation Controls
  public startRotation(speed: number = 30) {
    if (this.client) {
      this.client.setAutoRotate(true);
      this.client.setRotationSpeed(speed);
    }
  }

  public stopRotation() {
    if (this.client) this.client.setAutoRotate(false);
  }

  // Annotation Controls
  public showAnnotations() {
    if (this.client) this.client.showAnnotations();
  }

  public hideAnnotations() {
    if (this.client) this.client.hideAnnotations();
  }

  public getAnnotations(): Promise<AnnotationData[]> {
    return new Promise((resolve, reject) => {
      if (this.client) {
        this.client.getAnnotationList((err: Error | null, annotations: AnnotationData[]) => {
          if (err) reject(err);
          else resolve(annotations);
        });
      }
    });
  }

  // Material & Object Controls
  public setMaterialColor(materialId: number, color: [number, number, number]) {
    if (!this.client) return;
    this.client.getMaterialList((materials) => {
      if (materials[materialId]) {
        this.client?.setMaterialColor(materialId, color);
      }
    });
  }

  public highlightPart(instanceId: number) {
    if (!this.client) return;
    this.client.highlight(instanceId, (err, result) => {
      if (!err) console.log('Part highlighted:', result);
    });
  }

  // Environment Controls
  public setBackground(color: [number, number, number]) {
    if (this.client) this.client.setBackground(color);
  }

  public setEnvironment(id: number) {
    if (this.client) this.client.setEnvironment(id);
  }

  // UI Controls
  public showUI() {
    if (this.client) this.client.showUI();
  }

  public hideUI() {
    if (this.client) this.client.hideUI();
  }

  // Navigation Controls
  public setFov(fov: number) {
    if (this.client) this.client.setFov(fov);
  }

  public getFov(): Promise<number> {
    return new Promise((resolve, reject) => {
      if (!this.client) return;
      this.client.getFov((err, fov) => {
        if (err) reject(err);
        else resolve(fov);
      });
    });
  }

  // Event Listeners
  public addEventListener(event: string, callback: (response: unknown) => void) {
    this.client?.addEventListener(event, callback);
  }

  public removeEventListener(event: string, callback: (response: unknown) => void) {
    this.client?.removeEventListener(event, callback);
  }
} 