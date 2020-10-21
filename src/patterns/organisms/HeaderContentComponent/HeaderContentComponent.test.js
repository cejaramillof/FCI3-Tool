import React from 'react';
import { shallow } from 'enzyme';
import HeaderContentComponent from './index';
import configureStore from 'redux-mock-store';

const mockStore = configureStore();
const initialState = {
  report: {
    competenceSelected: {
      id: 'FOCUSED',
    },
    language: 'es',
  },
  candidate: {
    'personal-data': {
      username: 'Loren',
      firstname: 'Loren',
      lastname: 'Loren',
    },
  },
};

const props = {
  quotes: true,
};

const store = mockStore(initialState);

const wrapper = shallow(<HeaderContentComponent store={store} {...props} />);

const component = wrapper.dive();

it('Should render correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

it('should render with quotes prop', () =>
  expect(component.props().quotes).toEqual(true));

describe('HeaderContentComponent Redux', function() {
  it('should render with state competence as prop', () =>
    expect(component.props().competence).toEqual(
      initialState.report.competenceSelected
    ));

  it('should render with state candidate as prop', () =>
    expect(component.props().candidateData).toEqual(initialState.candidate));

  it('should render with state language as prop', () =>
    expect(component.props().language).toEqual(initialState.report.language));
});
