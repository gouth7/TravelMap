import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import ReactDOM from 'react-dom'
import {Modal} from './Modal.js'
import '../node_modules/react-modal-video/scss/modal-video.scss';

export class MapContainer extends Component {

  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
    modalState: false,
    videoId: null,
  };

  onClose = () => this.setState({modalState: false});

  onMarkerClick = (props) =>
    this.setState({
      modalState: true,
      videoId: props.video
  });

  onRightClick = (props, marker, e) => console.log('sdflj')
    // this.setState({
    //   selectedPlace: props,
    //   activeMarker: marker,
    //   showingInfoWindow: true,
    // });


  onMapClicked = (props) =>
  {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null,
        modalState: false
      })
    }
  };

  render() {
    return (
      <div>
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
                onMouseover={this.onRightClick}
                name={'Mountains FB 18'}
                position={{lat: 36.6212, lng: -81.4845}} //greyson highlands
                video={'Vk_-KmWtbBE'}

         />
         <Marker onClick={this.onMarkerClick}
                 onMouseover={this.onRightClick}
                 name={'Okeechobee SB 18'}
                 position={{lat: 27.2439, lng: -80.8298}} //okee
                 video={'w_pREDw12uE'}
          />
        <Marker onClick={this.onMarkerClick}
                onMouseover={this.onRightClick}
                name={'Singapore Summer 18'}
                position={{lat: 1.3521, lng: 103.8198}} //Singapore
                video={'mn820dv6bv0'}
         />
         <Marker onClick={this.onMarkerClick}
                 onMouseover={this.onRightClick}
                 name={'Singapore Summer 18'}
                 position={{lat: 35.7688, lng: -78.6619}} //Dorthea Dix
                 video={'sejVTQPwHnM'}
          />
          <Marker onClick={this.onMarkerClick}
                  onMouseover={this.onRightClick}
                  name={'NYC Dec 17'}
                  position={{lat: 40.7128, lng: -74.0060}} //NYC
                  video={'URCZsdvXF2s'}
           />

         <InfoWindow
           marker={this.state.activeMarker}
           visible={this.state.showingInfoWindow}>
             <div>
               <h1>{this.state.selectedPlace.name}</h1>
             </div>
         </InfoWindow>
      </Map>
      <Modal videoId={this.state.videoId} onClose={this.onClose} isOpen={this.state.modalState}/>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCnY73kvyiQLtQwpli9k2GgD-G0dlAe8N0'
})(MapContainer)
