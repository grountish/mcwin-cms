export default {
  name: 'imageInfoCTASection',
  title: 'Image & Info & CTA Section',
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
      name: 'image',
      title: 'Image',
      type: 'image',
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
