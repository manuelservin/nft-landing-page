import React from 'react'
import {ClansContainer, Title} from './ClansStyles';
import ClanName from './ClanName'



const Clans = () => {

  return (

    <ClansContainer>
          <Title> CLANS</Title>


          <ClanName name='Zombies'
          />
        
           <ClanName name='Vampires' reverse={true} />
          <ClanName name='Mummies' />
          <ClanName name='WereWolves' reverse={true}/>
          <ClanName name='Frankensteins' />
          <ClanName name='Sasquatchs' reverse={true}/>
          <ClanName name='Cthulu' />
        



      </ClansContainer>
   
  )
}

export default Clans