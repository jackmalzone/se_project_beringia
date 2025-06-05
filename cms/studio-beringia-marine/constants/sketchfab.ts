export const SKETCHFAB_MODEL_IDS = {
  HYDRUS_SHIPWRECK: 'your-model-id-here', // Replace with actual ID
  // Add other model IDs as needed
} as const

export type SketchfabModelId = keyof typeof SKETCHFAB_MODEL_IDS 