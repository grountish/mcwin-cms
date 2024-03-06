export default {
  name: 'imageInfoCTACollection',
  title: 'Image & Info & CTA Collection',
  type: 'object',
  fields: [
    {
      name: 'collection',
      title: 'Collection',
      type: 'array',
      of: [{type: 'imageInfoCTASection'}],
    },
  ],
}
