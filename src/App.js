import React from 'react'
import Map from './components/Map'
//import { GoogleMap, LoadScript } from '@react-google-maps/api'

function App() {
  return <Map />
}

export default App
/*const containerStyle = {
  width: '800px',
  height: '500px',
  position: 'absolute',
  left: '50%',
  top: '25%',
  transform: 'translate(-50%, -50%)',
}

const center = {
  lat: -3.745,
  lng: -38.523,
}

function Map() {
  return (
    <LoadScript googleMapsApiKey=''>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
        {/* Child components, such as markers, info windows, etc. }
        <></>
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(Map)*/
