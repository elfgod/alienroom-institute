import { createTheme } from '@mui/material/styles';

const alienPurple = '#320357'
const alienAqua = '#00ffff'
const alienLightPurple = '#A630ff'

const theme = createTheme({
  palette: {
    common: {
      purple: `${alienPurple}`,
      aqua: `${alienAqua}`
    },
    success: {
      main: `${alienPurple}`,
    },
    info: {
      main: `${alienAqua}`,
    },
  },
  typography: {
    tab: {
      fontFamily: 'Raleway',
      textTransform: 'none',
      fontWeight: 700,
      fontSize: '1rem',
    },
    estimate: {
      fontFamily: 'Pacifico',
      fontSize: '1rem',
      textTransform: 'none',
      color: 'white'
    }
  }
});

export default theme;