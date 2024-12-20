import type { Meta, StoryObj } from '@storybook/vue3';
import ProductWidget from '@/components/ProductWidget.vue';

const meta: Meta<typeof ProductWidget> = {
  title: 'Components/ProductWidget',
  component: ProductWidget,
  tags: ['autodocs'],
  argTypes: {
    selectedColor: {
      control: 'select',
      options: ['green', 'blue', 'black', 'beige', 'white']
    },
    active: {
      control: 'boolean'
    },
    linked: {
      control: 'boolean'
    },
    type: {
      control: 'select',
      options: ['carbon', 'plastic', 'trees']
    },
    amount: {
      control: 'number'
    },
    action: {
      control: 'select',
      options: ['collects', 'plants', 'offsets']
    }
  }
};

export default meta;
type Story = StoryObj<typeof ProductWidget>;

export const Default: Story = {
  args: {
    id: 1,
    type: 'carbon',
    amount: 2,
    action: 'offsets',
    active: false,
    linked: false,
    selectedColor: 'green'
  }
};

export const Active: Story = {
  args: {
    ...Default.args,
    active: true
  }
};

export const Linked: Story = {
  args: {
    ...Default.args,
    linked: true
  }
};

export const DifferentColor: Story = {
  args: {
    ...Default.args,
    selectedColor: 'blue'
  }
};

export const FullInteraction: Story = {
  args: {
    id: 3,
    type: 'plastic',
    amount: 300,
    action: 'collects',
    active: true,
    linked: true,
    selectedColor: 'black'
  }
};
