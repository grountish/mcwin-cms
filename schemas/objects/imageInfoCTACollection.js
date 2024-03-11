export default {
  name: 'imageInfoCTACollection',
  title: 'Image & Info & CTA Collection',
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
    {
      name: 'collection',
      title: 'Collection',
      type: 'array',
      of: [{type: 'imageInfoCTASection'}],
    },
  ],
}
