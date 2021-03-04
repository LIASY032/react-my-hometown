import React from 'react';
import { Link } from 'react-router-dom';

function Button({content, className, onClick, to, linkClassName, icon}) {
    return (
        <div>
            <Link to={to} className={linkClassName}>
                <button className={className} onClick={onClick}>{content}
                <i class={icon}></i>
                </button>
            </Link>
        </div>
    )
}

export default Button
