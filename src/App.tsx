import React from "react"
import SearchPage from "./pages/SearchPage"
import MoviePage from "./pages/MoviePage"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Container, CssBaseline } from '@mui/material';
import HomePage from "./pages/HomePage";

const App: React.FC = () => {
  return (
    <Router>
      <CssBaseline />
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/search/:title" element={<SearchPage />}/>
          <Route path="/movie/:id" element={<MoviePage />}/>
        </Routes>
    </Router>
  )
}

export default App
