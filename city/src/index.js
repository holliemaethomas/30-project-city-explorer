import React from 'react';
import ReactDOM from 'react-dom';

function Main() {
  return <App />;
}

const rootElement = document.getElementById('rootElement');
ReactDOM.render( <Main />, rootElement);
