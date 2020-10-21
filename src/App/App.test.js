import App from './index';
import { Provider } from "react-redux";
import React from 'react';
import configureMockStore from "redux-mock-store";
import { shallow } from 'enzyme';

const mockStore = configureMockStore();
const store = mockStore({});

const wrapper = shallow(
  <Provider store={store}>
    <App />
  </Provider>
);

it('Should render correctly', () => expect(wrapper).toMatchSnapshot()); 