import React from 'react';
import { shallow } from 'enzyme';
import Label from './index';

const props = {
    htmlFor: 'elementID',
    labelText: 'Lorem Ipsum',
}

const wrapper = shallow( <Label {...props} /> );

it('should render correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

it('should render with htmlFor', function () {
    expect(wrapper.find('label').props().htmlFor).toEqual('elementID');
});

it('should render with Label Text', function () {
    expect(wrapper.find('label').text()).toEqual('Lorem Ipsum');
});

const wrapperWithoutProps = shallow( <Label /> );

it('should render without htmlFor', function () {
    expect(wrapperWithoutProps.find('label').props().htmlFor).toEqual('');
});

it('should render without Label Text', function () {
    expect(wrapperWithoutProps.find('label').text()).toEqual('');
});
