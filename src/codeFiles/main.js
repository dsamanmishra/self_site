//set some type of token for confirmation page as well so that user can open it infinite times

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Typing, { Backspace, Delay, Reset, Speed } from 'react-typing-animation';
import collage from '../images/collage3.png';
import mic from '../images/mic.png';
import scuba from '../images/scuba_image.JPG';
import without_background from '../images/crop_full_without_background.png';

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
      <FirstArea />
      <SecondArea />
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
          <a href="#news">Know Me A Little</a>
          <a href="#contact">What I Do</a>
          <a href="#home" className="active">Home</a>
          <a href="#search">What Makes Me Different</a>
          <a href="#about">Things I Write</a>
        </div>
    </div>);
  }

  navigationClick(){
    var x = document.getElementById("myTopnav");
    /*
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
    */
  }
}


class FirstArea extends Component {

  constructor(props) {
  	super(props);
  }

  componentDidMount(){
  		
  }


  render() {
  	return (<div className="self-intro-div">
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


class SecondArea extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount(){
      
  }


  render() {
    return (<div className="what-i-do-div">
      <div className="col-sm-12 col-xs-12 main-div-title">
        What I Do
      </div>
      <div className="col-sm-12 col-xs-12">
        <div className="col-sm-3 col-xs-12 what-i-do-box">
          <span className="what-i-do-box-title">
            I Build Things
          </span>
          <span className="what-i-do-box-text">
            I am a Serial Entrepreneur who has built multiple startups since my college days. Currently, am building HighApe - India's biggest experience discovery platform.
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
            I write poems, tech articles, motivational posts, op-eds and more on different online websites, Medium & LinkedIn.
          </span>
        </div>
        <div className="col-sm-3 col-xs-12 what-i-do-box">
          <span className="what-i-do-box-title">
            I Teach
          </span>
          <span className="what-i-do-box-text">
            I have always believed that teaching is the best way to give back to the society. There is no power greater than the power of Knowledge. Currently, I do my best to teach Coding to as many school kids as possible from around the world.
          </span>
        </div>
      </div>
    </div>);
  }
}





class ClearBoxText extends Component {

  render() {
    return (<div></div>);
  }

}


export default FullDesign;