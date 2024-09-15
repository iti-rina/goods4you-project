import type { Product } from './src/share/types';

const productItem: Product = {
  id: '1',
  name: 'Essence Mascara Lash Princess',
  description: 'The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.',
  firstPrice: '9.99',
  discountPrice: '7.17',
  rating: 4,
  categories: ['electronics', 'selfie accessories'],
  stock: true,
  stockQnt: 5,
  warranty: '1 month warranty',
  ship: 'Ships in 1 month',
  images: ['./src/assets/images/catalog.png', './src/assets/images/catalog.png', './src/assets/images/catalog.png', './src/assets/images/catalog.png', './src/assets/images/catalog.png', './src/assets/images/catalog.png'],
  coverImage: './src/assets/images/catalog.png'
};

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