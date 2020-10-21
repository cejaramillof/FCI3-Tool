import React from 'react';
import { mount } from 'enzyme';
import SingleContentLayout from './index';

const wrapper = mount(
  <SingleContentLayout>
    <SingleContentLayout.SmallContent>Anim laboris cillum ullamco fugiat eu Lorem ex.</SingleContentLayout.SmallContent>
  </SingleContentLayout>
)

it('Should render correctly', () => expect(wrapper).toMatchSnapshot());