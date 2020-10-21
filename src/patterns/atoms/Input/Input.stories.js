import React from 'react';
import { withKnobs, text } from "@storybook/addon-knobs";
import centered from '@storybook/addon-centered/react';
import Input from './index';
import readme from './readme.md';
import 'index.scss';


export default {
  title: 'Atoms/Input',
  parameters: {
    notes: readme,
  },
  component: Input,
  decorators: [withKnobs, centered]
};

export const Basic = () => <Input type={text("type", "text")} className={text("className", "form-control")} id="id-storybook" placeholder={text("placeholder", "Input StoryBook")} />;

