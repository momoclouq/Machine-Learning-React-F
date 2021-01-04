import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

//css for carousel
import "slick-carousel/slick/slick.css";
import 'slick-carousel/slick/slick-theme.css';

//css for bulma
import 'bulma/css/bulma.css'

//index.js is only to call App component

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

