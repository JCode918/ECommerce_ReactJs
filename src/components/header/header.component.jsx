import React from 'react'
import {Link} from 'react-router-dom'
import './header.styles.scss'

/*Importing Logo */
import {ReactComponent as Logo} from '../../assets/Prismatic-Lion-10-No-Background.svg'

const Header = () =>(
    <div className='header'>
     <Link className='logo-container' to="/">
        <Logo className='logo'/>
     </Link>
     <div className='options'>
    <Link className='option' to='/shop'>SHOP</Link>
    <Link className='option' to='/shop'>CONTACT</Link>
     </div>
    </div>
)

export default Header;