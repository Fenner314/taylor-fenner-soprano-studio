import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'downloads',
  title: 'Downloads',
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
      name: 'downloads',
      title: 'Downloads',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'downloadItem'}]}],
    }),
  ],
})
