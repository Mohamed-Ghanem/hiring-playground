import React from 'react';
import { ComponentStory, Meta } from '@storybook/react';
import Header from './Header';
import { HeaderProps } from './types';

import { fn } from '@storybook/test';
import * as actual from 'modules/services/products';
import * as actual2 from 'modules/services';
export const getCart = fn(actual.getCart).mockName('getCart');
export const appName = fn(actual2.appName).mockName('appName');

import './Header.module.scss';

export default {
  title: 'Components/Header',
  component: Header,
} as Meta<typeof Header>;

const Template: ComponentStory<typeof Header> = (
  args: HeaderProps
) => <Header {...args} />;

export const Default = Template.bind({});