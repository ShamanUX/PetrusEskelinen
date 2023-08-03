import './styles.css';
import './Burger.css';
import Home from './Page';

import React, {useState, useEffect} from 'react';
import {useSpring, animated } from 'react-spring';
import { easings } from '@react-spring/web'

import { RxHamburgerMenu as MenuIcon } from 'react-icons/rx';
import { TfiClose as CloseIcon } from 'react-icons/tfi';
import { Link } from 'react-router-dom';
import AnimatedBlock from './AnimatedBlock';


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
    const [sidebarEnabled, setSidebarEnabled] = useState({display: 'none'});

    const menuButtonClick = () => {

        setBurgerClicked(!burgerClicked);
        if (!burgerClicked) {
            setSidebarEnabled({display: 'flex'})
        } else {
            setSidebarEnabled({display: 'none'})
        }
    }

    useEffect( () => {
        if  (burgerClicked) { // Burger is now closed

            api.start({
                from: {borderRadius: "0% 50% 0% 0%"},
                to: {borderRadius: "0% 0% 0% 0%"},
                config: {
                    easing: easings.easeInCirc,
                    duration: 500
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
        } else { // Burger is now enabled
            api.start ({
                from: {borderRadius: "0%", minWidth: "200px"},
                to: {borderRadius: "0% 50% 0% 0%", minWidth: "0px"}
            })
            linksApi.start({
                from: {opacity: 1},
                to: {opacity: 0},
                config: {
                    duration: 300
                }
            })
        }
    }, [burgerClicked])

    return (
        <animated.div className="burger-implementation" style={{}}>

            <div className="menu-items">
                <span className="menu-button-container div-button" onClick={() => {menuButtonClick()} }>
                    {burgerClicked ? <CloseIcon className='menuIcon'/> : <MenuIcon className='menuIcon'/>}
                </span>
    
                <animated.div className="sidebar-container" style={{...linkSprings, ...sidebarEnabled}}>
                    <AnimatedBlock link={
                        <Link  to="/" className='link-element' onClick={() => {menuButtonClick()} }>
                             <div className='link-container' style={{height: '100%'}}><h2 className='link-text'>Projects</h2></div>
                        </Link>}/>
                    <AnimatedBlock delay={100} link={
                        <Link to="/resume" className='link-element' onClick={() => {menuButtonClick()} }>
                            <div className='link-container' style={{height: '100%'}}><h2 className='link-text'>Resume</h2></div>
                        </Link>}/>
                </animated.div>
            </div>

            
        </animated.div>       
    );
};

export default Burger;