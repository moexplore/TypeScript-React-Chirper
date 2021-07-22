import React from 'react'
import {NavLink} from 'react-router-dom'



const Navbar = () => {
    
    return (
        
        <nav className = 'navbar'>
            
            <ul className = 'nav-links'>
            <li className = 'nav-item'>
            <NavLink to = '/' exact activeClassName="active" className = 'link'>Home</NavLink>
            </li>
            <li className = 'nav-item'>
            <NavLink to = '/allchirps' className = 'link' activeClassName="active">All Chirps</NavLink>
            </li>
            <li className = 'nav-item'>
            <NavLink to = '/newchirp' activeClassName="active" className = 'link'>Post New Chirp</NavLink>
            </li>
            </ul>


        </nav>
     
    )
}

export default Navbar