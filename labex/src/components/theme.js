import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  transitions: {
    duration: {
      shortest: 150,
      shorter: 200,
      short: 250,
      // most basic recommended timing.

      standard: 300,
      // this is to be used in complex animations
      complex: 375,
      // recommended when something is entering screen
      enteringScreen: 225,
      // recommended when something is leaving screen
      leavingScreen: 195,
    },
  },
  palette: {
    primary: {
      light: '#8561c5',
      main: '#3d5afe',
      dark: '#482880',
      // contrastText: '#1D2854ff'
    },
    secondary: {
      light: '#ffee33',
      main: '#ffea00',
      // dark: will be calculated from palette.secondary.main,
      contrastText: '#b2a300',
    },
    // Provide every color token (light, main, dark, and contrastText) when using
    // custom colors for props in Material UI's components.
    // Then you will be able to use it like this: `<Button color="custom">`
    // // (For TypeScript, you need to add module augmentation for the `custom` value)
    // custom: {
    //     light: '#ffa726',
    //     main: '#f57c00',
    //     dark: '#ef6c00',
    //     contrastText: 'rgba(0, 0, 0, 0.87)',
    // },
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    // contrastThreshold: 3,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    // tonalOffset: 0.2,
  }
});

