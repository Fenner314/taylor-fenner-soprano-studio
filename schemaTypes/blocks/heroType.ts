import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'hero',
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
      name: 'image',
      type: 'image',
    }),
    defineField({
      name: 'parallax',
      type: 'boolean',
      description: 'Enable parallax scrolling effect',
      initialValue: false,
    }),
    defineField({
      name: 'styles',
      type: 'styleSettings',
      title: 'Style Settings',
      description: 'Visual styling options for this block',
    }),
  ],
})
