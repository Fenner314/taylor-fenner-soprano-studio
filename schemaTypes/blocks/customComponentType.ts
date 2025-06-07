import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'customComponent',
  title: 'Custom Component',
  type: 'object',
  fields: [
    defineField({
      name: 'label',
      type: 'string',
      description: 'Internal label for this block',
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Optional title for this section',
    }),
    defineField({
      name: 'component',
      title: 'Component',
      type: 'string',
    }),
    defineField({
      name: 'props',
      title: 'Component Props',
      type: 'text',
      description:
        'Optional JSON object with props for the component (e.g., {"maxItems": 4, "featured": true})',
    }),
  ],

  preview: {
    select: {
      title: 'title',
      component: 'component',
    },
  },
})
