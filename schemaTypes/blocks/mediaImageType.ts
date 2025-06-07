import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'mediaImage',
  title: 'Media Image',
  type: 'document',
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
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'organization',
      title: 'Organization',
      type: 'string',
    }),
    defineField({
      name: 'styles',
      title: 'Custom Styles',
      type: 'text',
      description: 'Add CSS styles as a JSON object (e.g. {"objectPosition": "top center"})',
      validation: (Rule) =>
        Rule.custom((text: string | undefined) => {
          if (!text) return true
          try {
            JSON.parse(text)
            return true
          } catch (err) {
            return 'Must be valid JSON'
          }
        }),
    }),
  ],

  preview: {
    select: {
      title: 'title',
      media: 'image',
      organization: 'organization',
    },
    prepare(selection) {
      const {title, media, organization} = selection
      return {
        title: title,
        media: media,
        subtitle: `${organization ? organization + ' - ' : ''}`,
      }
    },
  },
})
