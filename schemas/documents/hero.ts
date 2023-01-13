import { BlockElementIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'hero',
  title: 'Hero',
  type: 'document',
  icon: BlockElementIcon,
  // Uncomment below to have edits publish automatically as you type
  // liveEdit: true,
  fields: [
    defineField({
      name: 'heading',
      description: 'Main headline for your hero',
      title: 'Heading',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'subHeading',
      description: 'Sub headline for your hero',
      title: 'Sub Heading',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'featureImage',
      title: 'Feature Image',
      description:
        'Feature image for the hero',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (rule) => rule.required(),
    }),
  ],
})
