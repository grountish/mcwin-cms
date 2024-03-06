export default {
  name: 'titleSubtitleCTA',
  title: 'Title & Subtitle & CTA',
  type: 'object',
  fields: [
    {
      name: 'backgroundImage',
      title: 'Background Image',
      type: 'image',
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
      name: 'CTATitle',
      title: 'CTA Title',
      type: 'string',
    },
    {
      name: 'CTAURL',
      title: 'CTA URL',
      type: 'string',
    },
  ],
}
