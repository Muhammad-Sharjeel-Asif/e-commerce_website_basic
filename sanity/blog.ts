import { defineType, defineField, defineArrayMember } from "sanity";

export const blog = defineType({
    name: "blog",
    type: "document",
    title: "Blog Content",
    fields: [
        defineField({
            name: 'image',
            type: 'image',
            title: 'Image',
            options: { hotspot: true },
        }),
        defineField({
            name: "title",
            type: "string",
            title: "Blog Title",
            validation: rule => rule.required()
        }),
        defineField({
            name: 'slug',
            type: 'slug',
            title: 'Slug',
            options: { source: 'title', maxLength: 96 },
        }),
        defineField({
            name: 'publishedAt',
            type: 'date',
            title: 'Published at',
        }),
        defineField({
            name: 'firstpara',
            title: 'First Paragragh',
            type: 'array',
            of: [{ type: "block" }],
            validation: rule => rule.required()
        }),
        defineField({
            name: 'secondpara',
            title: 'Second Paragragh',
            type: 'array',
            of: [{ type: "block" }],
            validation: rule => rule.required()
        }),
        defineField({
            name: 'quotation',
            title: 'Quotation',
            type: 'array',
            of: [{ type: "block" }],
            validation: rule => rule.required()
        }),
        defineField({
            name: 'thirdpara',
            title: 'Third Paragragh',
            type: 'array',
            of: [{ type: "block" }],
            validation: rule => rule.required()
        }),
        defineField({
            name: 'forthpara',
            title: 'Forth Paragragh',
            type: 'array',
            of: [{ type: "block" }],
            validation: rule => rule.required()
        }),
        defineField({
            name: 'fifthpara',
            title: 'Fifth Paragragh',
            type: 'array',
            of: [{ type: "block" }],
            validation: rule => rule.required()
        }),
        defineField({
            name: 'sixthpara',
            title: 'Sixth Paragragh',
            type: 'array',
            of: [{ type: "block" }],
            validation: rule => rule.required()
        }),
        defineField({
            name: 'seventhpara',
            title: 'Seventh Paragragh',
            type: 'array',
            of: [{ type: "block" }],
            validation: rule => rule.required()
        }),
        defineField({
            name: 'sideimage',
            type: 'image',
            title: 'Side Image',
            options: { hotspot: true },
        })
    ]
})