import "./AnimatedSection.css";
import { useSpring, animated } from "react-spring";
import { useEffect, useRef, useState } from "react";
import {
  InView,
  defaultFallbackInView,
  useInView,
} from "react-intersection-observer";
import { easings } from "@react-spring/web";
import rajatonCollage from "./images/Rajatontaidecollage.png";
import Zoom from "react-medium-image-zoom";
import "./react-medium-styles.css";

/*  
AnimatedSection props:
    video: The url of the video to display
    image: The url of the image to display
    alt: Alt-text for the image
    threshold: What percentage should be visible before the initial animation is played
*/

export default function AnimatedSection(props) {
  const [springs, api] = useSpring(() => ({
    from: { x: 0, opacity: 0 },
  }));

  const [isLarge, setIsLarge] = useState(false);

  const handleClick = () => {
    setIsLarge(!isLarge);
  };

  // handleVisibilityChange is called when the object is visible on viewer's screen
  const handleVisibilityChange = (inView) => {
    if (inView) {
      api.start({
        // Appearing animation from the left
        from: { x: -20, opacity: 0 },
        to: { x: 0, opacity: 1 },
        delay: props.delay,
        config: {
          duration: 500,
          easing: easings.easeInOutQuart,
        },
      });
    }
  };

  // Settings for intersection observer
  const { ref: sectionRef, inView } = useInView({
    threshold: props.threshold,
    onChange: handleVisibilityChange,
    triggerOnce: true,
  });

  return (
    <animated.div
      className="section-container"
      style={{ ...springs }}
      ref={sectionRef}
    >
      {props.title ? (
        <animated.h1 className={"section-text"}>{props.title}</animated.h1>
      ) : null}

      <div className="media-container">
        <div className="media-wrapper">
          {props.image ? (
            <Zoom>
              <div>
                <img
                  src={props.image}
                  className="section-image"
                  loading="lazy"
                  alt={props.alt}
                ></img>
              </div>
            </Zoom>
          ) : null}

          {/* If a video prop exists, display the video element. */}
          {props.video ? (
            <div
              className={`video-container ${isLarge ? "large" : ""}`}
              onClick={handleClick}
            >
              <video
                autoPlay
                loop
                muted
                className="section-video"
                style={{ borderRadius: "20px" }}
              >
                <source src={props.video} type="video/mp4" />
              </video>
            </div>
          ) : null}
        </div>
      </div>
    </animated.div>
  );
}
