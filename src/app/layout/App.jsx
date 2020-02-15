import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        React.createElement('div', {className:'app'}),
        React.createElement('h1', null, 'Re-vents')
      </div>
    );
  }

}

export default App;
