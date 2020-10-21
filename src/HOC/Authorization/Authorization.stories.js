import React from 'react';
import { withKnobs } from "@storybook/addon-knobs";
import centered from '@storybook/addon-centered/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Authorization from './index';
import * as ROLES from './roles';
import readme from './readme.md';
import 'index.scss';

export default {
  title: 'HOC/Authorization ',
  parameters: {
    notes: readme,
  },
  component: Authorization,
  decorators: [withKnobs, centered]
};

// Redux mock store setup
const middlewares = []
const mockStore = configureStore(middlewares)
const initialState = {
  user: {
    role: ROLES.ADMIN
  }
}
const store = mockStore(initialState)

const ProviderWrapper = props => (
  <Provider store={store}>
    {props.children}
  </Provider>
)
//

const greenComponent = () => <div>Admins are Authorice to see this</div>;
const AuthComponent = Authorization([ROLES.ADMIN], greenComponent)


export const Admin = () => (
  <ProviderWrapper>
    <h1>Authorization HOC</h1>
    <p>Use Authorization Higher Order Component to enable a comonent depending of the user role</p>
    <div><AuthComponent /></div>
  </ProviderWrapper>
);

