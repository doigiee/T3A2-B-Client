import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import menuIcon from '../assets/icons/icon_hamburger.png'
import closeIcon from '../assets/icons/icon_close.png'
import login from '../assets/icons/icon_login.png'
import join from '../assets/icons/icon_join.png'
import facebook from '../assets/icons/facebook.png'
import insta from '../assets/icons/instagram.png'


//  Use Context for faster performance between states and functions globally
const MenuControllerContext = React.createContext()


// Parent component to control the menu
const MenuController = () => {
    // State to watch that the menu is opened or closed
    const [ isOpen, setOpen ] = useState(null)

    // State to give html class sub-class 'true' or 'false'
    const [ isVisible, setVisible ] = useState(() => {
        return isOpen ? true : false
    })


    // Handler to change states when the button is clicked
    const toggleState = (evt) => {
        evt.preventDefault()
        setOpen(!isOpen)
        setVisible(!isOpen)
    }

    return (
        <MenuControllerContext.Provider value = {{toggleState, isOpen, isVisible}}>
            <a href="/" target="_blank" aria-label="openMenu" onClick={toggleState} 
                    aria-haspopup={!isOpen} id="btnOpenMenu">
                <img src={menuIcon} width="40px" height="40px" />
            </a>
            <MenuBox></MenuBox>
        </MenuControllerContext.Provider>
    )
}




// MenuBox component
const MenuBox = () => {
    // Bringing the context from the parent
    const {toggleState, isOpen, isVisible} = useContext(MenuControllerContext);
    
    // Menu items
    const menuitems=[
        'Home',
        'About us',
        'Our services',
        'Send inquiry'        
    ]


    // Custom Link component
    const LinkTo = (props) => {
        return (
            <Link target="_blank" to={props?.to}>
                <img src={props.src} />
                <span>{props?.title}</span>
            </Link>
        )
    }
    
    return (
    <div id="menu-wrapper" className={"shadow-btm isOpen " + isVisible}>
        <div id="login-signup-box" className="flex-cntr-sb">
            <LinkTo to="/" src={login} title="Login" onClick={toggleState}/>
            <LinkTo to="/" src={join} title="Join" onClick={toggleState}/>
            <a href="/" target="_blank" aria-label="closeMenu" onClick={toggleState} id="btnOpenMenu">
                <img src={closeIcon} width="40px" height="40px" />
            </a>
        </div>
        <nav aria-label="menu" id="menu-container">
            <ul id='menu-box'>
                {menuitems.map((el,idx)=>{ // menu items rendering
                    return <li key={idx}><a href="#">{el}</a></li>
                })}
            </ul>
        </nav>
        <div id="social-menu">
            <LinkTo to="http://instagram.com/" src={insta} target="_blank"/>
            <LinkTo to="http://facebook.com" src={facebook} target="_blank"/>
        </div>
    </div>
    )    
}
export default MenuController;