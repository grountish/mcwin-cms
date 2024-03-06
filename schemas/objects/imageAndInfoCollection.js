export default {
  name: 'imageAndInfoCollection',
  title: 'Image & Info Collection',
  type: 'object',
  fields: [
    {
      name: 'collection',
      title: 'Collection',
      type: 'array',
      of: [{type: 'imageAndInfoSection'}],
    },
  ],
}
