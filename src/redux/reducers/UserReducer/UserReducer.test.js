import UserReducer from './index';
import { USER_ACTIONS } from 'redux/types';

const initialState = {
  loading: false,
  name: '',
  lastname: '',
  email: '',
  role: ''
};

describe('User reducer', () => {
  it('should return the initial state', () => {
    expect(UserReducer(undefined, {})).toEqual(initialState)
  })

  it('should handle USER_ACTIONS.SIGN_IN', () => {
    initialState.loading = true;
    expect(
      UserReducer([], { type: USER_ACTIONS.SIGN_IN })
    ).toEqual({ loading: true })
  })

  it('should handle USER_ACTIONS.SIGNED_IN', () => {

    const UserSigned = {
      name: 'Aquiles',
      lastname: 'Brinco',
      email: 'aquiles.brinco@globant.com',
      role: 'RECRUITER',
      loading: false,
    };

    expect(
      UserReducer(initialState, { type: USER_ACTIONS.SIGNED_IN, user: UserSigned })
    ).toEqual(UserSigned)

  })

})