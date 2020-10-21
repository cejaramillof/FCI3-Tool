import React from 'react';
import centered from '@storybook/addon-centered/react';
import { withKnobs } from "@storybook/addon-knobs";
import SearchBar from './index';
import readme from './readme.md';
import 'index.scss';


export default {
  title: 'Molecules/Search Bar ',
  parameters: {
    componentSubtitle: 'Use SearchBar for ..',
    notes: readme,
  },
  component: SearchBar,
  decorators: [withKnobs, centered]
};

const handleNextStep = ({ username }) => {
  console.log(`has selected ${username}`);
}

export const Basic = () => <SearchBar onSearch={handleNextStep}/>;
