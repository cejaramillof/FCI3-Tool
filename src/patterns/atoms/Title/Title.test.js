import React from 'react';
import { mount } from 'enzyme';
import Title from './index';

const props = {
  priority: '6',
  children: <div id="content"></div>,
};

const wrapper = mount(<Title {...props}>{props.children}</Title>);

it('Should render correctly', () => expect(wrapper).toMatchSnapshot());

it('should render with Priority', () =>
  expect(wrapper.props().priority).toEqual('6'));

it('should render children', () =>
  expect(wrapper.find('#content')).toHaveLength(1));

it('should render a heading tag', () =>
  expect(wrapper.find('h6')).toHaveLength(1));
