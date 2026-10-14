import React from 'react';
import { Link } from 'react-router-dom'
function Navbar() {
    return (
        <nav class="navbar bg-1 fg-2 border-bottom sticky-top">
            <div class="container-fluid ">
                <Link className="nav-link fs-3 fw-bold active" aria-current="page" to="/signup" style={{color:'#F59E0B'}}>
                  DandiyaMatch
                </Link>

            </div>
        </nav>
    );
}

export default Navbar;