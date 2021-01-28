import React, { useEffect } from "react";
import { YMaps, Map, Placemark} from 'react-yandex-maps';
import {connect} from 'react-redux';
import { Link } from "react-router-dom";
import { useState } from 'react';
import './MapPage.scss';
import { setCoordinate } from "../../redux/mapReducer";


const mapData = {
center: [61.785, 34.345],
   zoom: 13
};

const YandexMap = ({isAuth, setCoordinate, coordinate}) => {

   const [label, setLabel] = useState(false);

   useEffect(() => {
      if (!isAuth) {
         setCoordinate([])
      }
   }, [isAuth])

   const getCoords = (e) => {
      if(label) {
         let coords = e.get('coords')
         setCoordinate([coords[0].toPrecision(6), coords[1].toPrecision(6)].map(item => +item))
      } 
   }

   const apikey = process.env.REACT_APP_API_KEY

   const Label = () => {
      return (
         <Placemark
            defaultGeometry={coordinate}
            >
         </Placemark>  
      )
   }

   return (
      <div>
         <div className = 'containerMaps'>
            <YMaps 
            query={{
               apikey  
            }}>
               <Link to = {!isAuth ? '/login/': '/'} >
                  <button 
                     className = 'map__button'
                     onClick = {() => setLabel(true)}
                     >
                     Добавить метку
                  </button>
               </Link>
               <Link to = {!isAuth ? '/login/': '/'} >
                  <Map 
                  onClick = {(e) => getCoords(e)}
                  className='map' defaultState={mapData}>
                     <Label/>
                  </Map>
               </Link>
            </YMaps>
         </div>
      </div>
   )
}

const mapStateToProps = (state) => {
   return {
      isAuth: state.loginPage.isAuth,
      coordinate: state.mapPage.coordinateLabel
   }
} 


export default connect(mapStateToProps, {setCoordinate}) (YandexMap);


