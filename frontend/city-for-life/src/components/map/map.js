import React from "react";
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import { YMaps, Map } from 'react-yandex-maps';

const useStyles = makeStyles((theme) => ({
   mapContainer: {
      paddingTop: theme.spacing(6)
   },
   map: {
      width: 1200, 
      height: 600
   }
 }));


const mapData = {
center: [61.78, 34.35],
   zoom: 13
};


const apikey = 'b96f32c7-b745-4db2-976d-22fb3e1211c0';

const Maps = () => {
   const classes = useStyles();
   return (
      <Container component="main" maxWidth="lg" className={classes.mapContainer}>
         <YMaps query={{
               apikey
         }}>
            <div>
            <Map  className={classes.map} defaultState={mapData}/>
            </div>
         </YMaps>
      </Container>
   )

}

export default Maps;


