import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Clan = styled(motion.h2)`
overflow: hidden ;
font-size: 60px;
    font-weight: 900;
    font-family: 'Source Sans Pro',sans-serif;

  
    text-transform: uppercase;
    color: #d3f5c0;
    @media screen and (max-width: 880px) {
        font-size: 3rem;
}

@media screen and (max-width: 600px) {
        font-size: 2rem;
}

`;