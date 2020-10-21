import React from 'react';
import { shallow } from 'enzyme';
import InputNumber from './index';

const props = {
    htmlFor: 'htmlForLabelTest',
    id: 'idInputTest',
    labelText: 'Label Test'
}

const wrapper = shallow( <InputNumber {...props} /> );

it('Should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

it('should render two child components', () =>
    expect(wrapper.props().children).toHaveLength(2)
);

it('should render Label component with correct props', () =>
    expect(wrapper.props().children[0].props).toEqual({
        htmlFor: 'htmlForLabelTest',
        labelText: 'Label Test'
    })
);

it('should render Input component with correct props', () =>
    expect(wrapper.props().children[1].props).toEqual({
        className: 'form-control',
        htmlFor: 'idInputTest',
        id: 'idInputTest',
        type: 'number'
    })
);
