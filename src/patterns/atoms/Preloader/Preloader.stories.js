import React from 'react';
import { withKnobs, text, boolean } from "@storybook/addon-knobs";
import centered from '@storybook/addon-centered/react';
import Preloader from './index';
import readme from './readme.md';
import 'index.scss';


export default {
  title: 'Atoms/Preloader ',
  parameters: {
    notes: readme,
  },
  component: Preloader,
  decorators: [withKnobs, centered]
};

export const Basic = () => <Preloader isLoading={boolean('isLoading', true)}>{text("Hidden elements", "Content loaded")}</Preloader>;

