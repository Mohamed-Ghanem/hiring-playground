import React from 'react';
import { ComponentStory, Meta } from '@storybook/react';
import Homepage from './Homepage';
import { HomepageProps } from './types';
import './Homepage.module.scss';

export default {
  title: 'Components/ProductCard',
  component: Homepage,
} as Meta<typeof Homepage>;

const Template: ComponentStory<typeof Homepage> = (
  args: HomepageProps
) => <Homepage {...args} />;

export const Default = Template.bind({});
Default.args = {
  image: 'https://picsum.photos/200/300',
  title: 'Sample Product',
  description: 'This is a sample product description.',
  price: 29.99,
  onAddToCart: () => alert('Added to cart!'),
};

export const WithLongDescription = Template.bind({});
WithLongDescription.args = {
  image: 'https://picsum.photos/200/301',
  title: 'Sample Product with Long Description',
  description:
    'This is a sample product description that is significantly longer than the default description to test how the component handles longer text.',
  price: 49.99,
  onAddToCart: () => alert('Added to cart!'),
};
