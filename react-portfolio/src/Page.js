import './styles.css';
import Test from './Test';
import Burger from './Burger';
import Carousel from './Carousel';
import {useRef} from "react";
import {useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';



function Page(props) {
    return (
        // toplevel-container, a row-flex, allows the burger to work as intended 
            <animated.div className='page-container'>
                <div>
                 {props.pagebody}
                </div>
            </animated.div>     
    );
}


export default Page;