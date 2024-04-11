import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import translationEN from './en.json';
import translationDE from './de.json';

i18n.use(initReactI18next).init({
    resources: {
        en: {
            translation: translationEN,
        },
        de: {
            translation: translationDE,
        },
    },
    lng: 'en', //default
    fallbackLng: 'en',
    interpolation: {
        escapeValue: false,
    },
});

export default i18n;
