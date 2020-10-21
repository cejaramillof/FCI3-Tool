import { put, delay, takeLatest } from 'redux-saga/effects';

function* fetchUser() {
  const user = {
    name: 'Aquiles',
    lastname: 'Brinco',
    email: 'aquiles.brinco@globant.com',
    role: 'RECRUITER'
  }

  yield delay(500)

  yield put({ type: "SIGNED_IN", user });
}

export default function* actionWatcher() {
  yield takeLatest('SIGN_IN', fetchUser)
}