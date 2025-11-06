import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './home/home'
import Courses from './Courses/courses'  // Updated import

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={<Courses />} /> {/* Use <Courses /> */}
      </Routes>
    </>
  )
}

export default App
