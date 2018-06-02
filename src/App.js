import React, { Component } from 'react';

import PageOne from './components/page-one';
import PageTwo from './components/page-two';
import PageThree from './components/page-three';
import PageFour from './components/page-four';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = { position: 0, width: window.innerWidth };
  }

  componentDidMount(){
    if(window.innerHeight < 550){
      window.addEventListener('scroll', () => {
      this.setState({ position: window.scrollY + 220})
    });
    } else {
      window.addEventListener('scroll', () => {
      this.setState({ position: window.scrollY })
    });
    }

  window.addEventListener('resize', () => {
    this.setState({width: window.innerWidth})
  });
  }
 
  remove(){
    let mobileMenu = document.querySelector('.mobile-menu');
    if (mobileMenu && mobileMenu.classList.contains('mobile-menu-show')){
      mobileMenu.classList.remove('mobile-menu-show');
    }
  }

  render() {
    return (
      <div className="App">
        <PageOne remove={this.remove} position={this.state.position} width={this.state.width}/>
        <PageTwo remove={this.remove} position={this.state.position}/>
        <PageThree remove={this.remove} position={this.state.position}/>
        <PageFour  remove={this.remove} position={this.state.position} />
      </div>
    );
  }
}

export default App;
