import React, { useState } from 'react'
import { CssBaseline, Container } from '@mui/material'
import InboxIcon from '@mui/icons-material/MoveToInbox'
import MailIcon from '@mui/icons-material/Mail'
import { Navigation } from './components'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home, Settings,Reccomend } from './pages'
function App () {
  return (
    <BrowserRouter>
      <CssBaseline />
      <Navigation />
      <Container maxWidth='xl'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='settings' element={<Settings />} />
          <Route path='reccomend' element={<Reccomend />} />
        </Routes>
      </Container>
    </BrowserRouter>
  )
}
export default App
