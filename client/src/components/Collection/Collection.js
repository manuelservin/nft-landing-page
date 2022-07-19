import React from 'react'
import { Container, Section } from '../../globalStyles';
import { CollectionRow } from './CollectionStyles';

import { cardData } from '../../data/homeData';

const Collection = () => {

    return (
		<>
			<Section inverse='inverse' padding='160px 0' id='collection'>
			
					<CollectionRow>
                       <div className="top">
                         <div className="top__desc">

                         </div>
                       <h2 className="title">THE COLLECTION</h2>
Some unique digital monster fellas <br />
trying to blend with the normies <br />
on the ethereum Blockchain.
                       </div>
                       <div className="bottom">
                           <div className="bottom wrapper card__anim1">
                              { cardData?.map(({id,img,alt})=>(
                                  <div className="card" key={id}>
                                    <img src={img} alt={alt} />

                                  </div>
                              ))}
                           </div>
                           <div className="bottom wrapper card__anim2">
                           { cardData?.sort().map(({id,img,alt})=>(
                                  <div className="card" key={id}>
                                    <img src={img} alt={alt} />

                                  </div>
                              ))}
                           </div>
                       </div>


					</CollectionRow>
				
			</Section>
		</>
	);
};

export default Collection