import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'blockBanner',
  type: 'object',
  fields: [
    defineField({
      name: 'label',
      type: 'string',
      description: 'Internal label for this block',
    }),
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'text',
      type: 'blockContent',
    }),
    defineField({
      name: 'button',
      title: 'Button',
      type: 'reference',
      to: [{type: 'button'}],
    }),
  ],
})
