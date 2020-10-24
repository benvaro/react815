import React from 'react';
import { Link } from 'react-router-dom';

import './header.css'

const Header = ({ color, text }) => {
    // const { color, text } = props; // деструктуризація об'єкта
    //console.log(props.color);
    const colorStyle = { "color": color };
    return <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link to='/' class="navbar-brand" >{text}</Link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarText">
                <ul class="navbar-nav mr-auto">

                    <li class="nav-item">
                        <Link to='/add' class="nav-link">Add film</Link>
                    </li>
                    <li class="nav-item">
                        <Link to='/all' class="nav-link" >All films</Link>
                    </li>
                    <li class="nav-item">
                        <Link to='/contact' class="nav-link" >Contact Page</Link>
                    </li>
                </ul>
            </div>
        </nav>
        <h1 className="container" style={colorStyle}> {text} </h1>
    </div>
}

export default Header;