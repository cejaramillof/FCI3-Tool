import React from 'react';

import {
  withKnobs, text
} from '@storybook/addon-knobs';
import centered from '@storybook/addon-centered/react';
import readme from './readme.md'

import Title from './index';
import 'index.scss';


export default {
  title: 'Atoms/Title',
  parameters: {
    notes: readme
  },
  component: Title,
  decorators: [withKnobs, centered]
}

const titleText = "Example Title"
const titlePriority = 1;

export const Basic = () => {
  return (
    <Title priority={text("Title Priority", titlePriority)}>
      {text("Title Text", titleText)}
    </Title>
  );
}