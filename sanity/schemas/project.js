import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'type',
      title: 'Type',
      type: 'string',
      options: {
        list: [
          {title: 'Default', value: 'default'},
          {title: 'Mobile', value: 'mobile'},
          {title: 'Web', value: 'web'},
          {title: 'Desktop', value: 'desktop'},
        ],
        layout: 'radio',
      },
    }),
    defineField({
      name: 'images',
      title: 'Images',
      type: 'array',
      of : [{
        type: 'image',
      }],
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',

    }),
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
})
