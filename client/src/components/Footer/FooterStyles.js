import styled from 'styled-components';
import {AiFillHeart} from 'react-icons/ai' 

export const FooterContainer= styled.div`
   background-color:#210f3e ;
    padding: 25px 0;
    text-align: center;

    >.footer_text{
        color: #f5f5f5;

    >a{
        text-decoration: none;
        color: #d4f5c2;
        font-weight: bold;
        &:hover {
            color: #d4f5c8;
            text-decoration: underline;
        }
    }


    }
`
export const Heart = styled(AiFillHeart)`
color: red;

`
