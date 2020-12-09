import React from "react";
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
   mapContainer: {
      paddingTop: theme.spacing(6)
   },
   map: {
      width: 1200, 
      height: 600
   }
 }));

const loadScript = (src, onLoad) => {
  const script = document.createElement("script");

  script.src = src;
  script.async = true;
  document.body.appendChild(script);
  script.onload = onLoad;
};

const init = () => {
  new window.ymaps.Map("map", {

    center: [61.78, 34.35],
    zoom: 13
  });
};

const Map = () => {
   const classes = useStyles();

   React.useEffect(() => {
    loadScript("https://api-maps.yandex.ru/2.1/?apikey=b96f32c7-b745-4db2-976d-22fb3e1211c0&lang=ru_RU", () => {
      window.ymaps.ready(init);
       });
    }, []);

  return (
    <Container component="main" maxWidth="lg" className={classes.mapContainer}>
      <div id="map" className={classes.map}/>
    </Container>
  );
}


export default Map;


