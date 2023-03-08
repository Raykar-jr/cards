import { createTheme } from '@mui/material/styles'

export const theme = createTheme({
  typography: {
    fontFamily: ['Montserrat', 'Arial', 'sans-serif'].join(','),
  },
  palette: {
    primary: {
      main: '#366EFF',
    },
  },
})
