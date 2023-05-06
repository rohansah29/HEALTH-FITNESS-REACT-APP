import React from 'react'
import { Routes, Route} from "react-router-dom";
import Hero from '../UI/Hero';
import Testimonials from '../UI/Testimonials';
import Pricing from '../UI/Pricing';
import Track from '../UI/Track';
import Exercise from '../UI/Exercise';
import Home from '../UI/Home';

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />  
      <Route path="/programs" element={<Testimonials />} />  
      <Route path="/membership" element={<Pricing />} />  
      <Route path="/track" element={<Track />} />  
    </Routes>
  )
}

export default AllRoutes
