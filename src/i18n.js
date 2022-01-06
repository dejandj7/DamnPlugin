import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'
import XHR from 'i18next-xhr-backend'
import EN from './locale/EN.json'
import MK from './locale/MK.json'
import SQ from './locale/SQ.json'
import Cookie from 'js-cookie'

// const locale = Cookie.get('pll_language')
const locale = localStorage.getItem('i18nextLng')

i18n
  .use(XHR)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: { mk: MK, en: EN, sq: SQ },
    // lng: locale !== null ? locale : 'mk',
    lng: locale !== null ? locale : 'en',
    fallbackLng: 'mk',
    debug: false,
    ns: ['translations'],
    defaultNS: 'translations',
    keySeparator: '.',
    interpolation: {
      escapeValue: false,
      formatSeparator: ','
    },
    react: {
      useSuspense: true,
      bindI18n: 'languageChanged loaded',
      bindI18nStore: 'added removed',
      nsMode: 'default'
    }
  })

export default i18n
