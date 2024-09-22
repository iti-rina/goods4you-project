import type { Meta, StoryObj } from '@storybook/react';
import ProductCard from '../widgets/product-item/ui';
import { productItem } from '../../data';

const meta = {
  title: 'Molecules/ProductCard',
  component: ProductCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ProductCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    product: productItem
  },
};

