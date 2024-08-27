import React from "react"
import HomePage from "./pages/HomePage"
import MoviePage from "./pages/MoviePage"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Container, CssBaseline } from '@mui/material';

const App: React.FC = () => {
  return (
    <Router>
      <CssBaseline />
      <Container maxWidth="md">
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/movie/:id" element={<MoviePage />}/>
        </Routes>
      </Container>
    </Router>
  )
}

export default App
