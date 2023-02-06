import React from 'react'
import Register from './register.jsx'
import Login from './login.jsx'
import Dashboard from './uploading/dashboard.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App(){


  return(

    <>
        
         

      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Register/>} />

          <Route path="/login" element={<Login />} />

          <Route path ='/dashboard' element ={<Dashboard/>}/>
          

        </Routes>
      
      
      </BrowserRouter>


    
    
    
    
    </>




  )



}



export default App