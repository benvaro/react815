import React from 'react';

import './header.css'

const Header = ({ color, text }) => {
    // const { color, text } = props; // деструктуризація об'єкта
    //console.log(props.color);
    const colorStyle = { "color": color };
    return <div>
        <h1 style={colorStyle}> {text} </h1>
    </div>
}

export default Header;