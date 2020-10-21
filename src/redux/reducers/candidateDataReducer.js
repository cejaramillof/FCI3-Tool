import { UPDATE_USER } from './../types';
import candidateData from 'config/candidatedata.json';

const initialState = {
    candidateData: {
        ...candidateData
    }
};

export default function candidateDataReducers (state = initialState, actions) {
    switch (actions.type) {
        case UPDATE_USER:
            const {username, firstname, lastname} = actions.candidateData;
            const newState = {...state,
                candidateData: {
                    'personal-data': {
                        username,
                        firstname,
                        lastname
                    }
                }
            };

            return newState;
        default:
                return state;
    }
}