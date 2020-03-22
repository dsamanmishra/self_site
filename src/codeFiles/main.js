//set some type of token for confirmation page as well so that user can open it infinite times

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Typing, { Backspace, Delay, Reset, Speed } from 'react-typing-animation';
//import collage from '../images/collage3.png';
//import mic from '../images/mic.png';
//import scuba from '../images/scuba_image.JPG';
import without_background from '../images/crop_full_without_background.png';
import menu from '../images/menu.png';

import react from '../images/react.png';
import nih from '../images/nih.jpeg';
import girl from '../images/girl.jpg';
import shaka from '../images/shaka.jpeg';

import facebook from '../images/facebook.png';
import linkedin from '../images/linkedin.png';
import github from '../images/github.png';
import medium from '../images/medium.png';
//https://colorlib.com/wp/template/me/
//https://colorlib.com/wp/cat/personal/


class FullDesign extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount(){
      
  }


  render() {
    return (<div>
      <Menu />
      <ImgAndAnimation />
      <WhatIDo />
      <ThingsIWrite />
      <GetInTouch />
      <CopyrightDiv />
    </div>);
  }


}


class Menu extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount(){
      
  }


  render() {
    return (
      <div>
        <div className="topnav">
          <div id="navlinks" className="navlinks">
            <a href="#knowmelittle">Know Me A Little</a>
            <a href="#whatido">What I Do</a>
            <a href="/" className="active">Me</a>
            <a href="#thingsiwrite">Things I Write</a>
            <a href="#getintouch">Get In Touch</a>
          </div>
          <img src={menu} className="menu-icon" onClick={this.navigationClick}/>
        </div>
    </div>);
  }
//<a href="javascript:void(0);" className="icon" onclick="navigationClick">
  navigationClick(){
    var x = document.getElementById("navlinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
}


class ImgAndAnimation extends Component {

  constructor(props) {
  	super(props);
  }

  componentDidMount(){
  		
  }


  render() {
  	return (<div id="knowmelittle" className="self-intro-div">
  		<div className="col-sm-6 col-xs-12 animated-text">
        <h1 className="hello-text" align="center">
          Hey There, I'm D S Aman
        </h1>
        <div class="break"></div>
        <h2 className="changing-text">
    			<TypingAnimation />
        </h2>
  		</div>
      <div className="col-sm-5 col-xs-12 image-div">
        <ImageDiv />
      </div>
      <div className="clearfix"></div>
  	</div>);
  }
}


class ImageDiv extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount(){
      
  }


  render() {
    return (
      <div>
        <img src={without_background} className="collage-image"/>
    </div>);
  }
}
// <img src={mic} className="mic-image"/>
// <img src={collage} className="collage-image"/>

class TypingAnimation extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount(){
      
  }


  render() {
    return (<Typing className="animated-words">
    <div>
      An Entrepreneuer
      <Backspace count={16} delay={750} />
      <Typing.Delay ms={500} />
      A Coder
      <Backspace count={7} delay={750} />
      <Typing.Delay ms={500} />
      A Blogger
      <Backspace count={9} delay={750} />
      <Typing.Delay ms={500} />
      A Teacher
    </div>
    </Typing>);
  }
}


class WhatIDo extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount(){
      
  }


  render() {
    return (<div id="whatido" className="row what-i-do-div">
      <div className="col-sm-12 col-xs-12 main-div-title">
        What I Do
      </div>
      <div className="col-sm-10 col-sm-offset-1 col-xs-12 what-i-do-main-div">
        <div className="col-sm-3 col-xs-12 what-i-do-box">
          <span className="what-i-do-box-title">
            I Build Things
          </span>
          <span className="what-i-do-box-text">
            I started freelancing from 1st year of my college, and got into building startups by 2nd year. Since then, I have founded 5 startups. Currently, am building HighApe - India's biggest experience discovery platform.
          </span>
        </div>
        <div className="col-sm-3 col-xs-12 what-i-do-box">
          <span className="what-i-do-box-title">
            I Code Like Crazy
          </span>
          <span className="what-i-do-box-text">
            I was fascinated with playing computer games in my childhood, a fascination which later transitioned into me building games instead of playing one. Today, I have worked on multiple languages, frameworks, databases.
          </span>
        </div>
        <div className="col-sm-3 col-xs-12 what-i-do-box">
          <span className="what-i-do-box-title">
            I Like To Write
          </span>
          <span className="what-i-do-box-text">
            I write poems, tech articles, motivational posts, op-eds and more on different online websites, Medium & LinkedIn. Also, I love hearing feedbacks which can help me improve my skills. So, do reach out if you have any.
          </span>
        </div>
        <div className="col-sm-3 col-xs-12 what-i-do-box">
          <span className="what-i-do-box-title">
            I Teach
          </span>
          <span className="what-i-do-box-text">
            I have always believed that teaching is the best way to give back to the society. There is no power greater than the power of Knowledge. Currently, I do my best to teach Coding to school kids from around the world.
          </span>
        </div>
      </div>
    </div>);
  }
}



