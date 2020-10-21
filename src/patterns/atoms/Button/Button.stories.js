import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text } from "@storybook/addon-knobs";
import centered from '@storybook/addon-centered/react';
import Button from './index';
import readme from './readme.md';
import 'index.scss';


export default {
  title: 'Atoms/Button ',
  parameters: {
    notes: readme,
  },
  component: Button,
  decorators: [withKnobs, centered]
};

export const Basic = () => <Button onClick={action('clicked')}>{text("Label", "Hello FCI3 developer")}</Button>;

