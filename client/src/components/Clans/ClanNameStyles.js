import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Clan = styled(motion.h2)`
overflow: hidden ;
font-size: 70px;
    font-weight: 900;
    text-transform: uppercase;
    color: #d3f5c0;
    @media screen and (max-width: 880px) {
        font-size: 3rem;
}

@media screen and (max-width: 600px) {
        font-size: 2rem;
}

`;