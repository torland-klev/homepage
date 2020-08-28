import React, { Component } from 'react';
import Banner from '../../images/placeholder-image.jpg';
import './SiteImage.css';

export default class SiteImage extends Component {

  render(){
    return(
      <div className="SiteImage">
        <img src={this.props.src} alt="Site Banner"/>
        <div className="center-text">
          {this.props.text}
        </div>
      </div>
    );
  }

}
