export default {
    name: 'role',
    title: 'Role',
    type: 'document',
    fields: [
        {
            name: 'user',
            title: 'User',
            type: 'boolean',
        },
        {
            name: 'mentor',
            title: 'Mentor',
            type: 'boolean',
        },
        {
            name: 'admin',
            title: 'Admin',
            type: 'boolean',
        },
    ]
}