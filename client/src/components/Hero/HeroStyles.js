import styled from 'styled-components'
import {motion} from 'framer-motion'

export const HeroContainer = styled.div`
height: 100vh;
background-image: radial-gradient(circle farthest-corner at 50% 100%,#bfffd5,#95cec5 41%,#366586 61%,#21033d 89%);
overflow: hidden;
z-index:6;
>.background{
    position:absolute;
    bottom:0;
    


    max-width: 100%;
}
@media screen and (max-width: 768px) {
        height: 600px;
        >.background{
            bottom:38%;
          

        }
    }
`

export const Items = styled(motion.div)`


overflow: hidden;
position:absolute;
   width: 100%;
    display: flex;
    justify-content: space-around;

    bottom: 0;


    > img{
        height: 400px;
    
 
    }
    @media screen and (max-width: 768px) {
        bottom: 38%;
        > img{
        height: 200px;
    
 
    }
    }

`

export const HeroContent = styled(motion.div)`
display: flex;
flex-direction: column;
justify-content: center ;
align-items: center;
margin-top: 130px;


`

export const Heading = styled.figure`
z-index: 8;
width: 500px;
>img{
    width: 100%;
}

@media screen and (max-width:768px){
    width: 200px;
}

`

export const HeroText = styled.p`
text-align: center;
color: #fff;
font-size: 18px;

`