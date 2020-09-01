import React, { Component } from 'react';
import {BrowserRouter, Route } from 'react-router-dom';
import './App.css'
import { APP_NAME, BANNER_TEXT } from '../../config';
import { Banner, Footer } from '../';
import SiteImage from '../siteimage/SiteImage';
import { HomeView, ContactView, AboutView, CVView, LogicView, VideoView } from '../../views';
import BannerImg from '../../images/banner.png';
import Chess from '../../chess';

export default class App extends Component {
  render(){
    return (
      <div className="Container">
        <SiteImage src={BannerImg} />
        <Banner text={BANNER_TEXT} buttons={["About Me", "CV", "Contact"]} onClick={["/me", "/cv", "/contact"]}/>
        <BrowserRouter>
          <div className="Body">
            <Route exact path='/' component={HomeView} />
            <Route exact path='/cv' component={CVView} />
            <Route exact path='/me' component={AboutView} />
            <Route exact path='/contact' component={ContactView} />

            <Route exact path='/logic' component={LogicView} />
            <Route exact path='/code' component={CVView} />
            <Route exact path='/chess' component={Chess} />
            <Route exact path='/podcast' component={ContactView} />
            <Route exact path='/activity' component={ContactView} />
            <Route exact path='/video_tutorial' component={VideoView} />
          </div>
        </BrowserRouter>
        <Footer />
      </div>
    );
  }
}
