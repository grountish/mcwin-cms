export default {
  name: 'pageSchema',
  title: 'Pages',
  type: 'document',
  //__experimental_actions: ["update", "publish"],
  fields: [
    {
      name: 'title',
      title: 'title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 34,
      },
    },
    {
      title: 'Blocks',
      name: 'Blocks',
      type: 'array',
      of: [
        {
          type: 'mainHero',
        },
        {
          type: 'slider',
        },
        {
          type: 'imageAndInfoCollection',
        },
        {
          type: 'imageAndInfoSection',
        },
        {
          type: 'imageInfoCTACollection',
        },
        {
          type: 'imageInfoCTASection',
        },
        {
          type: 'titleSubtitleCTA',
        },
        {
          type: 'agenda',
        },
        {
          type: 'titleDataMapCTA',
        },
      ],
    },
  ],
}
