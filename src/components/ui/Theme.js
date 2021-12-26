import { createTheme } from '@mui/material/styles';

const alienPurple = '#320357'
const alienAqua = '#00ffff'
const alienLightPurple = '#A630ff'

export default createTheme({
  palette: {
    common: {
      purple: `${alienPurple}`,
      aqua: `${alienAqua}`
    },
    primary: {
      main: `${alienPurple}`,
    },
    secondary: {
      main: `${alienAqua}`,
    },
  },
  typography: {
    tab: {
      fontFamily: 'Raleway',
      textTransform: 'none',
      fontWeight: 700,
      fontSize: '1rem',
    }
  }
});