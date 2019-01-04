import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

export class MapContainer extends Component {

  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
  };

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
  });


  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  };

  render() {
    return (
      <Map
        google={this.props.google}
        zoom={8}
        onClick={this.onMapClicked}
        initialCenter={{
          lat: 35.787743,
          lng: -78.64425
        }}
        >

        <Marker onClick={this.onMarkerClick}
                name={'School'}
                position={{lat: 35.787743, lng: -78.644257}}
         />

         <InfoWindow
           marker={this.state.activeMarker}
           visible={this.state.showingInfoWindow}>
             <div>
               <h1>{this.state.selectedPlace.name}</h1>
             </div>
         </InfoWindow>

      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCnY73kvyiQLtQwpli9k2GgD-G0dlAe8N0'
})(MapContainer)