class ThingsIWrite extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount(){
      
  }


  render() {
    return (<div id="thingsiwrite" className="row things-i-write-div">
      <div className="col-sm-12 col-xs-12 main-div-title">
        Things I Write
      </div>
      <div className="blogs-main-div">
        <div className="col-sm-12 col-xs-12 medium-blogs">
          <a href="https://medium.com/highape-tech/what-if-reactjs-component-methods-were-hindu-gods-60abf3b4e911" target="_blank">
            <div className="blog-area-width col-sm-offset-1 col-xs-12 blog-show-div">
              <div className="col-sm-4 col-xs-4 blog-img-div">
                <img src={react} className="blog-img" />
              </div>
              <div className="col-sm-8 col-xs-8 blog-text">
                <div className="col-sm-12 col-xs-12 blog-title">
                  What if ReactJS component methods were Hindu Gods?
                </div>
                <div className="col-sm-12 col-xs-12 blog-desc">
                  I compared them with … wait for it … Hindu mythological Gods — The Trimurti. Yes, you read that right! As crazy that might sound, it helped me immensely to get an initutive understanding of React Component lifecycle methods.....
                </div>
              </div>
            </div>
          </a>
          <div className="col-sm-1"></div>
          <a href="https://medium.com/highape-tech/nih-syndrome-in-indian-tech-startups-will-it-ever-be-cured-c799b4bb90b2" target="_blank">
            <div className="blog-area-width col-xs-12 blog-show-div">
              <div className="col-sm-4 col-xs-4 blog-img-div">
                <img src={nih} className="blog-img" />
              </div>
              <div className="col-sm-8 col-xs-8 blog-text">
                <div className="col-sm-12 col-xs-12 blog-title">
                  NIH Syndrome in Indian Tech Startups: Will it ever be cured?
                </div>
                <div className="col-sm-12 col-xs-12 blog-desc">
                  In midst of all the good things happening in the Indian tech startup landscape, there is one thing that pinches me the most: The NIH syndrome, which I find very prevalent in Indian tech startups and developers.....
                </div>
              </div>
            </div>
          </a>
          <div className="clearfix"></div>
          <div className="col-sm-11 col-xs-12 blog-footer-read-more">
            <a href="https://medium.com/@dsaman" target="_blank">Read More on Medium</a>
          </div>
        </div>
        <div className="col-sm-12 col-xs-12 linkedin-blogs">
          <a href="https://www.linkedin.com/posts/dsamanmishra_mythoughts-entrepreneur-writer-activity-6637943219202162688-ah8p" target="_blank">
            <div className="blog-area-width col-sm-offset-1 col-xs-12 blog-show-div">
              <div className="col-sm-4 col-xs-4 blog-img-div">
                <img src={shaka} className="blog-img" />
              </div>
              <div className="col-sm-8 col-xs-8 blog-text">
                <div className="col-sm-12 col-xs-12 blog-title">
                  Curiosity: Most Important Ingredient Of Success Recipe
                </div>
                <div className="col-sm-12 col-xs-12 blog-desc">
                  We owe our advancements to those curious ancestors who dared to cross the ocean, who gathered the courage to control fire and who took any chance of finding out something new.....
                </div>
              </div>
            </div>
          </a>
          <div className="col-sm-1"></div>
          <a href="https://www.linkedin.com/posts/dsamanmishra_entrepreneur-mythoughts-startups-activity-6628529863714275329-UNR4" target="_blank">
            <div className="blog-area-width col-xs-12 blog-show-div">
              <div className="col-sm-4 col-xs-4 blog-img-div">
                <img src={girl} className="blog-img" />
              </div>
              <div className="col-sm-8 col-xs-8 blog-text">
                <div className="col-sm-12 col-xs-12 blog-title">
                  A Date With An Angelic Girl - Story Of A Missed Opportunity
                </div>
                <div className="col-sm-12 col-xs-12 blog-desc">
                  I could have had a date with this girl. She could have become my girlfriend. She may even have become my future wife. But only if I could have the courage to talk to her today.....
                </div>
              </div>
            </div>
          </a>
          <div className="clearfix"></div>
          <div className="col-sm-11 col-xs-12 blog-footer-read-more">
            <a href="https://www.linkedin.com/in/dsamanmishra/detail/recent-activity/shares/" target="_blank">Read More on LinkedIn</a>
          </div>
        </div>
      </div>
    </div>);
  }
}




class GetInTouch extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount(){
      
  }


  render() {
    return (<div id="getintouch" className="row get-in-touch-div">
      <div className="col-sm-12 col-xs-12 main-div-title">
        Get In Touch
      </div>
      <div className="col-sm-8 col-sm-offset-2 col-xs-12 social-icons-main-div">
        <div className="col-sm-3 col-xs-3 social-icon-div">
          <a href="https://www.facebook.com/dsamanmishra" target="_blank">
            <img src={facebook} className="social-media-icon" />
          </a>
        </div>
        <div className="col-sm-3 col-xs-3 social-icon-div">
          <a href="https://www.linkedin.com/in/dsamanmishra/" target="_blank">
            <img src={linkedin} className="social-media-icon" />
          </a>
        </div>
        <div className="col-sm-3 col-xs-3 social-icon-div">
          <a href="https://medium.com/@dsaman" target="_blank">
            <img src={medium} className="social-media-icon" />
          </a>
        </div>
        <div className="col-sm-3 col-xs-3 social-icon-div">
          <a href="https://github.com/dsamanmishra" target="_blank">
            <img src={github} className="social-media-icon" />
          </a>
        </div>
      </div>
    </div>);
  }
}


class CopyrightDiv extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount(){
  }


  render() {
    return (<div className="row copyright-div">
      <div className="col-sm-12 col-xs-12 footer-text">
        © 2020 | Made with Self Love For D S Aman :)
      </div>
    </div>);
  }
}




export default FullDesign;