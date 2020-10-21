import React from 'react';
import { shallow } from 'enzyme';
import ProfileComponent from './index';

const props = {
  showAdditionalInfo: true,
  user: {
    personalData: {
      fullname: 'Loren Ipsum',
    },
    applyData: {
      position: 'Loren',
      location: 'Loren',
      extra: 'Loren',
    },
  },
};

const wrapper = shallow(<ProfileComponent {...props} />);

it('Should render correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

it('Should render personalData.fullname in a Title component', () => {
  expect(wrapper.find('Title')).toHaveLength(1);
});

it('Should render applyData elements in Small components', () => {
  const applyDataQuantity = Object.keys(props.user.applyData).length;
  expect(wrapper.find('Small')).toHaveLength(applyDataQuantity);
});
