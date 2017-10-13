import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => (
  <ul>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/NewPosts">NewPosts</Link></li>
    <li><Link to="/ViewComments">ViewComments</Link></li>
    <li><Link to="/ViewPosts">ViewPosts</Link></li>
  </ul>
)

export default Navbar