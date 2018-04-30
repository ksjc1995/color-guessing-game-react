import React, { Component } from 'react';
import Header from './Components/Header/Header';
import classes from './App.css';
import GameView from './Components/Containers/GameView/GameView';

class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <Header />
        <GameView />
      </div>
    );
  }
}

export default App;
