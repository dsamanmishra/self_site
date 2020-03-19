//set some type of token for confirmation page as well so that user can open it infinite times

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Typing, { Backspace, Delay, Reset, Speed } from 'react-typing-animation';
import collage from '../images/collage3.png';
import mic from '../images/mic.png';
import scuba from '../images/scuba_image.JPG';


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
  		<div className="col-sm-5 col-xs-12 animated-text">
        <h1 className="hello-text" align="center">
          Hey There, I'm D S Aman
        </h1>
        <div class="break"></div>
        <h2 className="changing-text">
    			<TypingAnimation />
        </h2>
  		</div>
      <div className="col-sm-7 col-xs-12 image-div">
        <ImageDiv />
      </div>
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
        <img src={collage} className="collage-image"/>
    </div>);
  }
}
// <img src={mic} className="mic-image"/>


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





class ClearBoxText extends Component {

  render() {
    return (<div></div>);
  }

}


export default FullDesign;