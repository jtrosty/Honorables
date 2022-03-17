import React from 'react'

const Navbar = (props) => {
  return (
    <nav className='Navbar'>
      <a href='Lesson'>Lesson</a>
      <br />
      <a href='Messages'>Messages</a>
      <br />
      <a href='Notes'>Notes</a>
      <br />
      <a href='/'>Logout</a>
      <br />
    </nav>
  )
}

export default Navbar
