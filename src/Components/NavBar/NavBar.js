import React from 'react'
import "./NavBar.css"
import dropdown from '../../Assets/caret_icon.svg'
import profile_img from '../../Assets/profile_img.png'
import {logout} from '../../Firebase'

function NavBar() {
  return (
    <div className='navbar'>
      <div className='navbar-left'>
        <img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt=""/>
   
       <ul>
        <li>Home</li>
        <li>TV Shows</li>
        <li>Movies</li>
        <li>New & Popular</li>
        <li>My List</li>
        <li>Browse by Languages</li>
       </ul>
       </div>
       <div className='navbar-right'>
        <div className='profile'>
     <img className='avatar' src={profile_img} alt=''/>  
     <img className='dropdown' src={dropdown}/>
    <div className='dropdown-btn'>
      <p onClick={()=>{logout()}} >Sign Out of Netflix</p>
      </div>
     </div>
     </div>
    </div>
   
  )
}

export default NavBar
