import React, { useContext } from 'react';

type ThemeType = 'dark' | 'light';

type ThemeContextType = {
  theme: ThemeType;
  toggleTheme: () => void;
};

const ThemeContext = React.createContext<ThemeContextType | null>(null);
const themeKey = 'theme';

export const ThemeContextProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [theme, setTheme] = React.useState<ThemeType>('light');
  React.useEffect(() => {
    let theme: ThemeType | null = localStorage.getItem(
      'theme',
    ) as ThemeType | null;
    if (theme === null) {
      theme = window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light';
    }

    updateTheme(theme);
  }, []);

  const updateTheme = (theme: ThemeType) => {
    localStorage.setItem(themeKey, theme);
    if (theme === 'dark') {
      document.documentElement.classList.add(theme);
    } else {
      document.documentElement.classList.remove('dark');
    }
    setTheme(theme);
  };

  const toggleTheme = () => {
    updateTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (context === null) {
    throw Error('ThemeContext is null!');
  }
  return context;
};
