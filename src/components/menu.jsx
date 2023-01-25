import React, { useState, useContext, useEffect } from 'react'
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
    
    const toggleStateForMenu = () => {
        setOpen(!isOpen)
        setVisible(!isOpen)
    }

    useEffect(()=>console.log('Rendered'),[])
    

    return (
        <MenuControllerContext.Provider value = {{toggleState, toggleStateForMenu, isOpen, isVisible}}>
            <Link to="/" target="_blank" aria-label="openMenu" onClick={toggleState} 
                    aria-haspopup={!isOpen} id="btnOpenMenu">
                <img src={menuIcon} width="40px" height="40px" />
            </Link>
            <MenuBox></MenuBox>
        </MenuControllerContext.Provider>
    )
}




// MenuBox component
const MenuBox = () => {
    // Bringing the context from the parent
    const {toggleState, toggleStateForMenu, isOpen, isVisible} = useContext(MenuControllerContext);
    
    // Menu items
    const menuitems=[
        {title: "Home", to: "/"},
        {title: "About us", to: "/about_us"},
        {title: "Our services", to: "/our_services"},
        {title: "Send inquiry", to: "/send_inquiry"}        
    ]



    // Custom Link component
    const LinkTo = (props) => {
        return (
            <Link to={props.to}>
                <img src={props.src} />
                <span>{props?.title}</span>
            </Link>
        )
    }
    
    return (
    <div id="menu-wrapper" className={"shadow-btm isOpen " + isVisible}>
        <div id="login-signup-box" className="flex a-i-center j-c-sb">
            <LinkTo to="/login" src={login} title="Login" onClick={toggleStateForMenu}/>
            <LinkTo to="/join" src={join} title="Join" onClick={toggleStateForMenu}/>
            <Link aria-label="closeMenu" onClick={toggleState} id="btnOpenMenu">
                <img src={closeIcon} width="40px" height="40px" />
            </Link>
        </div>
        <nav aria-label="menu" id="menu-container">
            <ul id='menu-box'>
                {menuitems.map((el,idx) => { // menu items rendering
                    return <li key={idx}>
                        <Link to={el.to} onClick={toggleStateForMenu}>{el.title}</Link>
                        </li>
                })}
            </ul>
        </nav>
        <div id="social-menu" className="flex a-i-center">
            <a href="http://instagram.com/" target="_blank">
                <img src={insta}/>
            </a>
            <a href="http://facebook.com" target="_blank">
                <img src={facebook}/>
            </a>
        </div>
    </div>
    )    
}
export default MenuController;