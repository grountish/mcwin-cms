export default {
  name: 'agenda',
  title: 'Agenda',
  type: 'object',
  fields: [
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
