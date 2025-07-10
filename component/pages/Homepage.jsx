'use client';
import React from 'react';
import Header from './Header';
import Doctors from '@/pages/Doctors';
// import Patientdetails from '@/pages/Patientdetails';





const Homepage = () => {
  return (
    <div>
     
      <Header/>
{/*    
    <Patientdetails/> */}
     <Doctors/>
     
      <div>
        
      </div>
    </div>
  )
}

export default Homepage
