export default {
  name: 'bestMoments',
  title: 'Best Moments',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'array',
      of: [{type: 'block'}],
    },
    {
      name: 'moments',
      title: 'moments',
      type: 'array',
      of: [{type: 'image'}],
    },
  ],
}
