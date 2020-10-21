import React from 'react';
import { mount } from 'enzyme';
import sinon from 'sinon';
import Button from './index';

const props = {
  id: 'Loren Ipson',
  children: <div id="test"></div>,
  onClick: sinon.spy()
}

const wrapper = mount(
  <Button {...props}>
    {props.children}
  </Button>
);

it('Should render correctly', () => expect(wrapper).toMatchSnapshot());

it('should render with ID', () => expect(wrapper.props().id).toEqual('Loren Ipson'));

it('should render children', () => expect(wrapper.find('#test')).toHaveLength(1));

it('should trigger callback on click event', () => {
  wrapper.simulate('click');
  expect(props.onClick.calledOnce).toBe(true);  
}); 