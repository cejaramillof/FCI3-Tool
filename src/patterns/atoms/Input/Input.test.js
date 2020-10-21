import React from 'react';
import { shallow } from 'enzyme';
import Input from './index';

const props = {
  className: 'classess',
  id: 'elementID',
  placeholder: 'Loren Ipson',
  type: 'lorem',
}

const wrapper = shallow( <Input {...props} /> );

it('Should render correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

it('should render with Placeholder', function () {
  expect(wrapper.props().placeholder).toEqual('Loren Ipson');
});

it('should render with aria-label', function () {
  expect(wrapper.props()['aria-label']).toEqual('Loren Ipson');
});

it('should render with ID', function () {
  expect(wrapper.props().id).toEqual('elementID');
});

it('should render with type', function () {
  expect(wrapper.props().type).toEqual('lorem');
});

it('should render with className', function () {
  expect(wrapper.props().className).toEqual('classess');
});

const wrapperWithoutProps = shallow( <Input /> );

it('should render without Placeholder', function () {
  expect(wrapperWithoutProps.props().placeholder).toEqual('');
});

it('should render without ID', function () {
  expect(wrapperWithoutProps.props().id).toEqual('');
});

it('should render without type', function () {
  expect(wrapperWithoutProps.props().type).toEqual('');
});

it('should render without aria-label', function () {
  expect(wrapperWithoutProps.props()['aria-label']).toEqual('');
});

it('should render without aria-describedby', function () {
  expect(wrapperWithoutProps.props()['aria-describedby']).toEqual('');
});

it('should render without className', function () {
  expect(wrapperWithoutProps.props().className).toEqual('');
});
