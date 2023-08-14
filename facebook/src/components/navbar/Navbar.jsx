import React from 'react'
import "./Navbar.css"
const Navbar = () => {

  return (
    <div>
      <nav>
        <div id="logo-n-search-navbar-area">
          <div id="navbar-logo">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIIMqHr_md_dNpzcRSzq9MEMhfwBB-PgDvGYnlV1k&s"/>
          </div>
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
          <div className='notification-icon-circle-navbar'><img src="https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-unknown-social-media-user-photo-default-avatar-profile-icon-vector-unknown-social-media-user-184816085.jpg"/></div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
