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
    if (this.state.darkmode){
      mode = 'darkmode';
    } else {
      mode = 'lightmode';
    }

  return (
    <div className={mode} >       
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <label className="switch">
        <input type="checkbox" onClick={this.changemode}></input>
        <span className="slider round" ></span>
        </label>
      </header>
    </div>
  );
}
}


