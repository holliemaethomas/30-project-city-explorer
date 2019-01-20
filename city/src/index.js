import React from 'react';
import ReactDOM from 'react-dom';

import App from './App.js';
// import * as serviceWorker from "./serviceWorker";

class Main extends React.Component {
  render () {
    return <App />;
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<Main />, rootElement);

// serviceWorker.unregister();
