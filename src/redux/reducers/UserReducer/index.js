import { USER_ACTIONS } from 'redux/types';

const initialState = {
  loading: false,
  name: '',
  lastname: '',
  email: '',
  role: ''
};

export default function userReducer(state = initialState, action) {

  switch (action.type) {

    case (USER_ACTIONS.SIGN_IN):
      return { ...state, loading: true };

    case (USER_ACTIONS.SIGNED_IN):
      return { ...action.user, loading: false };

    default: return state
  }
}

