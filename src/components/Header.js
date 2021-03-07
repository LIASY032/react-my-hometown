import React from 'react'
import { Link } from 'react-router-dom'
import "./Header.css"



// const images = [
//     "images/塔.jpg",
//     "images/恩平碉堡.gif",
    
//     "images/恩平博物馆.jpg",
//     "images/恩平歇马举人村.jpg" ,
//     "images/恩平老街道里的旧记忆.jpg",
//     "images/温泉.jpeg" ,
//     "images/鳌峰公园.jpg"];


function Header() {
    return (
        <div className="header">
            <Link to="/" className="logo">
                
                Enping<i class="fab fa-pagelines"></i>
           
            </Link>
            <ul className="rightBar">
                <Link to="/tower" className='nav-links'>
                    Tower
                </Link>
                <Link to="/blockhouse" className='nav-links' >
                    Blockhouse
                </Link>
                <Link to="/museum" className='nav-links' >
                    Museum
                </Link>
                <Link to="/jurenvillage" className='nav-links' >
                    Juren Village
                </Link>
                <Link to="/oldstreet" className='nav-links' >
                    Old Street
                </Link>
                <Link to="/spring" className='nav-links' >
                    Spring
                </Link>
                <Link to="/aofengpark" className='nav-links' >
                    Ao Feng Park
                </Link>

            </ul>
        </div>
    )
}

export default Header
