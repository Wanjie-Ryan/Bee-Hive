import React from 'react'
import {Link, Outlet} from 'react-router-dom'

function Routes() {


  return (

    <>
    
    
    
    <Link to ='/'>Register</Link>

    <Link to ='/login'>Login</Link>

    <Link to ='/dashboard'>Dashboard</Link>

    
    
    
    
    
    
    <Outlet/>
    
    
    </>




  )
}

export default Routes