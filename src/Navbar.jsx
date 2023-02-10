import React from 'react'
import { NavLink } from 'react-router-dom'
import "./App.css"

const Navbar = () => {
  return (
    <>
    <div className='nav-flex'>
      <div><NavLink className={({isActive})=>(isActive?"active":"nonactive")} to="/">Home</NavLink></div>
      <div><NavLink className={({isActive})=>(isActive?"active":"nonactive")} to="/about">About</NavLink></div>
      <div><NavLink className={({isActive})=>(isActive?"active":"nonactive")} to="/contact">Contact</NavLink></div>
    </div>
    </>
  )
}

export default Navbar