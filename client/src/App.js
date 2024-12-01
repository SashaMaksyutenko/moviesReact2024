import React, { useState } from 'react'
import { CssBaseline, Container,Box } from '@mui/material'
import InboxIcon from '@mui/icons-material/MoveToInbox'
import MailIcon from '@mui/icons-material/Mail'
import { Navigation } from './components'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home, Settings,Recommend } from './pages'
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
function App () {
  const client = new ApolloClient({
    uri: 'http://localhost:4000/',
    cache: new InMemoryCache(),
  });
  return (
    <ApolloProvider client={client}>
    <BrowserRouter>
      <CssBaseline />
      <Navigation />
      <Box sx={{
            backgroundColor: (theme) =>theme.palette.grey[100]
          }}>
        <Container maxWidth="xl">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="settings" element={<Settings />} />
            <Route path="recommend" element={<Recommend />} />
          </Routes>
        </Container>
      </Box>
    </BrowserRouter>
  </ApolloProvider>
  )
}
export default App
