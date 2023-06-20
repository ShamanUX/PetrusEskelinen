import "./Carousel.css";
import {useSpringCarousel} from 'react-spring-carousel';

export default function Carousel() {
    const {carouselFragment} = useSpringCarousel({
        items: [
            {
                id: 'item-1',
                renderItem: (
                    <div className="block">Item 1</div>
                )
            },
            {
                id: 'item-2',
                renderItem: (
                    <div className="block">Item 2</div>
                )
            }
        ]
    })

    return (
        <div>
            {carouselFragment}
        </div>
    )
}