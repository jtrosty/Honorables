import React, { Component } from 'react'
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react'
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete'

const containerStyle = {
  border: '5px solid black',

  // Cant figure out why bottom bar doesnt extend to map border
  width: 'fit-content(500)',
  height: '800px',
  style: 'border:0',
  position: 'relative',
}
// Create function that sets geocoordinates from react-geocoordinate Battle of Waterloo
// {} Battle of Gettysburg

export class MapContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      address: '',
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
      mapCoors: props.mapCoordinates,
      mapCenter: {
        lat: 49.28,
        lng: -123.12,
      },
    }
    //console.log(props.mapCoordinates)
  }

  render() {
    return (
      // These will update anytime the state updates
      <div style={containerStyle}>
        <Map
          google={this.props.google}
          initialCenter={{
            lat: this.state.mapCoors[0],
            lng: this.state.mapCoors[1],
          }}
          center={{
            lat: this.state.mapCoors[0],
            lng: this.state.mapCoors[1],
          }}
        >
          <Marker
            position={{
              lat: this.state.mapCoors[0],
              lng: this.state.mapCoors[1],
            }}
          />
        </Map>
      </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: '',
})(MapContainer)

// Took out places autocomplete cause dont need?
/*handleChange = (address, mapCoordinates) => {
    this.setState({ address })
  }

  handleSelect = (address) => {
    geocodeByAddress(address)
      .then((results) => getLatLng(results[0]))
      .then((latLng) => {
        console.log('Success', latLng)
        this.setState({ address })
        this.setState({ mapCenter: latLng })
      })
      .catch((error) => console.error('Error', error))
  }

  render() {
    return (
      // These will update anytime the state updates
      <div style={containerStyle}>
        <PlacesAutocomplete
          value={this.state.address}
          onChange={this.handleChange}
          onSelect={this.handleSelect}
        >
          {({
            getInputProps,
            suggestions,
            getSuggestionItemProps,
            loading,
          }) => (
            <div>
              <input
                {...getInputProps({
                  placeholder: 'Search Places ...',
                  className: 'location-search-input',
                })}
              />
              <div className='autocomplete-dropdown-container'>
                {suggestions.map((suggestion) => {
                  const className = suggestion.active
                    ? 'suggestion-item--active'
                    : 'suggestion-item'
                  // inline style for demonstration purpose
                  const style = suggestion.active
                    ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                    : { backgroundColor: '#ffffff', cursor: 'pointer' }
                })}
              </div>
            </div>
          )}
        </PlacesAutocomplete>
        */
