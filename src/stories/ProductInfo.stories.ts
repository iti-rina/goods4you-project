import type { Meta, StoryObj } from '@storybook/react';
import { ProductInfo } from '../entities';
import { productItem } from '../../data';

const meta = {
  title: 'Molecules/ProductInfo',
  component: ProductInfo,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ProductInfo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    product: productItem
  },
};