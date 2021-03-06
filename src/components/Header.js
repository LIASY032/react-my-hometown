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
            <div className="logo">
                Enping<i class="fab fa-pagelines"></i>
            </div>
            <ul className="rightBar">
                <Link to="/tower">
                    Tower
                </Link>
                <Link to="/blockhouse">
                    Blockhouse
                </Link>
                <Link to="/museum">
                    Museum
                </Link>
                <Link to="/jurenvillage">
                    Juren Village
                </Link>
                <Link to="/oldstreet">
                    Old Street
                </Link>
                <Link to="/spring">
                    Spring
                </Link>
                <Link to="/aofengpark">
                    Ao Feng Park
                </Link>

            </ul>
        </div>
    )
}

export default Header
