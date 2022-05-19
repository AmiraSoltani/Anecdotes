import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <ul>
        <Link to='/'><li>Home</li></Link>
        <Link to='/add'><li>New Anecdote</li></Link>
        <Link to='/about'><li>About</li></Link>

    </ul>
  )
}

export default Header