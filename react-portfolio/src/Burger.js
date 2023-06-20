import './styles.css';
import './Burger.css';

import React, {useState, useEffect} from 'react';
import {useSpring, animated } from 'react-spring';

import { RxHamburgerMenu as MenuIcon } from 'react-icons/rx';
import { TfiClose as CloseIcon } from 'react-icons/tfi';


function Burger() {
    const [burgerClicked, setBurgerClicked] = useState(false);

    const initialSidebarWidth ="0px";
    const expandedSidebarWidth ="200px";
    const [ springs, api] = useSpring(() => ({  from: {borderRadius: "0% 50% 50% 0%", width: "0px"}, 
        
    }))
    const [sidebarWidth, setSidebarWidth] = useState(initialSidebarWidth);

    const menuButtonClick = (expandSidebar) => {

        setBurgerClicked(!burgerClicked);
    }

    useEffect( () => {
        if  (burgerClicked) {
            api.start({
                from: {borderRadius: "0% 50% 50% 0%"},
                to: {borderRadius: "0% 0% 0% 0%"},
                config: {
                    duration: 1000
                }
              });
            api.start({
                from: {width: "0px"},
                to: {width: "200px"},
                config: {
                    duration: 500
                }
            });
        } else {
            api.start ({
                from: {borderRadius: "0%", width: "200px"},
                to: {borderRadius: "0% 50% 50% 0%", width: "0px"}
            })
        }
    })

    return (
        <animated.div className="burger-implementation" style={{...springs}}>
            <div className="sidebar-container" >
                <p>check</p>
            </div>

            <span className="menu-button-container div-button" onClick={() => menuButtonClick()}>
                {burgerClicked ? <CloseIcon className='menuIcon'/> : <MenuIcon className='menuIcon'/>}
            </span>
        </animated.div>       
    );
};

export default Burger;