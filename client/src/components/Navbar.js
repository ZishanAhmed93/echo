import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => (
  <ul>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/NewEcho">New Echo</Link></li>
    <li><Link to="/ViewAllEchos">View All Echos</Link></li>
    <li><Link to="/ViewEcho">View Echo</Link></li>
  </ul>
)

export default Navbar