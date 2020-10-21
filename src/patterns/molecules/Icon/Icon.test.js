import React from 'react';
import { mount } from 'enzyme';
import Icon from './index';

const props = {
  cssIcon: 'cool',
  size: 's'
};

const badProps = {
    cssIcon:'super test'
};

it('should render correctly', () => {
    const wrapper = mount( <Icon {...props} /> );

    expect(wrapper.find('span').children().name()).toBe('Image');
    expect(wrapper.find('span').children().props()).toEqual({
        alt: 'Cool',
        image: 'cool.jpeg'
    });
});

describe('when bad props are provided', () => {
    const wrapper = mount( <Icon {...badProps} /> );

    it('should render properly', function () {

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.props()).toEqual(badProps);
        expect(wrapper.find('span').children().name()).toBe('Image');
        expect( wrapper.find('span').children().props()).toEqual({
            alt: '',
            image: undefined
        });
    });

    it('should get blank alt text when cssIcon is not provided', ()  => {
        wrapper.setProps({cssIcon: null})
        expect(wrapper.find('span').children().props()).toEqual({
            alt: '',
            image: undefined
        });
    })
});

