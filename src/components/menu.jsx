import React, { useState, useContext } from 'react'
import menuIcon from '../assets/icons/icon_hamburger.png'
import closeIcon from '../assets/icons/icon_close.png'


//  Use Context for faster performance between states and functions
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
            <a href="/" target="_blank" aria-label="Open menu" onClick={toggleState} 
                    aria-haspopup={!isOpen} id="btnOpenMenu">
                <img src={menuIcon} width="40px" height="40px" />
            </a>
            <MenuBox></MenuBox>
        </MenuControllerContext.Provider>
    )
}

const MenuBox = ()=>{//5. MenuBox 컴포넌트를 function으로 작성합니다.
    const {toggleState,isOpen,isVisible} = useContext(MenuControllerContext);
    //5-1. 객체 구조로 3-1에서 value로 전달했던 변수를 동일한 이름으로 useContext를 사용하여 가져옵니다.
    

    const menuitems=[//5-3. map 메소드로 반복하여 항목 링크를 생성할 것이므로, 배열을 만들어줍시다.
        'Hello, NULI',
        'Hello, Javascript',
        'Hello, React'        
    ]

    
    return (/*7. 마찬가지로 마크업을 리턴해줍시다. */
    <div id="menu-wrapper" className={"global-menu isOpen " + isVisible}>
        <a href="/" target="_blank" aria-label="Close menu" onClick={toggleState} id="btnOpenMenu">
            <img src={closeIcon} width="40px" height="40px" />
        </a>
        <nav aria-label="Menu">
            <ul>
                {menuitems.map((el,idx)=>{//7-2. 아까 위에서 작성한 Menuitems를 map 함수 반복문으로 마크업합니다.
                    return <li key={idx}><a href="#">{el}</a></li>//7-4. ref가 없는 나머지도 리턴합니다.
                })}
            </ul>
        </nav>
    </div>
    )    
}
export default MenuController;/*이제 menu.js를 모두 작성했으니 모듈을 추출해 줍시다.*/