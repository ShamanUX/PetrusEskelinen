import './styles.css';
import Test from './Test';
import Burger from './Burger';
import Carousel from './Carousel';
import {useRef} from "react";
import {useSpring, animated } from 'react-spring';



function Page(props) {
    const handleBurgerClick = () => {
        api.start({
            from: {transfrom: "translateX(0px)"},
            to: {transfrom: "translateX(400px)"}
        })
    }
    const [ springs, api] = useSpring(() => ({  
        from: {transfrom: "translateX(0px)"}
    }))

    return (
        // toplevel-container, a row-flex, allows the burger to work as intended 
        <div className='toplevel-container'>
            <Burger clickFunction={handleBurgerClick}/>
            <animated.div className='page-container' style={{...springs}}>
                
                <div>
                 {props.pagebody}
                </div>
                    
            </animated.div>
        </div>
        
    );
}


export default Page;