import { defineField, defineType } from 'sanity'

export const client = defineType({
  name: 'client',
  title: 'Client',
  type: 'document',
  fields: [
    // Basic Information
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
    }),
    // SEO
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Title',
          type: 'string',
        }),
        defineField({
          name: 'description',
          title: 'Description',
          type: 'text',
        }),
        defineField({
          name: 'ogImage',
          title: 'OG Image',
          type: 'image',
        }),
      ],
    }),
    // Overview
    defineField({
      name: 'overview',
      title: 'Overview',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Title',
          type: 'string',
        }),
        defineField({
          name: 'description',
          title: 'Description',
          type: 'text',
        }),
        defineField({
          name: 'headerImage',
          title: 'Header Image',
          type: 'image',
        }),
      ],
    }),
    // Selling Points
    defineField({
      name: 'sellingPoints',
      title: 'Selling Points',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Title',
          type: 'string',
        }),
        defineField({
          name: 'points',
          title: 'Points',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({
                  name: 'id',
                  title: 'ID',
                  type: 'string',
                }),
                defineField({
                  name: 'title',
                  title: 'Title',
                  type: 'string',
                }),
                defineField({
                  name: 'description',
                  title: 'Description',
                  type: 'text',
                }),
                defineField({
                  name: 'icon',
                  title: 'Icon',
                  type: 'image',
                }),
                defineField({
                  name: 'features',
                  title: 'Features',
                  type: 'array',
                  of: [{ type: 'string' }],
                }),
                defineField({
                  name: 'link',
                  title: 'Link',
                  type: 'url',
                }),
                defineField({
                  name: 'documentation',
                  title: 'Documentation',
                  type: 'object',
                  fields: [
                    defineField({
                      name: 'specs',
                      title: 'Specifications',
                      type: 'string',
                    }),
                    defineField({
                      name: 'manual',
                      title: 'Manual',
                      type: 'string',
                    }),
                  ],
                }),
              ],
            },
          ],
        }),
      ],
    }),
    // Use Cases
    defineField({
      name: 'useCases',
      title: 'Use Cases',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Title',
          type: 'string',
        }),
        defineField({
          name: 'description',
          title: 'Description',
          type: 'text',
        }),
        defineField({
          name: 'cases',
          title: 'Cases',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({
                  name: 'id',
                  title: 'ID',
                  type: 'string',
                }),
                defineField({
                  name: 'title',
                  title: 'Title',
                  type: 'string',
                }),
                defineField({
                  name: 'description',
                  title: 'Description',
                  type: 'text',
                }),
                defineField({
                  name: 'keyPoints',
                  title: 'Key Points',
                  type: 'array',
                  of: [{ type: 'string' }],
                }),
              ],
            },
          ],
        }),
      ],
    }),
    // Value Proposition
    defineField({
      name: 'valueProposition',
      title: 'Value Proposition',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Title',
          type: 'string',
        }),
        defineField({
          name: 'description',
          title: 'Description',
          type: 'text',
        }),
        defineField({
          name: 'highlights',
          title: 'Highlights',
          type: 'array',
          of: [{ type: 'string' }],
        }),
      ],
    }),
    // Media Links
    defineField({
      name: 'mediaLinks',
      title: 'Media Links',
      type: 'object',
      fields: [
        defineField({
          name: 'website',
          title: 'Website',
          type: 'url',
        }),
        defineField({
          name: 'youtube',
          title: 'YouTube',
          type: 'url',
        }),
        defineField({
          name: 'linkedin',
          title: 'LinkedIn',
          type: 'url',
        }),
        defineField({
          name: 'sketchfab',
          title: 'Sketchfab',
          type: 'url',
        }),
        defineField({
          name: 'email',
          title: 'Email',
          type: 'string',
        }),
      ],
    }),
    // Gallery
    defineField({
      name: 'gallery',
      title: 'Gallery',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'id',
              title: 'ID',
              type: 'string',
            }),
            defineField({
              name: 'type',
              title: 'Type',
              type: 'string',
              options: {
                list: [
                  { title: 'Image', value: 'image' },
                  { title: 'Video', value: 'video' },
                  { title: 'Sketchfab', value: 'sketchfab' },
                ],
              },
            }),
            defineField({
              name: 'image',
              title: 'Image',
              type: 'image',
              options: {
                hotspot: true,
              },
              fields: [
                {
                  name: 'alt',
                  type: 'string',
                  title: 'Alt Text',
                  description: 'Important for SEO and accessibility.',
                },
              ],
              hidden: ({ parent }) => parent?.type !== 'image',
            }),
            defineField({
              name: 'videoUrl',
              title: 'Video URL',
              type: 'url',
              hidden: ({ parent }) => parent?.type !== 'video',
            }),
            defineField({
              name: 'videoOptions',
              title: 'Video Options',
              type: 'object',
              fields: [
                defineField({
                  name: 'autoplay',
                  title: 'Autoplay',
                  type: 'boolean',
                }),
                defineField({
                  name: 'muted',
                  title: 'Muted',
                  type: 'boolean',
                }),
                defineField({
                  name: 'controls',
                  title: 'Controls',
                  type: 'boolean',
                }),
                defineField({
                  name: 'loop',
                  title: 'Loop',
                  type: 'boolean',
                }),
                defineField({
                  name: 'preload',
                  title: 'Preload',
                  type: 'string',
                  options: {
                    list: [
                      { title: 'None', value: 'none' },
                      { title: 'Metadata', value: 'metadata' },
                      { title: 'Auto', value: 'auto' },
                    ],
                  },
                }),
              ],
              hidden: ({ parent }) => parent?.type !== 'video',
            }),
            defineField({
              name: 'modelId',
              title: 'Sketchfab Model ID',
              type: 'string',
              hidden: ({ parent }) => parent?.type !== 'sketchfab',
            }),
          ],
          preview: {
            select: {
              title: 'id',
              media: 'image',
            },
          },
        },
      ],
    }),
    // Demo
    defineField({
      name: 'demo',
      title: 'Demo',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Title',
          type: 'string',
        }),
        defineField({
          name: 'description',
          title: 'Description',
          type: 'text',
        }),
        defineField({
          name: 'videoUrl',
          title: 'Video URL',
          type: 'url',
        }),
      ],
    }),
    // Technical Fields (moved to the end)
    defineField({
      name: 'modelId',
      title: 'Model ID',
      type: 'string',
      description: 'ID for the main 3D model associated with this client',
    }),
  ],
}) 