import styled from 'styled-components';



export const CollectionRow = styled.div`
background-color: #210e3f;

display: grid;
  grid-template-columns: 1fr repeat(12, minmax(min-content, 10rem)) 1fr;
transition: all 0.3s ease-in-out;

>.top{
  >.title{
    color:#baf772;
    font-size: 14px ;
    font-weight: bold;
    letter-spacing: 2px ;

  }
  font-size: 3em;
    line-height: 120%;
    font-weight: 600;
  
    grid-column: 2/14;
    text-align: center;
    padding: 0 6rem;
@media only screen and (max-width: 57em) {
      grid-column: 1/15;
      font-size: 2.7em;

    }
    @media only screen and (max-width: 45em) {
      padding: 0 4rem;
    }
}
>.bottom{
 
    grid-column: 1/15;
    overflow-x: hidden;
    margin-top: 4rem;
    margin-bottom: 4rem;
    >.card__anim1{
        animation: CardAnim1 25s ease-in-out infinite alternate;

&:hover {
  animation-play-state: paused;

}

@keyframes CardAnim1 {
     from {
       transform: translateX(-52%);
    }
     to {
       transform: translateX(0%);
     }
   }
    }
    >.card__anim2{
        animation: CardAnim2 25s ease-in-out infinite alternate;

&:hover {
  animation-play-state: paused;

}
@keyframes CardAnim2 {
    from {
       transform: translateX(0%);
     }
     to {
       transform: translateX(-52%);
     }
   }
    }

    >.wrapper {
  
        display: flex;
  justify-content: space-between;
  align-items: center;
      width: max-content;

      .card {
        cursor: pointer;

        height:200px;
        width: 200px;
        padding: 10px;
       
       >img{
         height: 100%;
         object-fit: contain;
         border-radius: 10px;
         
        
      
      
       }

      }
    }
}



`;
