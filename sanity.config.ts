import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {colorInput} from '@sanity/color-input'

export default defineConfig([
  {
    name: 'production',
    title: 'Production - Taylor Fenner | Soprano',
    basePath: '/production',

    projectId: '8ilpvobb',
    dataset: 'production',

    plugins: [structureTool(), visionTool(), colorInput()],

    schema: {
      types: schemaTypes,
    },
  },
  {
    name: 'test',
    title: 'Test - Taylor Fenner | Soprano',
    basePath: '/test',

    projectId: '8ilpvobb',
    dataset: 'test',

    plugins: [structureTool(), visionTool(), colorInput()],

    schema: {
      types: schemaTypes,
    },
  },
])
