export default {
    name: 'user',
    title: 'User',
    type: 'document',
    fields: [
        {
            name: 'userName',
            title: 'UserName',
            type: 'string',
        },
        {
            name: 'balance',
            title: 'Balance',
            type: 'number',
        },
        {
            name: 'login',
            title: 'Login',
            type: 'string',
        },
        {
            name: 'password',
            title: 'Password',
            type: 'string',
        },
        {
            name: 'avatar',
            title: 'Avatar',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'bio',
            title: 'Bio',
            type: 'text',
        },
        {
            name: 'role',
            title: 'Role',
            type: 'role',
        },


    ],
};