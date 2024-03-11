export default {
  name: 'mainHero',
  title: 'Main Hero',
  type: 'object',
  fields: [
    {
      name: 'topHeader',
      title: 'Top Header',
      type: 'string',
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
      name: 'date',
      title: 'Date',
      type: 'array',
      of: [{type: 'block'}],
    },
    {
      name: 'location',
      title: 'Location',
      type: 'array',
      of: [{type: 'block'}],
    },
    {
      name: 'buttonText',
      title: 'Button Text',
      type: 'string',
    },
    {
      name: 'video',
      title: 'video',
      type: 'file',
    },
    {
      name: 'videoText',
      title: 'Video Text',
      type: 'string',
    },
    {
      name: 'foundersText',
      title: 'Founders Text',
      type: 'string',
    },
    {
      name: 'founders',
      title: 'founders',
      type: 'array',
      of: [{type: 'image'}],
    },
  ],
}
