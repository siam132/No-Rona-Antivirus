
import React from 'react'
import { Map, GoogleApiWrapper,Marker } from 'google-maps-react';

const MapContainer = (props) =>{
   console.log(props.cords)
return <div>
<Map
google={props.google}
zoom={4}
style={mapStyles}
initialCenter={{ lat: 41.5649968, lng: -70.6195525}}
className="shadow"
>

{ props.cords.map(cord=>{return<Marker position={{ lat: cord.lat, lng: cord.long}} />}) }
</Map>
</div>
}
export default GoogleApiWrapper({
    apiKey: 'AIzaSyAMJQNw5Us1lfSWaKGWQH0X-_58_JofeQQ'
  })(MapContainer);


  const mapStyles = {
    width: '80%',
    height: '60%'
  };
