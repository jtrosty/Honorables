import React from 'react'
import { GoogleMap, withScriptjs, withGoogleMap } from 'react-google-maps'

function Map() {
  return <GoogleMap defaultZoom={10} defaulCenter={{ lat: 29, lng: 82 }} />
}

const WrappedMap = withScriptjs(withGoogleMap(Map))
/*const map = new google.maps.Map(document.getElementById('map'), {
  center: { lat: -34.397, lng: 150.644 },
  zoom: 8,
  mapId: 'MAP_ID',
})*/
export default function MapComp() {
  return (
    <div style={{ width: '50vw', height: '50vh' }}>
      <WrappedMap
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places`}
        loadingElement={<div style={{ height: '100%' }} />}
        containerElement={<div style={{ height: '100%' }} />}
        mapElement={<div style={{ height: '100%' }} />}
      />
    </div>
  )
}
