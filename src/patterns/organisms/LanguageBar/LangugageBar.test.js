import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import LanguageBar from './index';
import { updateLanguage } from '../../../redux/actions/index';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

describe('LanguageBar test english', () => {
    const props = {
        updateLanguage: jest.fn(),
        onClick: sinon.spy(),
        currentLang: 'en'
    }
    
    const payload = {
        type: 'UPDATE_LANGUAGE',
        lang: 'en'

    }

    const mockStore = configureStore();
    const store = mockStore();

    store.dispatch(updateLanguage()); 

    const wrapper = shallow(
        <Provider store={store}>
            <LanguageBar {...props} store={store} />
        </Provider>
    );


    
    it('Should render correctly', () => expect(wrapper).toMatchSnapshot());

    it('Should despatch actions', () => expect(updateLanguage('en')).toEqual(payload))
});

describe('LanguageBar test espanish', () => {
    const props = {
        updateLanguage: jest.fn(),
        onClick: sinon.spy(),
        currentLang: 'es'
    }
    
    const payload = {
        type: 'UPDATE_LANGUAGE',
        lang: 'es'

    }

    const mockStore = configureStore();
    const store = mockStore();

    store.dispatch(updateLanguage()); 

    const wrapper = shallow(
        <Provider store={store}>
            <LanguageBar {...props} store={store} />
        </Provider>
    );


    
    it('Should render correctly', () => expect(wrapper).toMatchSnapshot());

    it('Should despatch actions', () => expect(updateLanguage('es')).toEqual(payload))
});
