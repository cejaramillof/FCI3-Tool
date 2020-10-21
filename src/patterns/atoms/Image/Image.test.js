import React from 'react';
import { shallow } from 'enzyme';

import Image from './index';

import testImage from '../../layouts/Footer/img/logo_globant.jpeg'

const props = {
  image: testImage,
  alt: 'Lorem ipsum',
  classValue: 'tales'
}

const wrapper = new shallow(<Image {...props} />);

it('Should render an imate', () => {
  expect(wrapper.find("img").prop("src")).toEqual(testImage);
})

it('Should render correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

it('Should have an alt text', () => {
  expect(wrapper.props().alt).toEqual('Lorem ipsum');
});

it('Should have a class text', () => {
  expect(wrapper.props().className).toEqual('tales');
});

const wrapperWithoutProps = new shallow(<Image />);

it('Should render with empty alteranative text', () => {
  expect(wrapperWithoutProps.props().alt).toEqual(undefined);
})

it('Should not render when no image provided', () => {
  expect(wrapperWithoutProps.props().src).toEqual(undefined);
})

it('Should render with a default className value', () => {
  expect(wrapperWithoutProps.props().className).toEqual('wrapper-logo--image');
})

