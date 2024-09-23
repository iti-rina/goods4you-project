import type { Meta, StoryObj } from '@storybook/react';
import { Btn } from '../share';

const meta = {
  title: 'Atoms/Button',
  component: Btn,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Btn>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    text: 'Go to shopping',
    isActive: true,
  },
};

export const Icon: Story = {
  args: {
    iconName: 'cart',
    isActive: true,
  },
};






