import React from 'react'
import SearchBar from './SearchBar'
import "./Navbar.css"



const Navbar = ({ setSearchingText }) => {
  return (
    <nav>
      <h3 className='logo'>LiftSync</h3>
      <SearchBar setSearchingText={setSearchingText} />
    </nav>
  )
}

export default Navbar