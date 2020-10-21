import React from 'react';
import { withKnobs, text, array } from "@storybook/addon-knobs";
import InputRange from './index';
import readme from './readme.md';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Molecules/InputRange ',
  parameters: {
    notes: readme
  },
  component: InputRange,
  decorators: [withKnobs],
};

const ranges = ['Range 1', 'Range 2', 'Range 3', 'Range 4', 'Range 5'];
const defaultValue = 0;

export const Basic = () =>
  <InputRange
    id="id-element"
    labelText={text("Title", "Label title")}
    tags={array('ranges', ranges)}
    defaultValue= {defaultValue}
    valueRange={action('onChange')}>
  </InputRange>
  