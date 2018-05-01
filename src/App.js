import React, { Component } from 'react';

import PageOne from './components/page-one';
import PageTwo from './components/page-two';
import PageThree from './components/page-three';
import PageFour from './components/page-four';

import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = { position: 0, width: window.innerHeight }
  }

  componentDidMount(){
  window.addEventListener('scroll', () => {
      this.setState({ position: window.scrollY })
    })
  }
  render() {
    return (
      <div className="App">
        <PageOne position={this.state.position}/>
        <PageTwo position={this.state.position}/>
        <PageThree position={this.state.position}/>
        <PageFour/>
      </div>
    );
  }
}

export default App;
