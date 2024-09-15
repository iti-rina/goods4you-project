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
  images: ['./src/assets/images/main_photo.png', './src/assets/images/main_photo.png', './src/assets/images/main_photo.png', './src/assets/images/main_photo.png', './src/assets/images/main_photo.png', './src/assets/images/main_photo.png'],
  coverImage: './src/assets/images/main_photo.png'
};

export const products = new Array(12).fill(productItem);