import React from 'react';
import "./Location.css";
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { GoogleMap, Marker } from "react-google-maps"
import Map from "./Map";


const MyMapComponent = (props) =>
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: -34.397, lng: 150.644 }}
  >
    {props.isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} />}
  </GoogleMap>
function Location() {

    
    return (
        <div className="location-container">
            <img src="images/塔.jpg" className="image image-center image-top"/>

            <p className="location-content">
                Xi Chun tower stands on the east side of the Jinjiang River mixed in the city, the posture is majestic, like an inverted Na pen, the front of the pen pointed to the sky.
                 
                <br />Xi Chun Pagoda was first built in the twenty-eighth year of Emperor Qianlong's reign in the Qing Dynasty (1763 AD). It is a seven-story solid tower. Villagers prayed that this pagoda would bring prosperity to the city and bring out a large number of talented people. In the first year of Daoguang's reign (1821), villagers thought that the solid pagoda would hinder the generation of talented people, so they built a two-story hollow pagoda on top of the original pagoda, making it a nine-story pagoda. At that time, the tower was listed as one of the eight scenes of Enping, "Xi Chunxiao Yu". It is a pity that the old tower was abandoned in 1958. In 1986, Xi Cun Pagoda was rebuilt under the initiative of Enping villagers at home and abroad.
                
                <br />The new tower is a planar octagonal pavilion structure with nine floors and 51 meters high, covering an area of 144 square meters. Tower body multi-layer pick out the waist eaves flat seat, flat seat white stone baluster, lined with yellow walls and green tiles, bucket eaves flying arch, eaves Angle is wind chimes. There are four doors on each floor of the tower and a spiral staircase to the top floor.
                
                <br />Now, to Xi Chun Tower as the center of the newly built pagoda park, garden wide variety of different flowers, become the best place for citizens to relax.
            </p>
            
            <div className="map">
             
                <Map></Map>
                  

            </div>

        </div>
    )
}

export default Location
