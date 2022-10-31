import 'styled-components'
import { defaultTheme } from '../styles/themes/default';


type ThemeType = typeof defaultTheme;

declare global {
  interface Window {
    ReactNativeWebView: any; // 👈️ turn off type checking
  }
}
declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
