import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {colorInput} from '@sanity/color-input'
import {myStructure} from './deskStructure'
import {vercelDeployTool} from 'sanity-plugin-vercel-deploy'

export default defineConfig({
  name: 'default',
  title: 'McWin CMS',

  projectId: '9nxeopkt',
  dataset: 'production',

  plugins: [
    structureTool({
      structure: myStructure,
    }),
    visionTool(),
    colorInput(),
    vercelDeployTool(),
  ],

  document: {
    productionUrl: async (_, context) => {
      const {document} = context

      return `https://mcwin-lilac.vercel.app/api/preview?secret=supersecret&slug=${document?.slug?.current ?? ''}`
    },
  },

  schema: {
    types: schemaTypes,
  },
})
