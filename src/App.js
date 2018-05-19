import React, { Component } from 'react';
import { getPhones } from './data/phones';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { phones: [] };
  }

  componentDidMount() {
    getPhones()
      .then(phones => this.setState({ phones }));
  }

  render() {
    return (
      <div className="App">
      </div>
    );
  }
}

export default App;
