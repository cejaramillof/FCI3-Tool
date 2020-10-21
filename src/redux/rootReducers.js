import { combineReducers } from 'redux';
import competencesReducers from './reducers/competencesReducers';
import candidateDataReducer from './reducers/candidateDataReducer';
//
import UserReducer from './reducers/UserReducer'

export default combineReducers ({
    report: competencesReducers,
    candidate: candidateDataReducer,
    user: UserReducer,
}); 