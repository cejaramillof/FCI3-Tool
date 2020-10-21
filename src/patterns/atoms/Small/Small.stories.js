import React from 'react';
import { withKnobs, text } from "@storybook/addon-knobs";
import centered from '@storybook/addon-centered/react';
import Small from './index';
import readme from './readme.md';
import 'index.scss';


export default {
  title: 'Atoms/Small ',
  parameters: {
    notes: readme,
  },
  component: Small,
  decorators: [withKnobs, centered]
};

export const Basic = () => <Small className={text("className", "form-text text-muted d-flex justify-content-center")} id="id-storybook">{text("Label", "Hello FCI3 developer")}</Small>;

