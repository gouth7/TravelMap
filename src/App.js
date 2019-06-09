import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
//import ReactDOM from 'react-dom'
import {Modal} from './Modal.js'
import {LightboxExample} from './Lightbox.js'
import '../node_modules/react-modal-video/scss/modal-video.scss';
// Be sure to include styles at some point, probably during your bootstraping




export class MapContainer extends Component {

  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
    modalState: false,
    videoId: null,
    pictureOpen: false,
    photoIndex: 0,
    photoMax: 6,
    photoStart: 0,
  };

  onClose = () => this.setState({modalState: false});
  pictureClose = () => this.setState({pictureOpen: false});

  lightboxPrevPic = (props) => {
    this.setState({
      photoIndex: ((this.state.photoIndex+this.state.photoMax-1) % this.state.photoMax)
    });
}
  lightboxNextPic = (props) =>
      this.setState({
        photoIndex: ((this.state.photoIndex+1) % this.state.photoMax)
    });

  onMarkerClick = (props) =>
    this.setState({
      modalState: true,
      videoId: props.video
  });

  onPictureClick = (props) =>
    this.setState({
      pictureOpen:  true,
      photoIndex: props.photoIndex,
      photoMax: props.photoMax,
      photoStart: props.photoStart,
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
        zoom={5}
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
        <Marker onClick={this.onPictureClick}
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
           <Marker onClick={this.onPictureClick}
                   onMouseover={this.onRightClick}
                   name={'Chicago May 16'}
                   position={{lat: 41.8781, lng: -87.6298}} //Chicago
                   video={'URCZsdvXF2s'}
                   photoIndex={0}
                   photoMax={4}
                   photoStart={0}
            />
            <Marker onClick={this.onPictureClick}
                    onMouseover={this.onRightClick}
                    name={'Firefly Music Festival June 17'}
                    position={{lat: 39.1899, lng: -75.5307}} //Firefly
                    video={'URCZsdvXF2s'}
                    photoIndex={0}
                    photoMax={2}
                    photoStart={4}
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
      <LightboxExample lightboxNextPic={this.lightboxNextPic} lightboxPrevPic={this.lightboxPrevPic} photoStart={this.state.photoStart} photoIndex={this.state.photoIndex} photoMax={this.state.photoMax} isOpen={this.state.pictureOpen} onCloseRequest={this.pictureClose}/>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCnY73kvyiQLtQwpli9k2GgD-G0dlAe8N0'
})(MapContainer)
