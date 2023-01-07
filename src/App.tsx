import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/global';
import { defaultTheme } from './styles/themes/default';
import Rotas from './routes';

import { I18nextProvider } from 'react-i18next';
import LanguageDetector from "i18next-browser-languagedetector";

import i18n from 'i18next'

import './translate'
import { messagesGlobal } from './translate';

i18n.use(LanguageDetector).init({
  debug: true,
  supportedLngs: ["pt", "es", "en"],
  lng: 'en',
  resources: messagesGlobal,
  detection: {
    order: ["localStorage", "cookie"],
  },
  interpolation: {
    escapeValue: false,
  },
});



export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <I18nextProvider i18n={i18n}>
        <Rotas />
      </I18nextProvider>
    </ThemeProvider>
  )
}

