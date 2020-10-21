import React from 'react';
import { mount } from 'enzyme';
import sinon from 'sinon';
import ButtonGroupTag from './index';

jest.mock('react-i18next', () => ({
    withTranslation: () => Component => {
        Component.defaultProps = { ...Component.defaultProps, t: () => "" };
        return Component;
    },
}));


const props = {
    t: key => key,
    level: 0,
    className: 'class-name-test',
    onClickTag: sinon.spy(),
    tags: [
        {
            selected: true,
            text: "Tag Text"
        },
        {
            selected: false,
            text: "Tag Text 2"
        }
    ]
}

const wrapper = mount(
    <ButtonGroupTag {...props} />
);

const buttonReference = wrapper.find('span > .active');
const buttonReferenceText = buttonReference.text();

it('Should render correctly', () => expect(wrapper).toMatchSnapshot());

it('should render with Level', () => expect(wrapper.prop('level')).toEqual(0));

it('should render an active tag', () => expect(buttonReference).toHaveLength(1));

it('should render an active tag with correct text', () => expect(buttonReferenceText).toEqual('Tag Text'));

it('should trigger callback on click event', () => {
    buttonReference.simulate('click');
    expect(props.onClickTag.called).toBe(true);
});

wrapper.setProps({ showBadge: true });

const buttonBadgeReference = wrapper.find('span.badge');

it('should render badges in tags', () => expect(buttonBadgeReference).toHaveLength(2));

it('should render badges in tags', () => expect(buttonBadgeReference.at(0).text()).toEqual('0'));
