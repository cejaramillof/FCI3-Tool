import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import Authorization from './index';
import * as ROLES from './roles';

// Redux mock store setup
const middlewares = []
const mockStore = configureStore(middlewares)
const initialState = {
  user: {
    role: ROLES.ADMIN
  }
}
const store = mockStore(initialState)

const notRender = () => <div id="not-redered">Should not be rendered</div>;
const emptyComponent = props => <div data-role={props.role}>{props.children}</div>;
const AdminComponent = Authorization([ROLES.ADMIN], emptyComponent)
const GatekeeperComponent = Authorization([ROLES.GATEKEEPER], notRender, emptyComponent)

export const Wrapper = mount(
  <Provider store={store}>
    <AdminComponent role="admin-only">lorem ipsum</AdminComponent>
    <GatekeeperComponent role="gatekeeper-only">Only Gatekeepers</GatekeeperComponent>
  </Provider>
)

describe('Authorization HOC', function () {
  it('Should render correctly', () => expect(Wrapper).toMatchSnapshot());
  it('Should render Admin only', () => expect(Wrapper.find({ 'data-role': 'admin-only' })).toHaveLength(1));
  it('Should render Gatekeeper second component', () => expect(Wrapper.find({ 'data-role': 'gatekeeper-only' })).toHaveLength(1));
  it('Should not render #not-redered element', () => expect(Wrapper.find('#not-redered')).toHaveLength(0));
});