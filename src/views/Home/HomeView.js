import React, { Component } from 'react';
import './HomeView.css';
import { MAIN_COLOR } from '../../config';
import {CVView, AboutView, ContactView} from '../';

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
        <div className="GridItem" onClick={() => window.location.href = "/logic"} style={{backgroundColor: MAIN_COLOR}}>&lt;logic_and_computer_science&gt;</div>
        <div className="GridItem" onClick={() => window.location.href = "/code"} style={{backgroundColor: MAIN_COLOR}}>&lt;interesting_code&gt;</div>
        <div className="GridItem" onClick={() => window.location.href = "/chess"} style={{backgroundColor: MAIN_COLOR}}>&lt;simple_chess&gt;</div>
        <div className="GridItem" onClick={() => window.location.href = "/podcast"} style={{backgroundColor: MAIN_COLOR}}>&lt;podcast&gt;</div>
        <div className="GridItem" onClick={() => window.location.href = "/activity"} style={{backgroundColor: MAIN_COLOR}}>&lt;activity&gt;</div>
      </div>
    );
  }
}
