import React from 'react'
import './nav.css'
import logo from '../../assets/logo.png'

const nav = () => {
  return (
    <div>
      <div className="navbar-left">
        <img src={logo} alt="" />
        <ul>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse By Languages</li>
        </ul>
      </div>
      <div className="navbar-right">
        <img src="" alt="" />
      </div>
    </div>
  )
}

export default nav