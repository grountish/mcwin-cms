export default {
  name: 'streamSchedule',
  title: 'Stream Schedule',
  type: 'object',
  fields: [
    {
      title: 'Agenda',
      name: 'agenda',
      type: 'array',
      of: [
        {
          type: 'event',
        },
      ],
    },
  ],
}
