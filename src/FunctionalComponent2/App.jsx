import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Footer from './Footer'
import Navbar from './Navbar'
export default function App() {
  
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='' element={<Home/>} />
         
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

