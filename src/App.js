import React, { Component } from 'react';
import './App.css';

import Swan from './Swan'

const BLACK_SWAN_OCCURRENCE_RATIO = 0.1 // 1 out of 1000 swans are black
const SWAN_IMAGE_WIDTH = 100
const SWAN_IMAGE_HEIGHT = 60

function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}

class App extends Component {

  state = {
    swans: [],
    currentZIndex: 5
  }
  
  spawnNewSwan = () => {
    const swanType = Math.random() <= BLACK_SWAN_OCCURRENCE_RATIO ? 'black' : 'white'

    const screenWidth = window.innerWidth
    const screenHeight = window.innerHeight

    const randomPositionTop = Math.floor(Math.random() * (screenHeight - SWAN_IMAGE_HEIGHT))
    const randomPositionLeft = Math.floor(Math.random() * (screenWidth - SWAN_IMAGE_WIDTH))

    const newSwan = {
      id: guid(),
      type: swanType,
      top: randomPositionTop,
      left: randomPositionLeft,
      zIndex: this.state.currentZIndex
    }

    console.log(newSwan)

    this.setState(prevState => ({
      swans: [...prevState.swans, newSwan],
      currentZIndex: prevState.currentZIndex + 1
    }))
  }

  render() {
    return (
      <div className="App" onClick={() => this.spawnNewSwan()}>
        {this.state.swans.map((swan) =>
          <Swan key={swan.id} {...swan} />
        )}
      </div>
    )
  }
}

export default App;
