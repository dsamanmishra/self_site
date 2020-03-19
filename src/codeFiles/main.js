//set some type of token for confirmation page as well so that user can open it infinite times

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Typing from 'react-typing-animation';


class FullDesign extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount(){
      
  }


  render() {
    return (<div>
      <FirstArea />
    </div>);
  }


}


class FirstArea extends Component {

  constructor(props) {
  	super(props);
  }

  componentDidMount(){
  		
  }


  render() {
  	return (<div>
  		<div className="col-sm-12 col-xs-12 main-div">
  			<div className="col-sm-12 col-xs-12 welcome-text">
  				<h1>Hello, I am D S Aman</h1>
  				<TypingAnimation />
  			</div>
  			<div className="col-sm-6 col-sm-offset-3 col-xs-12 input-box-div">
  				<div className="subtext-enter-code">
  					Type help to get the list of syntax
  				</div>
  			</div>
  			<div id="content_div" className="col-sm-12 col-xs-12 content-div">
  			</div>
  		</div>
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
      There will be a 1000ms delay here,
      <Typing.Delay ms={1000} />
      then this will be typed.
    </div>
    </Typing>);
  }
}



class HelpBoxText extends Component {

	render() {
		return (<div className="col-sm-8 col-sm-offset-2 col-xs-12 output-screen">
			</div>);
	}

}




class ClearBoxText extends Component {

  render() {
    return (<div></div>);
  }

}


export default FullDesign;