import React from 'react'
import './nav.css'
import logo from '../../assets/logo.png'
import Search_Icon from '../../assets/search_icon.svg'
import profile_img from '../../assets/profile_img.png'
import Bell_Icon from '../../assets/bell_icon.svg'
import Caret_Icon from '../../assets/caret_icon.svg'

const nav = () => {
  return (
    <div className='navbar'>
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
        <img src={Search_Icon} alt="" className='icon'/>
        Clidern
        <img src={Bell_Icon} alt="" className='icon'/>

        <div className="navbar-profile">
          <img src={profile_img} alt="" className='profile'/>
          <img src={Caret_Icon} alt=""/>

        </div>
        <div className="drop-down">
          <p>Sign out from netflix</p>
        </div>
      </div>

    </div>
  )
}

export default nav