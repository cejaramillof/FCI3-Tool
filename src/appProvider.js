import App from 'App';
import { Provider } from 'react-redux';
import React from 'react';
import { store } from './redux/store';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';

const AppProvider = () => (
    <Provider store={store}>
        <I18nextProvider i18n={i18n}>
            <App />
        </I18nextProvider>
    </Provider>
);

export default AppProvider;