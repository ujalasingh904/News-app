import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar'
import News from './components/news'
import React, { Component } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App=()=>  {
  const pagesize = 8;
  
  const [progress, setprogress] = useState(0)
  
    return (
      <BrowserRouter>
          <Navbar/> 
        <LoadingBar
        height={3}
        color='#f11946' 
        progress={progress}
      />

        <Routes>
          <Route exact path="/"  element={<News setprogress={setprogress}   key="/" pagesize={pagesize} country="in" category="general"/>}/>
          <Route exact path="/sports"  element={<News setprogress={setprogress}   key="sports" pagesize={pagesize} country="in" category="sports"/>}/>
          <Route exact path="/business"  element={<News setprogress={setprogress}   key="business" pagesize={pagesize} country="in" category="business"/>}/>
          <Route exact path="/entertainment"   element={<News setprogress={setprogress}   key="entertainment" pagesize={pagesize} country="in" category="entertainment"/>}/>
          <Route exact path="/general"  element={<News setprogress={setprogress}   key="general" pagesize={pagesize} country="in" category="general"/>}/>
          <Route exact path="/health"  element={<News setprogress={setprogress}   key="health" pagesize={pagesize} country="in" category="health"/>}/>
          <Route exact path="/science"  element={<News setprogress={setprogress}   key="science" pagesize={pagesize} country="in" category="science"/>}/>
          <Route exact path="/technology"  element={<News setprogress={setprogress}   key="technology" pagesize={pagesize} country="in" category="technology"/>}/>
        </Routes>

      </BrowserRouter>
    )
  
}  

export default App
