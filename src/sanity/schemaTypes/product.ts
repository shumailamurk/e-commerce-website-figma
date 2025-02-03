// export default {
//   name: 'product',
//   type: 'document',
//   title: 'Product',
//   fields: [
//     {
//       name: 'name',
//       type: 'string',
//       title: 'Name',
//       validation: (Rule: { required: () => { error: (msg: string) => void } }) =>
//         Rule.required().error('Name is required'),
//     },
//     {
//       name: 'slug',
//       type: 'slug',
//       title: 'Slug',
//       options: {
//         source: 'name',
//         maxLength: 96,
//       },
//       validation: (Rule: { required: () => { error: (msg: string) => void } }) =>
//         Rule.required().error('Slug is required'),
//     },
//     {
//       name: 'image',
//       type: 'image',
//       title: 'Image',
//       options: {
//         hotspot: true,
//       },
//       description: 'Upload an image of the product.',
//     },
//     {
//       name: 'price',
//       type: 'string',
//       title: 'Price',
//       validation: (Rule: { required: () => { error: (msg: string) => void } }) =>
//         Rule.required().error('Price is required'),
//     },
//     {
//       name: 'oldPrice',
//       type: 'string',
//       title: 'Old Price',
//     },
//     {
//       name: 'description',
//       type: 'text',
//       title: 'Description',
//       validation: (Rule: { max: (val: number) => { warning: (msg: string) => void } }) =>
//         Rule.max(150).warning('Keep the description under 150 characters.'),
//     },
//     {
//       name: 'discountPercentage',
//       type: 'number',
//       title: 'Discount Percentage',
//       validation: (Rule: {
//         min: (val: number) => { max: (val: number) => { warning: (msg: string) => void } };
//       }) =>
//         Rule.min(0).max(100).warning('Discount must be between 0 and 100.'),
//     },
//     {
//       name: 'isFeaturedProduct',
//       type: 'boolean',
//       title: 'Is Featured Product',
//     },
//     {
//       name: 'stockLevel',
//       type: 'number',
//       title: 'Stock Level',
//       validation: (Rule: { min: (val: number) => { error: (msg: string) => void } }) =>
//         Rule.min(0).error('Stock level must be a positive number.'),
//     },
//     {
//       name: 'category',
//       type: 'string',
//       title: 'Category',
//       options: {
//         list: [
//           { title: 'Chair', value: 'Chair' },
//           { title: 'Sofa', value: 'Sofa' },
//         ],
//       },
//       validation: (Rule: { required: () => { error: (msg: string) => void } }) =>
//         Rule.required().error('Category is required'),
//     },
//   ],
// };

import { Rule } from 'sanity';

export default {
  name: 'product',
  type: 'document',
  title: 'Product',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
      validation: (Rule: Rule) => Rule.required().error('Name is required'),
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (Rule: Rule) => Rule.required().error('Slug is required'),
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image',
      options: {
        hotspot: true,
      },
      description: 'Upload an image of the product.',
    },
    {
      name: 'price',
      type: 'string',
      title: 'Price',
      validation: (Rule: Rule) => Rule.required().error('Price is required'),
    },
    {
      name: 'oldPrice',
      type: 'string',
      title: 'Old Price',
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
      validation: (Rule: Rule) => Rule.max(150).warning('Keep the description under 150 characters.'),
    },
    {
      name: 'details',
      type: 'text', // Field for product details
      title: 'Product Details',
      description: 'Add detailed information about the furniture product, including material, size, color, design, and durability.',
    },
    {
      name: 'discountPercentage',
      type: 'number',
      title: 'Discount Percentage',
      validation: (Rule: Rule) => Rule.min(0).max(100).warning('Discount must be between 0 and 100.'),
    },
    {
      name: 'isFeaturedProduct',
      type: 'boolean',
      title: 'Is Featured Product',
    },
    {
      name: 'stockLevel',
      type: 'number',
      title: 'Stock Level',
      validation: (Rule: Rule) => Rule.min(0).error('Stock level must be a positive number.'),
    },
    {
      name: 'category',
      type: 'string',
      title: 'Category',
      options: {
        list: [
          { title: 'Chair', value: 'Chair' },
          { title: 'Sofa', value: 'Sofa' },
          { title: 'Table', value: 'Table' },
          { title: 'Cabinet', value: 'Cabinet' },
        ],
      },
      validation: (Rule: Rule) => Rule.required().error('Category is required'),
    },
    {
      name: 'ratings',
      type: 'number', // Number type for ratings
      title: 'Ratings',
      description: 'Add a rating from 1 to 5 for the product.',
      validation: (Rule: Rule) => Rule.min(1).max(5).error('Ratings must be between 1 and 5.'),
    },
  ],
};


