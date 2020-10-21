import React from 'react';
import { mount } from 'enzyme';
import Small from './index';

const props = {
  id: 'Loren Ipsum',
  children: <div id='test'></div>,
};

const wrapper = mount(
    <Small {...props}>
        {props.children}
    </Small>
);

it('Should render correctly', () => expect(wrapper).toMatchSnapshot());

it('should render with ID', () => expect(wrapper.props().id).toEqual('Loren Ipsum'));

it('should render children', () => expect(wrapper.find('#test')).toHaveLength(1));