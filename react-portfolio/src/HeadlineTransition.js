
import { useRef, useEffect, useState } from 'react';
import TextTransition, { presets } from 'react-text-transition';

const TEXTS = ['Innovative', 'User-friendly', 'Responsive',];






export default function HeadlineTransition() {
    const [index, setIndex] = useState(0);
    
    useEffect( () => {
        const intervalId = setInterval(
            () => setIndex((index) => index + 1),
            3000, // every 3 seconds
          );
          return () => clearTimeout(intervalId);
    }, []
    )

    return(
        <TextTransition 
            inline='true' springConfig={presets.stiff}>{TEXTS[index % TEXTS.length]}
        </TextTransition>
    )
    
}