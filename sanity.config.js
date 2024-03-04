import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {colorInput} from '@sanity/color-input'
import {myStructure} from './deskStructure'

export default defineConfig({
  name: 'default',
  title: 'decipher-cms',

  projectId: '9nxeopkt',
  dataset: 'production',

  plugins: [
    structureTool({
      structure: myStructure,
    }),
    visionTool(),
    colorInput(),
  ],

  schema: {
    types: schemaTypes,
  },
})
