export default {
    name: 'chef',
    type: 'document',
    title: 'Chef',
    fields: [
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true
            }
        },
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'designation',
            title: 'Designation',
            type: 'string',
        }
    ]
}