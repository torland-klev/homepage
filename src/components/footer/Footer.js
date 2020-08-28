import React, { Component } from 'react';
import './Footer.css';
import { ItemPair } from '../';
import PHONE_IMG from '../../images/phone.png';
import EMAIL_IMG from '../../images/email.png';
import { PHONE_NUMBER, EMAIL } from '../../config';

export default class Footer extends Component {
  constructor(props){
    super(props);
    this.state = {
      title: "Footer",
    };
  }

  render(){
    return(
      <div className="Footer">
        <ItemPair first=" " second=" "/>
        <ItemPair first=<img src={PHONE_IMG} /> second={PHONE_NUMBER} style={{minWidth: "250px"}}/>
        <ItemPair first=<img src={EMAIL_IMG} /> second={EMAIL} style={{cursor: "pointer"}} onClick={() => window.location.href = "mailto:" + EMAIL}/>
        <ItemPair first=" " second=" " style={{marginRight: "70px"}}/>
      </div>
    );
  }
}
