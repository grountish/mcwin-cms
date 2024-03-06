export default {
  name: 'layout',
  title: 'Layout',
  type: 'document',
  fields: [
    {
      name: 'header',
      title: 'Header',
      type: 'array',
      of: [
        {
          type: 'link',
        },
      ],
    },
    {
      name: 'mainLogo',
      title: 'Main Logo',
      type: 'image',
    },
    {
      name: 'footerLogo',
      title: 'Footer Logo',
      type: 'image',
    },
  ],
}
