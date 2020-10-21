import React from 'react';
import centered from '@storybook/addon-centered/react';
import { withKnobs, text } from "@storybook/addon-knobs";
import InputNumber from './index';
import readme from './readme.md';
import 'index.scss';

export default {
  title: 'Molecules/Input Number',
  component: InputNumber,
  parameters: {
    notes: readme,
  },
  decorators: [withKnobs, centered]
};

export const Basic = () =>
<InputNumber
    htmlFor= {text('htmlLabel', 'htmlForLabelTest')}
    id= {text('idInput', 'idInputTest')}
    labelText= {text('Label Text', 'Label Test')}
/>;
