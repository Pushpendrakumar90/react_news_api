import React from 'react';
import Home from './Home';
import { Routes, Route } from 'react-router-dom';
import FetchcountryName from './customservice/FetchcountryName';


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/country' element={<FetchcountryName />} />
      </Routes>
    </>
  )
}

export default App

