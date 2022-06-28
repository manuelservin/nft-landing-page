import React,{useEffect} from 'react'
import { Heading, HeroContainer, HeroContent, HeroText, Items } from './HeroStyles'

import {useAnimation} from 'framer-motion'

import { useInView } from "react-intersection-observer";

const Hero = () => {
  const animation = useAnimation();
    const initial = {  opacity:0,   };
	const transition = { delay: 0.6, duration: 2 };
  


    const { ref, inView } = useInView({
		threshold: 0.2,
	});


 
  

 
    useEffect(() => {
     
      
		if (inView) {
			animation.start({
       
                opacity: 1,
			
			});

			return;
		}

		animation.start({   
			opacity:0,
			transition: {
				duration: 0.2,
			},
		});
	}, [inView, animation]);
  return (
    <HeroContainer id='hero'>
      <img src="./images/backgroundhero.png" className='background' alt="hero image" /> 
      <HeroContent>
      <Heading> 
        <img src="./images/logo.png" alt="logo" />
      </Heading>
      
      <HeroText>

      NFT from the Crypt! Some monster fellas <br />
blending in with the normies.
      </HeroText>
  
      </HeroContent>
      <Items
             ref={ref}
             initial={initial}
             transition={transition}
             animate={animation}

   
          
         
            > 
                <img
           
            alt="ralph from the simpsons waving his hand"
            src="./images/itemhero.png"
            
          />
                <img
            
            alt="ralph from the simpsons waving his hand"
            src="./images/itemhero2.png"

          />

            </Items> 
    </HeroContainer>
  )
}

export default Hero