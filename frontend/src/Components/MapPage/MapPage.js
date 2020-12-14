import React from "react";
import Container from '@material-ui/core/Container';
import { YMaps, Map} from 'react-yandex-maps';
import './MapPage.scss'

const mapData = {
center: [61.785, 34.345],
   zoom: 13
};


const MapPage = () => {
   return (
      <Container component="main" maxWidth="lg" className='container'>
      <YMaps>
         <div>
         <Map  className='map' defaultState={mapData}/>
         </div>
      </YMaps>
   </Container>
   )

}

export default MapPage;