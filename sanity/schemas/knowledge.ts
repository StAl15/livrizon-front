export default {
    name: 'knowledge',
    title: 'Knowledge',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string'
        },
        {
            name: 'text',
            title: 'Text',
            type: 'text'
        },
        {
            name: 'contacts',
            title: 'Contacts',
            type: 'text'
        },
        {
            name: 'media',
            title: 'Media',
            type: 'array',
            of: [{ type: 'file' }],
        },
        {
            name: 'cover',
            title: 'Cover',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
    ]
}