//set some type of token for confirmation page as well so that user can open it infinite times

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Typing, { Backspace, Delay, Reset, Speed } from 'react-typing-animation';
import collage from '../images/collage3.png';


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
        <div className="topnav" id="myTopnav">
          <a href="#home" className="active">Home</a>
          <a href="#news">News</a>
          <a href="#contact">Contact</a>
          <a href="#about">About</a>
          <a className="icon" onclick={this.myFunction()}>
            <i className="fa fa-bars"></i>
          </a>
        </div>
    </div>);
  }

  navigationClick(){
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
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
      <div className="col-sm-7 col-xs-12 image-div">
        <ImageDiv />
      </div>
  		<div className="col-sm-5 col-xs-12 animated-text">
        <h1 className="hello-text">
          Hello, I am D S Aman
        </h1>
        <div class="break"></div>
        <h2 className="changing-text">
          <span>I am an </span>
    			<TypingAnimation />
        </h2>
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


class TypingAnimation extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount(){
      
  }


  render() {
    return (<Typing>
    <div>
      Entrepreneuer
      <Backspace count={13} delay={750} />
      <Typing.Delay ms={500} />
      Coder
      <Backspace count={5} delay={750} />
      <Typing.Delay ms={500} />
      Teacher
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