import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { setThemeMode, toggleTheme } from '../store/slices/themeSlice';
import { lightTheme, darkTheme, Theme } from '../theme';
import { ThemeMode } from '../types';

export const useTheme = () => {
  const dispatch = useDispatch();
  const themeMode = useSelector((state: RootState) => state.theme.mode);

  const theme: Theme = themeMode === 'light' ? lightTheme : darkTheme;

  const setTheme = (mode: ThemeMode) => {
    dispatch(setThemeMode(mode));
  };

  const toggle = () => {
    dispatch(toggleTheme());
  };

  return {
    theme,
    themeMode,
    setTheme,
    toggleTheme: toggle,
  };
};

