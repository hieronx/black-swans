import React, { PureComponent } from 'react';
import './App.css';

import Swan from './Swan'

const BLACK_SWAN_OCCURRENCE_RATIO = 0.001 // 1 out of 1000 swans are black

const MIN_TIME_TRAVEL_DELAY = 5 // 10 ms delay at the least

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

class App extends PureComponent {

  state = {
    swans: [],
    currentZIndex: 5,
    currentTimeTravelTimeout: 200,
    hasFoundBlackSwan: false
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyboardEvents, false)
  }

  handleKeyboardEvents = (event) => {
    if (event.keyCode === 32) {
      // Space bar
      this.spawnNewSwan()
    } else if (event.keyCode === 13) {
      // ENTER
      this.timeTravel()
    }
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

    this.setState(prevState => ({
      swans: [...prevState.swans, newSwan],
      currentZIndex: prevState.currentZIndex + 1,
      hasFoundBlackSwan: swanType === 'black'
    }))
  }

  timeTravel = () => {
    if (!this.state.hasFoundBlackSwan) {
      this.spawnNewSwan()
      setTimeout(() => {
        // Start by spawning every second, and slowly decrease the timeout, until it spawns 20 swans per second
        if (this.state.currentTimeTravelTimeout > MIN_TIME_TRAVEL_DELAY) this.setState({ currentTimeTravelTimeout: this.state.currentTimeTravelTimeout - 10 })

        this.timeTravel()
      }, this.state.currentTimeTravelTimeout)
    }
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
