import { all } from 'redux-saga/effects';
import userWatcher from './UserSagas';

export default function* rootSaga() {
  yield all([
    userWatcher(),
  ]);
}