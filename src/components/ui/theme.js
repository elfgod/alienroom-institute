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
    primary: {
      main: `${alienPurple}`,
    },
    secondary: {
      main: `${alienAqua}`,
    },
  },
  typography: {
    h5: {
      fontWeight: 500
    }
  }
});

export default theme