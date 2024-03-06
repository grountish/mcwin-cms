export default {
  name: 'imageAndInfoSection',
  title: 'Image & Info Section',
  type: 'object',
  fields: [
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
      name: 'logo',
      title: 'Logo',
      type: 'image',
    },
  ],
}
