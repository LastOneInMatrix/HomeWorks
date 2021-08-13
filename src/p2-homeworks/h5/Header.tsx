import React, {useState} from 'react'
import {NavLink, Route, Redirect} from "react-router-dom";
import './main.module.css'
import s from './main.module.css';

function Header() {
    return (
        <div>
            <Links />
        </div>
    )
}
const Links = () =>  {
    const [open, setOpen] = useState(false)
    const handleClick = () => {
        setOpen(!open);
    }


        return (
            <pre className={s.link}>
                <div className={s.square}onClick={handleClick}></div>
                <div className={`${s.menu} ${ open ? s.open : ''}`}>
                    <ul>
                        <li><NavLink onClick={handleClick} to={'/pre-junior'}>Pre Junior</NavLink></li>
                        <li><NavLink onClick={handleClick} to={'/junior'}>Junior</NavLink></li>
                        <li><NavLink onClick={handleClick} to={'/juniorPLus'}>Junior PLus</NavLink></li>
                    </ul>
                </div>
            </pre>
        )
    }


export default Header
