import * as TYPES from './UserActions.types';


export function signIn({ email, name, lastname }) {
  return {
    type: TYPES.SIGN_IN,
    user: {
      email, name, lastname
    }
  }
}
