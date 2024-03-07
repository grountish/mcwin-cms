export default {
  name: 'agenda',
  title: 'Agenda',
  type: 'object',
  fields: [
    {
      title: 'background',
      name: 'background',
      type: 'image',
    },
    {
      title: 'slots',
      name: 'slots',
      type: 'array',
      of: [
        {
          type: 'slot',
        },
      ],
    },
  ],
}
