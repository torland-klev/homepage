import React, { Component } from 'react';
import './LogicView.css';
import { MAIN_COLOR } from '../../config';

export default class LogicView extends Component {

  render(){
    return(
      <div className="LogicView">
        <div className="GridItem" onClick={() => window.location.href = "/video_tutorial"} style={{backgroundColor: MAIN_COLOR}}>&lt;video_tutorial_to_formal_methods&gt;</div>
        <div className="GridItem" onClick={() => window.location.href = "/msc"} style={{backgroundColor: MAIN_COLOR}}>&lt;master_thesis_&_presentation&gt;</div>
        <div className="GridItem" onClick={() => window.location.href = "/articles"} style={{backgroundColor: MAIN_COLOR}}>&lt;articles_and_stuff&gt;</div>
      </div>
    );
  }
}
