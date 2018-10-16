import React, { Component } from 'react';
import ReactDOM from 'react-dom';


class App extends Component {
  render() {
    return React.createElement('div', null, `Hello ${this.props.toWhat}`);
  }
}

ReactDOM.render(
  React.createElement(Hello, {toWhat: 'World'}, null),
  document.getElementById('app')
);

export default App;