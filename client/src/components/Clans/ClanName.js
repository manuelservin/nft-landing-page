import React, { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react'
import { Clan } from './ClanNameStyles';
import {
    motion,
    useViewportScroll,
    useTransform,
    useSpring
  } from "framer-motion"

 const ClanName = ({name, reverse})=>{
    const scrollRef = useRef(null)

  const [scrollRange, setScrollRange] = useState(0)
  

  useLayoutEffect(() => {
    scrollRef && setScrollRange(scrollRef.current.scrollWidth)
    console.log(scrollRef.current.scrollWidth)
  }, [scrollRef])

  const { scrollYProgress } = useViewportScroll()
  const transform = useTransform(
    scrollYProgress,
     reverse ? [1,0]: [0,  1],
    reverse ? [0, -300] : [300, 0]
  )
  
  console.log(scrollRange)
  const spring = useSpring(transform)
    return <Clan ref={scrollRef}  style={{ x: transform }}> {name}</Clan>
       
    

}

export default ClanName;