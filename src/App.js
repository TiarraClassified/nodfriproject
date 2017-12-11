import React, { Component } from 'react';
import './reset.css';
import './App.css';

import PlayerState from "./PlayerState"



class App extends Component {

  render() {


    return (
      
      <div>
        <div className="head">
          <h6>Metropolitan</h6> 
            <h5>Deathmatch</h5>
        </div>
        <div>
          <PlayerState />
        </div>
      </div>
    );
  }
}

export default App;
