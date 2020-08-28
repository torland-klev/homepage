import React, { Component } from 'react';
import './HomeView.css';
import { MAIN_COLOR } from '../../config';

export default class HomeView extends Component {
  constructor(props){
    super(props);
    this.state = {
      title: "Home",
    };
  }

  render(){
    return(
      <div className="HomeView">
        <div className="GridItem" style={{backgroundColor: MAIN_COLOR}}>&lt;something_about_logic&gt;</div>
        <div className="GridItem" style={{backgroundColor: MAIN_COLOR}}>&lt;interesting_code&gt;</div>
        <div className="GridItem" style={{backgroundColor: MAIN_COLOR}}>&lt;chess_for_noobs&gt;</div>
        <div className="GridItem" style={{backgroundColor: MAIN_COLOR}}>&lt;philosophy&gt;</div>
        <div className="GridItem" style={{backgroundColor: MAIN_COLOR}}>&lt;football&gt;</div>
      </div>
    );
  }
}
