import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import Basket from '../header/Basket'
import Profile from '../header/Profile'
import Logo from './../image/logo.svg'
import './Layout.css'

const Layout = () => {
    return (
        <>
            <header className='header'>
                <img src={Logo} alt='logo' className='logo' />
                <NavLink to='/collections'>Collections</NavLink>
                <NavLink to='/men'>Men</NavLink>
                <NavLink to='/women'>Women</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/contact'>Contact</NavLink>
                <Profile />
                <Basket />

            </header>

            <Outlet />
        </>
    )
}

export default Layout
