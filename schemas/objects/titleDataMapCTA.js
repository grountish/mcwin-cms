export default {
  name: 'titleDataMapCTA',
  title: 'Title & Data & Map & CTA',
  type: 'object',
  fields: [
    {
      name: 'backgroundImage',
      title: 'Background Image',
      type: 'image',
    },
    {
      name: 'topSecondaryTitle',
      title: 'Top Secondary Title',
      type: 'array',
      of: [{type: 'block'}],
    },
    {
      name: 'title',
      title: 'Title',
      type: 'array',
      of: [{type: 'block'}],
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'array',
      of: [{type: 'block'}],
    },
    {
      name: 'dataOneIcon',
      title: 'Primary Icon',
      type: 'image',
    },
    {
      name: 'dataOne',
      title: 'Primary Data',
      type: 'array',
      of: [{type: 'block'}],
    },
    {
      name: 'dataOneURL',
      title: 'Primary Data URL',
      type: 'string',
    },
    {
      name: 'dataTwoIcon',
      title: 'Secondary Icon',
      type: 'image',
    },
    {
      name: 'dataTwo',
      title: 'Secondary Data',
      type: 'array',
      of: [{type: 'block'}],
    },
    {
      name: 'dataTwoURL',
      title: 'Secondary Data URL',
      type: 'string',
    },
    {
      name: 'dataThreeIcon',
      title: 'Tertiary Icon',
      type: 'image',
    },
    {
      name: 'dataThree',
      title: 'Tertiary Data',
      type: 'array',
      of: [{type: 'block'}],
    },
    {
      name: 'dataThreeURL',
      title: 'Tertiary Data URL',
      type: 'string',
    },
    {
      name: 'mapEmbedURL',
      title: 'Map Embed URL',
      type: 'string',
    },
    {
      name: 'buttonTitle',
      title: 'Button Title',
      type: 'string',
    },
  ],
}
