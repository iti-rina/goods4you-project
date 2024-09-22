import type { Meta, StoryObj } from '@storybook/react';
import { CartItem } from '../widgets/cart-item';

const cartItemData = {
  "id": 108,
  "title": "iPhone 12 Silicone Case with MagSafe Plum",
  "price": 29.99,
  "quantity": 5,
  "total": 149.95,
  "discountPercentage": 14.68,
  "discountedTotal": 127.94,
  "thumbnail": "https://cdn.dummyjson.com/products/images/mobile-accessories/iPhone%2012%20Silicone%20Case%20with%20MagSafe%20Plum/thumbnail.png"
};


const meta = {
  title: 'Molecules/CartItem',
  component: CartItem,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CartItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    data: cartItemData
  },
};

