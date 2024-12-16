import React from 'react';
import { Index } from './index';
import { action } from '@storybook/addon-actions';
import { Meta } from '@storybook/react';

const mockProducts = [
  {
    sku: '001',
    name: 'Product 1',
    description: 'A wonderful product',
    price: 19.99,
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    sku: '002',
    name: 'Product 2',
    description: 'Another great product',
    price: 29.99,
    imageUrl: 'https://via.placeholder.com/150',
  },
];

const mockCartItems = [
  { itemId: '001', name: 'Product 1', quantity: 2, price: 19.99 },
  { itemId: '002', name: 'Product 2', quantity: 1, price: 29.99 },
];

export default {
  title: 'Components/Homepage',
  component: Index,
} as Meta<typeof Index>;

const Template = (args: any) => <Index {...args} />;

export const Default = Template.bind({});
Default.args = {
  products: mockProducts,
  cartServerItems: mockCartItems,
  loadingCart: false,
  onAddToCart: action('onAddToCart'),
  onDropdownClicked: action('onDropdownClicked'),
};

export const CartLoading = Template.bind({});
CartLoading.args = {
  products: mockProducts,
  cartServerItems: [],
  loadingCart: true,
  onAddToCart: action('onAddToCart'),
  onDropdownClicked: action('onDropdownClicked'),
};