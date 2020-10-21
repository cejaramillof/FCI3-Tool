import React from 'react';
import { withKnobs,text } from "@storybook/addon-knobs";
import centered from '@storybook/addon-centered/react';
import Image from './index';
import readme from './readme.md';
import 'index.scss';

export default {
  title: 'Atoms/Image ',
  parameters: {
    notes: readme,
  },
  component: Image,
  decorators: [withKnobs, centered] 
};

export const Basic = () => <Image image={text("Image", "favicon.ico")} alt={text("Alt", "favicon")} classValue={text("classValue", "")}/>
