import React from 'react';
import { shallow } from 'enzyme';
import SearchBar from './index';

import sinon from 'sinon';

const props = {
  onSearch: sinon.spy()
}

const wrapper = shallow(
  <SearchBar {...props}/>
);

it('Should render correctly', () => expect(wrapper).toMatchSnapshot());

it('should trigger callback on Search event', () => {
  wrapper.find('#search-button').simulate('click');
  expect(props.onSearch.calledOnce).toBe(true);  
}); 
