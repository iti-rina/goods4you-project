export const productItem = {
  "id": '1',
  "title": "Essence Mascara Lash Princess",
  "description": "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
  "category": "beauty",
  "price": 9.99,
  "discountPercentage": 7.17,
  "rating": 4.94,
  "stock": 5,
  "tags": [
      "beauty",
      "mascara"
  ],
  "brand": "Essence",
  "warrantyInformation": "1 month warranty",
  "shippingInformation": "Ships in 1 month",
  "availabilityStatus": "Low Stock",
  "images": [
      "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png"
  ],
  "thumbnail": "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png"
}

export const products = new Array(12).fill(productItem);

type FAQItem = {
  title: string;
  content: string
}

export const faqItems: FAQItem[] = [
  {title: 'How can I track the status of my order?', content: 'After placing your order, you will receive a confirmation email containing your order number and a tracking link. You can also log in to your account on our website and go to the "My Orders" section to track your delivery status.'},
  {title: 'What payment methods do you accept?', content : 'After placing your order, you will receive a confirmation email containing your order number and a tracking link. You can also log in to your account on our website and go to the "My Orders" section to track your delivery status.'},
  {title: 'How can I return or exchange an item?', content: 'After placing your order, you will receive a confirmation email containing your order number and a tracking link. You can also log in to your account on our website and go to the "My Orders" section to track your delivery status.'},
];