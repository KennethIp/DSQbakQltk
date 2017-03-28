import React, { Component } from 'react';
import Timer from './components/Timer';
import logo from './star.svg';
import './App.css';
import { Button } from 'react-bootstrap';
import Client from './Client';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      textMessage: "Hello, ZZZZZ!",
      count: 1,
      name: "ZZZZZ",
    }
  }

  handleNameChange = (e) => {
    const value = e.target.value;
    this.setState({ name: value });
  }

  onClickButton = () =>
  {
    const value = this.state.name;
    Client.search(value, (content) => {
        this.setState({
          textMessage: content.content,
        });
      });

  }

  render() {

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to HKBBAC</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Timer />
        <p className="App-intro">
          <input
              type='text'
              placeholder='Your name'
              value={this.state.name}
              onChange={this.handleNameChange}
            />
          <Button onClick={this.onClickButton}>Call API</Button>
        </p>
        <div>
          {this.state.textMessage}
        </div>
      </div>
    );
  }
}

export default App;
