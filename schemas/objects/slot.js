export default {
  name: 'slot',
  title: 'slot',
  type: 'object',
  fields: [
    {
      title: 'title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'events',
      name: 'events',
      type: 'array',
      of: [
        {
          type: 'event',
        },
      ],
    },
  ],
}
