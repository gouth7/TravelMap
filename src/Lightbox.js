import React, { Component } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; // This only needs to be imported once in your app

const images = [
  require('./pics/chicago1.jpg'),
  require('./pics/chicago2.jpg'),
  require('./pics/chicago3.jpg'),
  require('./pics/chicago4.jpg'),
  require('./pics/firefly1.jpg'),
  require('./pics/firefly2.jpg'),
];

//export default class LightboxExample extends Component {
export class LightboxExample extends Component {
  constructor(props) {
    super(props);
   this.state = {
     };
  }

  render() {
    return (
      <div>
        {this.props.isOpen &&
        (<Lightbox
            mainSrc={images[this.props.photoStart + this.props.photoIndex]}
            nextSrc={images[(this.props.photoIndex)]}// + 3) % this.props.photoMax]}
            prevSrc={images[(this.props.photoIndex)]}// + this.props.photoMax - 1) % this.props.photoMax]}
            onCloseRequest={this.props.onCloseRequest}
            onMovePrevRequest={this.props.lightboxPrevPic}
            onMoveNextRequest={this.props.lightboxNextPic}

            clickOutsideToClose={true}
          />
        )}
      </div>
    );
  }
}
