import { createTheme } from '@mui/material/styles'

export const theme = createTheme({
  typography: {
    fontFamily: ['Montserrat', 'Arial', 'sans-serif'].join(','),
    button: {
      textTransform: 'none',
      fontWeight: 500,
      fontSize: '1rem',
      fontStyle: 'normal',
    },
  },
  palette: {
    primary: {
      main: '#366EFF',
    },
  },
})
