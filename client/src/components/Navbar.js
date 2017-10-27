import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => (
  <ul>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/newecho">New Echo</Link></li>
    <li><Link to="/echos">View All Echos</Link></li>
  </ul>
)

export default Navbar