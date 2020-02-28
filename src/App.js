import React from 'react';
import logo from './logo.svg';
import './App.css';


export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          darkmode: true
        }
        this.changemode = this.changemode.bind(this);
      }

    changemode() {
        if (this.state.darkmode) {
            this.setState({darkmode: false})
        } else {
            this.setState({darkmode: true})
        }
    }

render() {
    let mode = null;
    let lights = null;
    if (this.state.darkmode){
      mode = 'darkmode';
      lights = 'Lights off!';
    } else {
      mode = 'lightmode';
      lights = 'Lights on!';
    }
  return (
    <div className={mode} >       
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <label className="switch">
        <input type="checkbox" onClick={this.changemode}></input>
        <span className="slider round" ></span>
        </label>
        <p>{lights}</p>
      </header>
    </div>
  );
}
}


