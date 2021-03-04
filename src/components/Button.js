import React from 'react';
import { Link } from 'react-router-dom';

function Button({content, className, onClick, to, linkClassName}) {
    return (
        <div>
            <Link to={to} className={linkClassName}>
                <button className={className} onClick={onClick}>{ content}</button>
            </Link>
        </div>
    )
}

export default Button
