import { slateEditor } from '@payloadcms/richtext-slate'
import path from 'path'
import type { CollectionConfig } from 'payload/types'

export const Media: CollectionConfig = {
  slug: 'media',
  upload:true,
  /*upload: {
    staticDir: path.resolve(__dirname, '../../../media'),
  },*/
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'url',
      type: 'text', // Ensure this is present
    },
    {
      name: 'alt',
      type: 'text',
      required: true,
    },
    {
      name: 'caption',
      type: 'richText',
      editor: slateEditor({
        admin: {
          elements: ['link'],
        },
      }),
    },
  ],
}
