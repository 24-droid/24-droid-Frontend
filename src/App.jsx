import { useState } from 'react'
import Home from './pages/Home'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Signup from './pages/Signup';
function App() {

  return (
   <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
     </Router>
  )
}

export default App
