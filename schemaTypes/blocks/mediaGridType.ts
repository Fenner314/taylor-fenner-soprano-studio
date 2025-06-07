import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'mediaGrid',
  title: 'Media Grid',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Grid Title',
      type: 'string',
      description: 'Title for this media grid (optional)',
    }),
    defineField({
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'mediaImage'}]}],
      validation: (Rule) => Rule.required().min(1),
      description: 'Add images to the grid',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      imageCount: 'images.length',
    },
    prepare({title, imageCount = 0}) {
      return {
        title: title || 'Media Grid',
        subtitle: `${imageCount} image${imageCount === 1 ? '' : 's'}`,
      }
    },
  },
})
