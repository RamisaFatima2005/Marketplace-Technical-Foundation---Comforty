export default {
    name: 'product',
    title: 'Product',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Product Name',
        type: 'string',
        validation: (Rule) => Rule.required().min(2).max(100),
      },
      {
        name: 'price',
        title: 'Price',
        type: 'number',
        validation: (Rule) => Rule.required().min(0),
      },
      {
        name: 'stock',
        title: 'Stock Quantity',
        type: 'number',
        validation: (Rule) => Rule.required().min(0),
      },
      {
        name: 'image',
        title: 'Product Image',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
    ],
  };
  