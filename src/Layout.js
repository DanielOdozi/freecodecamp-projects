import { Outlet, Link } from "react-router-dom";
import React from 'react'
import './css/index.css'

function Layout(){
    return(
        <div>
            <ul className="styled-list">
                <li>
                    <Link to="/Quote" target={'_blank'} className="quote">Random Quote Machine</Link>
                </li>
                <li>
                    <Link to="/Markdown" target={'_blank'} className="quote">Markdown Previewer</Link>
                </li>
            </ul>
            <Outlet />
        </div>
    )
}
export default Layout