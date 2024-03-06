import {DocumentIcon} from '@sanity/icons'

export default {
  name: 'home',
  title: 'Home',
  type: 'document',
  icon: DocumentIcon,
  fields: [
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
      ],
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
}
