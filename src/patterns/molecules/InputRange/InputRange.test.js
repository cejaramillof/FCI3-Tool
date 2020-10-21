import React from 'react';
import { mount } from 'enzyme';
import InputRange from './index';

const labelsRange = ['test range 1', 'test range 2', 'test range 3', 'test range 4', 'test range 5'];

const props = {
    id: "id_test",
    labelText: "Label text",
    tags: labelsRange,
    defaultValue: 0
}

const wrapper = mount(
    <InputRange {...props} />
);

it('Should render correctly', () => expect(wrapper).toMatchSnapshot());

it('should render with defaultValue', () => expect(wrapper.prop('defaultValue')).toEqual(0));

it('should render with number of tags', () => expect(wrapper.prop('tags')).toHaveLength(5));

it('should render with lengt 1 for input node with especific class ', () =>
    expect(wrapper.find('input.custom-range')).toHaveLength(1));

it('should check the props of label tag', () => {
    expect(wrapper.find('label').props()).toEqual({
        htmlFor: 'id_test',
        children: `Label text`
    });
})

it('should check the props of input tag', () => {
    expect(wrapper.find('input').props()).toHaveProperty('defaultValue', 0);
    expect(wrapper.find('input').props()).toHaveProperty('id', 'id_test');
    expect(wrapper.find('input').props()).toHaveProperty('className', 'custom-range');
    expect(wrapper.find('input').props()).toHaveProperty('min', 0);
    expect(wrapper.find('input').props()).toHaveProperty('max', 4);
})

it('should check the props of span tag', () => {
    expect(wrapper.find('span').get(0).props.className).toEqual('active-range');
})
