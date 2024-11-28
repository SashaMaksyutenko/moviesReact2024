import { ThemeProvider, CssBaseline } from '@mui/material';
import { withThemeFromJSXProvider } from '@storybook/addon-themes';
import { lightTheme, darkTheme } from '../src/themes'; 

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
