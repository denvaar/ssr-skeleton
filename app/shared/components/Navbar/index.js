import React from 'react'
import { NavLink } from 'react-router-dom'


const Navbar = ({ }) => (
  <nav className="nav">
    <NavLink to='/' exact={true} activeClassName="active-nav-link" className="nav-link">{'Home'}</NavLink>
    <NavLink to='/other' exact={true} activeClassName="active-nav-link" className="nav-link">{'Other'}</NavLink>
    <NavLink to='/another' exact={true} activeClassName="active-nav-link" className="nav-link">{'Another'}</NavLink>
  </nav>
)

export default Navbar
