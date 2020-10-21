import React from 'react';
import { mount } from 'enzyme';
import Preloader from './index';

let wrapper = mount(
  <Preloader>
    <div id="children">Dolore in esse esse fugiat dolor minim eu reprehenderit excepteur est.</div>
  </Preloader>
);

describe('Preloader atom component', () => {

  it('Should render correctly', () => expect(wrapper).toMatchSnapshot())
  wrapper.setProps({ isLoading: false });
  it('Should render children if is not loading', () => expect(wrapper.find('#children')).toHaveLength(1));
})
