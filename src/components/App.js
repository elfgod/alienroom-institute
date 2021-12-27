import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';

import theme from './ui/theme'
import Header from '../components/ui/Header'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path='/' component={() => <div><p>Home</p></div> } />
          <Route exact path='/courses' component={() => <div>Courses</div>} />
          <Route exact path='/services' component={() => <div>Services</div>} />
          <Route exact path='/about' component={() => <div>About</div>} />          
          <Route exact path='/contact' component={() => <div>Contact</div>} />

        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App