export default {
  name: 'titleDataMapCTA',
  title: 'Title & Data & Map & CTA',
  type: 'object',
  fields: [
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
      name: 'dataOne',
      title: 'Primary Data',
      type: 'array',
      of: [{type: 'block'}],
    },
    {
      name: 'dataOneURL',
      title: 'Primary Data URL',
      type: 'array',
      of: [{type: 'block'}],
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
      type: 'array',
      of: [{type: 'block'}],
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
      type: 'array',
      of: [{type: 'block'}],
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
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
    {
      name: 'buttonUrl',
      title: 'Button URL',
      type: 'string',
    },
  ],
}
