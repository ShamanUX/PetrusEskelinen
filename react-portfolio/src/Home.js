import './styles.css';
import './Home.css';
import Test from './Test';
import Burger from './Burger';
import Carousel from './Carousel';
import {useRef} from "react";
import {useSpring, animated } from 'react-spring';



function Home() {
    const burgerComponent = useRef(null)
    const handleBurgerClick = () => {
        api.start({
            from: {x: 0},
            to: {x: 0}
        })
    }
    const [ springs, api] = useSpring(() => ({  
        from: {x: 0}
    }))

    return (
        // toplevel-container, a row-flex, allows the burger to work as intended 
        <div className='toplevel-container'>
            <Burger clickFunction={handleBurgerClick} style={{position: "sticky"}}/>
            <animated.div className='page-container' style={{...springs}}>
                <header>
                    <div className='header-content'>
                        <h1> I'm Petrus and welcome to my portfolio </h1>
                        <Carousel></Carousel>
                    </div>
                </header>
                <h1>aatasra<br/><br/><br/>Asdasd</h1>
            </animated.div>
        </div>
        
    );
}


export default Home;