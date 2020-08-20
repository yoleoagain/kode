import React from 'react';
import { action } from '@storybook/addon-actions';
import Button from './Button';

export default {
  title: 'Button',
  component: Button,
};

export const Simple = () => <Button color="primary" onClick={action('clicked')}>Text</Button>;

export const Disabled = () => <Button onClick={action('clicked')} disabled={true}>Text</Button>

