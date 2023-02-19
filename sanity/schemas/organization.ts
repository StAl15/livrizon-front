export default {
    name: 'organization',
    title: 'Organization',
    type: 'document',
    fields: [
        {
            name: 'organizationName',
            title: 'OrganizationName',
            type: 'string'
        },
        {
            name: 'team',
            title: 'Team',
            type: 'array',
            of: [{ type: 'user' }],
        },
        {
            name: 'knowledge',
            title: 'Knowledge',
            type: 'array',
            of: [{ type: 'knowledge' }],
        },
        {
            name: 'achievements',
            title: 'Achievements',
            type: 'array',
            of: [{ type: 'achievements' }],
        },
        {
            name: 'benefits',
            title: 'benefits',
            type: 'array',
            of: [{ type: 'benefits' }],
        },
    ],
};


// {
//     name: 'image',
//         title: 'Image',
//     type: 'image',
//     options: {
//     hotspot: true,
// },
// },