import * as actions from './index'
import * as USER_ACTIONS from './UserActions.types'


describe('actions', () => {
  it('should create an action to sign in user', () => {

    const user = {
      name: 'Aquiles',
      lastname: 'Brinco',
      email: 'aquiles.brinco@globant.com'
    }

    const expectedAction = {
      type: USER_ACTIONS.SIGN_IN,
      user
    }

    expect(actions.signIn(user)).toEqual(expectedAction)
  })
})