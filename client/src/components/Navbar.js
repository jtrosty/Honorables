import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

const Navbar = (props) => {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
      <a className='navbar-brand' href='#'>
        {props.access} Navbar
      </a>
      <button
        class='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#navbarSupportedContent'
        aria-controls='navbarSupportedContent'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <span class='navbar-toggler-icon'></span>
      </button>

      <div class='collapse navbar-collapse' id='navbarSupportedContent'>
        <ul class='navbar-nav mr-auto'>
          <li class='nav-item'>
            <a class='nav-link' href='Lesson'>
              Lesson
            </a>
          </li>
          <li class='nav-item'>
            <a class='nav-link' href='Messages'>
              Messages
            </a>
          </li>
          <li class='nav-item'>
            <a class='nav-link' href='Notes'>
              Notes
            </a>
          </li>
          <li class='nav-item'>
            <a class='nav-link' href='/'>
              Logout
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
