import { useState, useEffect } from 'react'
import { db } from './firebase-config'
import { collection, getDocs } from 'firebase/firestore'
import { CardContent, CardHeader, Grid, Typography } from '@mui/material'
import { Card } from '@mui/material'
import Navbar from './components/Navbar'
import About from './components/about'
import Home from './components/Home'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
} from 'react-router-dom'
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home></Home>} exact />
          <Route path="/about" element={<About></About>} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
//exact to add when i want to put that component as a default component
