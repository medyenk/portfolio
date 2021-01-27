import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import NavBar from './components/NavBar';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <NavBar />
  </React.StrictMode>,
  document.getElementById('root')
);
