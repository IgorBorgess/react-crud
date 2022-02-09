import './Nav.css'
import React from 'react'

export default props =>
    <aside className="menu-area">
        <nav className="menu">
            <a href="#/">
                <i className="fa fa-home"></i> {props.menuHome}
            </a>
            <a href="#/users">
                <i className="fa fa-users"></i> {props.menuUsers}
            </a>
        </nav>
    </aside>