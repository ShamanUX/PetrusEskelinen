import {useSpring, animated} from 'react-spring'
import { useEffect } from 'react'
import { easings } from '@react-spring/web'

import './AnimatedBlock.css'


export default function AnimatedBlock(props) {
    const [ springs, api] = useSpring(() => ({  
        from: {x:0, opacity: 0}
    }))

    useEffect( () => {
        api.start(
            {from: {x: -10, opacity: 0},
            to: {x: 0, opacity: 1},
            delay: props.delay,
            config: {
                duration: 500,
                easing: easings.easeInCubic
            }}
        )
    }
    )

    return(
        <>
            {/* Display logoblock if (image)source is given */}
            {props.source ? 
                <animated.div className="logoBlock" style={{...springs}}>
                    <img className='logo' src={props.source}></img>
                </animated.div>
                : 
                null
            }
            {/* display linkblock if a link is given */}
            
            {props.link ? 
                <animated.div className="linkBlock" style={{...springs}}>
                    {props.link}
                </animated.div>
                :
                null
            }
        </>
    );
}