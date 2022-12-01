import React from 'react'
import '../Map/Map.css'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

const MapWithMarkers = ({ data }) => {
  
  return (
    <MapContainer className='h-30 w-30' center={[33.4483771, -112.07403]} zoom={9} scrollWheelZoom={false}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  {data.map(data => (

  <Marker
  key={data.id} position={[data.latitude, data.longitude]}>
    <Popup>{data.name}</Popup>
    
  </Marker>

  ))}
</MapContainer>
  )
}

export default MapWithMarkers