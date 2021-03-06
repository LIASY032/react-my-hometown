import React from 'react'
import Button from './Button'
import "./Search.css"



function Search() {
    return (
        <div className="search-block">
            <select className="select-language">
                <option>English</option>
                <option>中文</option>
            </select>
            <ul className="menu">
                <input type="text" ></input>
                <Button className="btn btn--search" to="/search" icon="fas fa-search" content="Search"/>

            </ul>
            
        </div>
    )
}

export default Search
