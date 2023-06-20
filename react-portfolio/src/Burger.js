import './styles.css';
import './Burger.css';
import Home from './Page';

import React, {useState, useEffect} from 'react';
import {useSpring, animated } from 'react-spring';
import { easings } from '@react-spring/web'

import { RxHamburgerMenu as MenuIcon } from 'react-icons/rx';
import { TfiClose as CloseIcon } from 'react-icons/tfi';


function Burger(props) {
    const [burgerClicked, setBurgerClicked] = useState(false);

    const initialSidebarWidth ="0px";
    const expandedSidebarWidth ="200px";
    const [ springs, api] = useSpring(() => ({  
        from: {borderRadius: "0% 50% 0% 0%", minWidth: "0px"}, 
    }))
    const [ linkSprings, linksApi] = useSpring(() => ({  
        from: {opacity: 0}, 
    }))
    const [sidebarWidth, setSidebarWidth] = useState(initialSidebarWidth);

    const menuButtonClick = () => {

        setBurgerClicked(!burgerClicked);
        props.clickFunction()
    }

    useEffect( () => {
        if  (burgerClicked) {
            api.start({
                from: {borderRadius: "0% 50% 0% 0%"},
                to: {borderRadius: "0% 0% 0% 0%"},
                config: {
                    easing: easings.easeInCirc,
                    duration: 750
                }
              });
            api.start({
                from: {minWidth: "0px"},
                to: {minWidth: "200px"},
                config: {
                    
                }
            });
            linksApi.start({
                from: {opacity: 0},
                to: {opacity: 1},
                delay: 200
            })
        } else {
            api.start ({
                from: {borderRadius: "0%", minWidth: "200px"},
                to: {borderRadius: "0% 50% 0% 0%", minWidth: "0px"}
            })
            linksApi.start({
                from: {opacity: 1},
                to: {opacity: 0},
                config: {
                    duration: 100
                }
            })
        }
    })

    return (
        <animated.div className="burger-implementation" style={{...springs}}>
            <span className="menu-button-container div-button" onClick={() => {menuButtonClick()} }>
                {burgerClicked ? <CloseIcon className='menuIcon'/> : <MenuIcon className='menuIcon'/>}
            </span>

            <animated.div className="sidebar-container" style={{...linkSprings}}>
                <ul>
                    <li>About me</li>
                    <li>CV</li>
                    <li>Projects</li>
                </ul>
            </animated.div>

            
        </animated.div>       
    );
};

export default Burger;