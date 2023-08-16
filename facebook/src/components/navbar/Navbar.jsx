import React, { useState } from 'react'
import { NavLink, useNavigate } from "react-router-dom"
import "./Navbar.css"
const Navbar = () => {
  const [profileTab, setProfileTab] = useState(false);
  return (
    <div>
      <nav>
        <div id="logo-n-search-navbar-area">
          <NavLink className="linkingtag-logo" to={"http://localhost:3000/"}>
            <div id="navbar-logo">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIIMqHr_md_dNpzcRSzq9MEMhfwBB-PgDvGYnlV1k&s" />
            </div>
          </NavLink>
          <div id="navbar-search-area">
            <i class="fa-solid fa-magnifying-glass"></i>
            <input placeholder='Search Facebook' />
          </div>
        </div>
        <div id="category-navbar-area">
          <div className='category-navbar-inner-div' autoFocus ><i class="fa-solid fa-house fa-2xl"></i></div>
          <div className='category-navbar-inner-div' autoFocus ><i class="fa-solid fa-tv fa-2xl"></i></div>
          <div className='category-navbar-inner-div' autoFocus ><i class="fa-solid fa-store fa-2xl"></i></div>
          <div className='category-navbar-inner-div' autoFocus ><i class="fa-solid fa-users-rectangle fa-2xl"></i></div>
          <div className='category-navbar-inner-div' autoFocus ><i class="fa-solid fa-gamepad fa-2xl"></i></div>
        </div>
        <div id="notification-profile-login-navbar-area">
          <div className='notification-icon-circle-navbar'><i class="fa-solid fa-braille "></i></div>
          <div className='notification-icon-circle-navbar'><i class="fa-brands fa-facebook-messenger "></i></div>
          <div className='notification-icon-circle-navbar'><i class="fa-solid fa-bell"></i></div>
          <div className='notification-icon-circle-navbar' onClick={() => setProfileTab(profileTab => !profileTab)}><img src="https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-unknown-social-media-user-photo-default-avatar-profile-icon-vector-unknown-social-media-user-184816085.jpg" /></div>
        </div>
      </nav >
      {profileTab ? <div id="navbar-user-image-logout-model">
        < div id="navbar-profile-pop" >
          <NavLink to={"http://localhost:3000/profile"} className="linkingtag">
            <div id="current-user-image-n-name">
              <div id="current-user-image-holder-navbar-pop">
                <img src="https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-unknown-social-media-user-photo-default-avatar-profile-icon-vector-unknown-social-media-user-184816085.jpg" />
              </div>
              <p><h3>Rocky Joseph Gomes</h3></p>
            </div>
          </NavLink>
          <p id="current-user-pop-see-all">See all profile</p>
        </div >
        <div id="current-user-pop-logout-logo-parent">
          <div id="logout-logo-pop-image-holder">
            <i class="fa-solid fa-right-from-bracket"></i>
          </div>
          <p><h4>Log Out</h4></p>
        </div>
      </div > : ""}
    </div >
  )
}

export default Navbar
