export default {
    name: 'order',
    title: 'Order',
    type: 'document',
    fields: [
      {
        name: 'customerInfo',
        title: 'Customer Information',
        type: 'object',
        fields: [
          { name: 'name', title: 'Customer Name', type: 'string', validation: (Rule) => Rule.required() },
          { name: 'email', title: 'Email', type: 'string', validation: (Rule) => Rule.required().email() },
          { name: 'address', title: 'Address', type: 'string', validation: (Rule) => Rule.required() },
        ],
      },
      {
        name: 'productDetails',
        title: 'Product Details',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              { name: 'productId', title: 'Product ID', type: 'reference', to: [{ type: 'product' }] },
              { name: 'quantity', title: 'Quantity', type: 'number', validation: (Rule) => Rule.required().min(1) },
            ],
          },
        ],
      },
      {
        name: 'paymentStatus',
        title: 'Payment Status',
        type: 'string',
        options: {
          list: [
            { title: 'Paid', value: 'Paid' },
            { title: 'Pending', value: 'Pending' },
            { title: 'Failed', value: 'Failed' },
          ],
        },
        validation: (Rule) => Rule.required(),
      },
      {
        name: 'totalAmount',
        title: 'Total Amount',
        type: 'number',
        validation: (Rule) => Rule.required().min(0),
      },
    ],
  };
  