import React, { useState, useContext } from 'react'
import menuIcon from '../assets/icons/icon_hamburger.png'
import closeIcon from '../assets/icons/icon_close.png'


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
const MenuBox = ()=>{
    // Bringing the context from the parent
    const {toggleState, isOpen, isVisible} = useContext(MenuControllerContext);
    
    // Menu items
    const menuitems=[
        'Home',
        'About us',
        'Our services',
        'Send inquiry'        
    ]

    
    return (
    <div id="menu-wrapper" className={"global-menu isOpen " + isVisible}>
        <a href="/" target="_blank" aria-label="closeMenu" onClick={toggleState} id="btnOpenMenu">
            <img src={closeIcon} width="40px" height="40px" />
        </a>
        <nav aria-label="menu">
            <ul className='menuItems'>
                {menuitems.map((el,idx)=>{ // menu items rendering
                    return <li key={idx}><a href="#">{el}</a></li>
                })}
            </ul>
        </nav>
    </div>
    )    
}
export default MenuController;