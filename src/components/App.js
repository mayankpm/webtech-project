import React from 'react'
import Generate from './Generate'
import {BrowserRouter as Router,Route, Routes } from 'react-router-dom'
import Login from './Login'
import Signup from './Signup'

export default function App() {
  return (
   <>
      <Router>
          <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/generate' element={<Generate/>}/>
          </Routes>
      </Router>   
   </>
  )
}
