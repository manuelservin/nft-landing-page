import styled from 'styled-components';
import { motion } from 'framer-motion';
export const JoinContainer = styled.div`
height: 500px;

background-image: radial-gradient(circle farthest-corner at 50% 100%,#7f9eed,#453d96);
display: flex;
justify-content: center;
align-items: center;

>.test{
    overflow: scroll;
}

`;

export const JoinImg = styled(motion.img)`

height: 600px;
position: relative;
z-index: 2;
bottom: 150;
`;

export const JoinBody = styled.div`

width: 350px;
margin-left: 80px;
@media screen and (max-width: 880px) {
    display: none;
}

`

export const JoinTitle= styled.h2`

    color: #ebffe0;
    font-size: 100px;
    line-height: 80%;
    font-weight: 900;
    text-transform: uppercase;
    letter-spacing: -5px;


`;

export const JoinText = styled.p`
margin-top: 20px;
color: #21033d;
font-size: 20px;
    font-weight: 600;
    margin-bottom: 50px;
`;

export const JoinButton = styled.button`
position: static;
    display: inline-block;
    margin: 40px 20px 0 auto;
    padding: 15px 40px;
    border: none;
    border-radius: 10px;
    background-color: #24153b;
    color: #ebffe0;
    font-size: 18px;
    font-weight: 700;
    &:hover{
        cursor: pointer;
    }

`;

