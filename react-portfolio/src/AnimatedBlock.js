import { useSpring, animated } from "react-spring";
import { useEffect } from "react";
import { easings } from "@react-spring/web";

import { Tooltip } from "react-tooltip";

import "./AnimatedBlock.css";

export default function AnimatedBlock(props) {
  const [springs, api] = useSpring(() => ({
    from: { x: 0, opacity: 0 },
  }));

  useEffect(() => {
    // Animation appearing and sliding in from the left
    api.start({
      from: { x: -10, opacity: 0 },
      to: { x: 0, opacity: 1 },
      delay: props.delay,
      config: {
        duration: 500,
        easing: easings.easeInCubic,
      },
    });
  });

  return (
    <>
      {/* Display logoblock if (image)source is given */}
      {props.source ? (
        <>
          <animated.div
            className="logoBlock"
            style={{ ...springs }}
            data-tooltip-content={props.tooltip}
            data-tooltip-id="tooltip-id"
            data-tooltip-place="bottom"
          >
            <img className="logo" src={props.source}></img>
          </animated.div>
          <Tooltip
            id="tooltip-id"
            style={{ fontSize: "20px" }}
            variant="light"
          />
        </>
      ) : null}

      {/* display linkblock if a link is given */}
      {props.link ? (
        <animated.div className="linkBlock" style={{ ...springs }}>
          {props.link}
        </animated.div>
      ) : null}

      {/* display customdiv if one is given */}
      {props.customDiv ? props.customDiv : null}
    </>
  );
}
