import { en, es } from './locales';

import LanguageDetector from 'i18next-browser-languagedetector';
import i18n from 'i18next';
// not like to use this?
// have a look at the Quick start guide 
// for passing in lng and translations on init

i18n
    // load translation using http -> see /public/locales (i.e. https://github.com/i18next/react-i18next/tree/master/example/react/public/locales)
    // learn more: https://github.com/i18next/i18next-http-backend
    // detect user language
    // learn more: https://github.com/i18next/i18next-browser-languageDetector
    .use(LanguageDetector)
    // for all options read: https://www.i18next.com/overview/configuration-options
    .init({
        interpolation: {
            escapeValue: false, // not needed for react!!
        },

        debug: false,

        // lng: 'en',

        resources: {
            es: {
                common: es.es,
            },
            en: {
                common: en.en,
            },
        },

        fallbackLng: 'en',

        ns: ['common'],

        defaultNS: 'common',

        react: {
            wait: false,
            bindI18n: 'languageChanged loaded',
            bindStore: 'added removed',
            nsMode: 'default'
        },
    });


export default i18n;