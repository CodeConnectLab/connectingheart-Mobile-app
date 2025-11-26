import { lightColors, darkColors, Colors } from './colors';

export interface Theme {
  colors: Colors;
  isDark: boolean;
}

export const lightTheme: Theme = {
  colors: lightColors,
  isDark: false,
};

export const darkTheme: Theme = {
  colors: darkColors,
  isDark: true,
};

export { lightColors, darkColors };
export type { Colors };

