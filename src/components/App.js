import React from 'react'
import { ThemeProvider } from '@mui/material/styles';

import theme from './ui/Theme'
import Header from '../components/ui/Header'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <div>
        <h1>AlienRoom Instituto</h1>
      </div>      
    </ThemeProvider>
  )
}

export default App