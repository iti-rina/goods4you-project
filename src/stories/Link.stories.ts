import type { Meta, StoryObj } from '@storybook/react';
import { LinkComponent } from '../share/ui/link';

const meta = {
  title: 'Atom/Link',
  component: LinkComponent,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'light', value: '#ffffff' },
        { name: 'dark', value: '#484283' },
      ],
    },
  },
  
  tags: ['autodocs'],
} satisfies Meta<typeof LinkComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    text: 'Catalog',
    url: '#',
    isLogo: false
  },
};

export const Logo: Story = {
  args: {
    text: 'Goods4you',
    url: '#',
    isLogo: true
  },
};

