import React,{useState, useRef,  useEffect, useMemo }from 'react'
import { useTransform, useViewportScroll } from 'framer-motion'
import { Section } from '../../globalStyles'
import { JoinContainer, JoinImg, JoinBody, JoinTitle, JoinText, JoinButton} from './JoinUsStyles'

 let yOffset = 100;// number > 0
   let easing = [0.42, 0, 0.58, 1];
  // easing = "easeInOut", // [number, number, number, number] | "linear" | "easeIn" |
  //"easeOut" | "easeInOut" | "circIn" | "circOut" | "circInOut" | "backIn" | "backOut" |
  //"backInOut" | "anticipate" | EasingFunction;
 let triggerPoint = 1; // value between 0 and 1 (top and bottom of the window), point to start animation
  let fadeOut = false; // true | false fade an element out on end of the anim

const JoinUs = () => {
  const { scrollY } = useViewportScroll();
  const ref = useRef();
  const [elementTop, setElementTop] = useState(0);
  const [elementBottom, setElementBottom] = useState(0);
  const [clientHeight, setClientHeight] = useState(0);
  useEffect(() => {
    if (!ref.current) return;

    const setValues = () => {
      setElementTop(ref.current.offsetTop);
      setElementBottom(ref.current.offsetTop + ref.current.offsetHeight);
      setClientHeight(window.innerHeight);
    };

    setValues();
    document.addEventListener("load", setValues);
    window.addEventListener("resize", setValues);

    return () => {
      document.removeEventListener("load", setValues);
      window.removeEventListener("resize", setValues);
    };
  }, [ref, yOffset]);

  const transformInitialValue = elementTop - clientHeight * triggerPoint;
  const transformFinalValue = elementTop + yOffset;
  console.log(transformInitialValue, transformFinalValue)

  const yRange = [transformFinalValue,transformInitialValue ];

  const y = useTransform(scrollY, yRange, [-30, +yOffset+200], easing);

  const opacityInitialValue = fadeOut ? 0 : 1;
  const opacityRange = useMemo(() => [opacityInitialValue, 1], [
    opacityInitialValue
  ]);

  // const yOpacityRange = [transformInitialValue, transformFinalValue];
  const yOpacityRange = [elementBottom, transformFinalValue - yOffset];
  const opacity = useTransform(
    scrollY,
    yOpacityRange,
    opacityRange,
    "anticipate"
  );

  console.log(yRange)


    
  return (
    
          <JoinContainer>
              
              <JoinImg src='./images/joinus.png' ref={ref} initial={{ y: 0 }} style={{ y, opacity }}

      />

      <JoinBody>
        <JoinTitle>JOIN US!</JoinTitle>
        <JoinText>If two heads are better than one, 6.666 heads should be way better! join our community.</JoinText>
       
        <JoinButton>
          Twitter
        </JoinButton>
        <JoinButton>
          Discord
        </JoinButton>

      </JoinBody>

          </JoinContainer>
  
  )
}

export default JoinUs