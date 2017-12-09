import React, { Component } from 'react';
import './reset.css';
import './App.css';

import PlayerState from "./PlayerState"



class App extends Component {
  constructor() {
    super()


    this.state = {
      firstPlace: '',
      search: '',
      button: 'Choose First Contender',
      secondPlace: '',
      playerNum: 1
    }
  }


  render() {
  

    return (
      <div>
        <PlayerState />
      </div>
    );
  }
}

export default App;
