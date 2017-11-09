import React, { Component } from 'react';
import logo from './logo.svg';
import style from './App.scss';
import medals from './data';

class App extends Component {
  render() {
    return (
      <div className={style.root}>
        <header className={style.header}>
          <img src={logo} className={style.logo} alt="logo" />
          <h1 className={style.title}>Welcome to React</h1>
        </header>
        <p className={style.intro}>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        {
          medals &&
          <ul>
            { medals.map(medal => <li>{medal.year}</li>) }
          </ul>
        }
      </div>
    );
  }
}

export default App;
