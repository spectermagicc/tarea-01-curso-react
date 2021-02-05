import React from 'react';
import {Link} from 'react-router-dom'

import './header-style.css';

const Header = () => (
    <div className="header">
        <Link className="option" to="/">
            Principal page
        </Link>

        <Link className="option" to="/albums-page">
            Albums page
        </Link>
    </div>

);

export default Header;
