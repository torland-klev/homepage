import React, { Component } from 'react';
import './VideoView.scss';
import { MAIN_COLOR } from '../../config';
import ModalVideo from 'react-modal-video';
import thumbnail1 from '../../images/thumbnails/1.png';
import thumbnail2 from '../../images/thumbnails/2.png';

export default class VideoView extends Component {

  constructor(props){
    super(props);
    this.state = {
      vid: 0
    };
    this.selectVid = this.selectVid.bind(this);
  }

  selectVid (event, vid) {
    // When closed is pressed, it also clicks the div that has the modal view.
    // Therefore, it calls onClose() which calls selectVid with vid==0, then
    // onClick() calls selectVid with vid==$id. Therefore, no change is made.
    // This way you allow both closing with escape and with clicking on the
    // close-button (which is the only .type="submit").
    // This is definetly not the prettiest way, but it works.
    if (vid == 0){
      this.setState({vid: 0});
      return;
    }
    if (event.target == undefined) return;
    if (event.target.type === "submit"){
      this.setState({vid: 0});
      return;
    }
    this.setState({vid: vid})
  }

  render(){

    const videoTitles = [
      "Motivation",
      "Introduction",
      "History",
      "JML",
      "JDL"
    ]

    const videoIds = [
      'uZqFXeIjV3Q',
      'ux8GZAtCN-M',
      'bQxqIKTO2Ck'
    ]

    return(
      <div className="VideoView">
        <div className="GridItem" style={{backgroundColor: MAIN_COLOR}} onClick={(event) => this.selectVid(event, 1)}>
          <img src={thumbnail1} alt="Thumbnail Motivation"/>
          <ModalVideo channel='youtube' isOpen={this.state.vid === 1} videoId={videoIds[0]} onClose={() => this.selectVid(0,0)} />
        </div>

        <div className="GridItem" style={{backgroundColor: MAIN_COLOR}} onClick={(event) => this.selectVid(event, 2)}>
          <img src={thumbnail2} alt="Thumbnail Introduction"/>
          <ModalVideo channel='youtube' isOpen={this.state.vid === 2} videoId={videoIds[1]} onClose={() => this.selectVid(0,0)} />
        </div>

        <div className="GridItem" style={{backgroundColor: MAIN_COLOR}} onClick={(event) => this.selectVid(event, 3)}>
          <h1>{videoTitles[2]}</h1>
          <ModalVideo channel='youtube' isOpen={this.state.vid === 3} videoId={videoIds[2]} onClose={() => this.selectVid(0,0)} />
        </div>
      </div>
    );
  }
}
