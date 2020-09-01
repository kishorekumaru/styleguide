import React from "react";

import { createMuiTheme, MuiThemeProvider } from "@material-ui/core";

export default function Theme(props) {
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#3a982c'
      }
    },
    props: {
      // Name of the component
      MuiButton: {
        variant: 'contained',
        color:"primary"
      },
      MuiButtonBase: {
        // The properties to apply
        disableRipple: true // No more ripple, on the whole application!
      }
    }
  });
  return (
    // You need to wrap your component with <MuiThemeProvider> tag
    <MuiThemeProvider theme={theme}>
      {props.children}
    </MuiThemeProvider>
  );
}
