import React from 'react';
import { themes, ThemeProvider } from '@storybook/theming';
import '../src/App.css';
import Theme from '../src/Theme';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  docs: {
    theme: themes.dark,
  },
}

export const decorators = [
  (Story) => (
    <ThemeProvider theme={Theme}>
      <Story />
    </ThemeProvider>
  ),
];


