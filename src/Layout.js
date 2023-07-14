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
                <li>
                    <Link to="/Drummachine" target={'_blank'} className="quote">Drum Machine</Link>
                </li>
                <li>
                    <Link to="/Calculator" target={'_blank'} className="quote">JavaScript Calculator</Link>
                </li>
                <li>
                    <Link to="/Clock" target={'_blank'} className="quote">25 + 5 Clock</Link>
                </li>
            </ul>
            <Outlet />
        </div>
    )
}
export default Layout