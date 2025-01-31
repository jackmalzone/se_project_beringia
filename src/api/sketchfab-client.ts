import { version } from '../../package.json'

interface SketchfabClientOptions {
  modelId: string;
  success?: (api: any) => void;
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
}

export class SketchfabClient {
  private client: any;
  private iframe: HTMLIFrameElement;

  // Add static utility for model IDs
  public static readonly MODEL_IDS = {
    HYDRUS_SHIPWRECK: '11c4619cc5e44045b1df5fd4abdcb586',
    SUBSONUS: 'your-subsonus-model-id'
  } as const;

  // Add static utility for generating embed URLs
  public static getEmbedUrl(modelId: string, options: Partial<SketchfabClientOptions> = {}): string {
    const defaultOptions: Partial<SketchfabClientOptions> = {
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

  constructor(iframe: HTMLIFrameElement, options: SketchfabClientOptions) {
    this.iframe = iframe;
    this.initClient(options);
  }

  private initClient(options: SketchfabClientOptions) {
    if (!window.Sketchfab) {
      throw new Error('Sketchfab API not loaded');
    }

    const client = new window.Sketchfab(this.iframe);
    
    client.init(options.modelId, {
      success: (api: any) => {
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
      if (this.client) this.client.getCameraPosition(resolve);
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

  public getAnnotations(): Promise<any[]> {
    return new Promise((resolve) => {
      if (this.client) this.client.getAnnotationList(resolve);
    });
  }

  // Material & Object Controls
  public setMaterialColor(materialId: number, color: [number, number, number]) {
    if (this.client) {
      this.client.getMaterialList((materials: any[]) => {
        if (materials[materialId]) {
          this.client.setMaterialColor(materialId, color);
        }
      });
    }
  }

  public highlightPart(instanceId: number) {
    if (this.client) {
      this.client.highlight(instanceId, (err: Error, result: any) => {
        if (!err) console.log('Part highlighted:', result);
      });
    }
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
    return new Promise((resolve) => {
      if (this.client) this.client.getFov(resolve);
    });
  }

  // Event Listeners
  public addEventListener(event: string, callback: (response: any) => void) {
    if (this.client) this.client.addEventListener(event, callback);
  }

  public removeEventListener(event: string, callback: (response: any) => void) {
    if (this.client) this.client.removeEventListener(event, callback);
  }
} 