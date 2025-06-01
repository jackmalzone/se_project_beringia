import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {deskStructure} from './deskStructure'

export default defineConfig({
  name: 'default',
  title: 'Beringia Marine',

  projectId: 'rq9avsrj',
  dataset: 'production',

  plugins: [
    structureTool({
      structure: deskStructure
    }),
    visionTool()
  ],

  schema: {
    types: schemaTypes,
  },
})
