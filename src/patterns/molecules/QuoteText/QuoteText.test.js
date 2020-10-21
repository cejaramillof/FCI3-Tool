import React from 'react';
import { mount } from 'enzyme';
import QuoteText from './index';

const props = {
  withQuote: true,
  children: <a id="children"></a>,
};

const wrapper = mount(<QuoteText {...props}>{props.children}</QuoteText>);

it('Should render correctly', () => expect(wrapper).toMatchSnapshot());

it('should render with quotes', () =>
  expect(wrapper.props().withQuote).toEqual(true));

it('should render without quotes', () => {
  wrapper.setProps({
    withQuote: false,
  });
  expect(wrapper.props().withQuote).toEqual(false);
});

it('should render children', () =>
  expect(wrapper.find('#children')).toHaveLength(1));
