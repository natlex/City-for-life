import React from "react";
import { YMaps, Map, Placemark} from 'react-yandex-maps';
import {connect} from 'react-redux';
import { Link } from "react-router-dom";
import { useState } from 'react';
import './MapPage.scss';

const mapData = {
center: [61.785, 34.345],
   zoom: 13
};


const MapPage = ({value}) => {

   const [label, setLabel] = useState(false);

   return (
   <div>  
      <div className = 'containerMaps'>
            <YMaps >
               <Map className='map' defaultState={mapData}>
               {!value 
                  ? 
                  <Link to = '/login/'>
                     <button 
                     className = 'map__button'> 
                     Добавить метку
                     </button> 
                  </Link> 
                  : 
                  <div>
                     <button 
                     className = 'map__button' 
                     onClick = {() => setLabel(true)}> 
                        Добавить метку
                     </button>
                     {label && <Placemark
                     defaultGeometry={[61.785, 34.345]}
                     properties={{
                        balloonContentBody:
                           'Petrozavodsk city',
                     }}
                     modules={['geoObject.addon.balloon']}
                     geometry = {[61.785, 34.345]} 
                     >
                     </Placemark>
                     } 
                  </div>
            }
               </Map>
            </YMaps>
      </div>
   </div>
   )

}

const mapStateToProps = (state) => {
   return {
      value: state.boolean,
   }
} 

export default connect(mapStateToProps) (MapPage);

