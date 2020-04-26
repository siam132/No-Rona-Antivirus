import React, { Component } from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { Chart } from 'react-chartjs-2';
import { ThemeProvider } from '@material-ui/styles';
import validate from 'validate.js';

import { chartjs } from './helpers';
import theme from './theme';
import 'react-perfect-scrollbar/dist/css/styles.css';
import './assets/scss/index.scss';
import validators from './common/validators';
import Routes from './Routes';

import * as firebase from 'firebase';

const app = firebase.initializeApp({
  apiKey: "AIzaSyD3AaaD7a6jwfw16p3LpcRoGKXnX6-osec",
  authDomain: "hack-dsc-acb6a.firebaseapp.com",
  databaseURL: "https://hack-dsc-acb6a.firebaseio.com",
  projectId: "hack-dsc-acb6a",
  storageBucket: "hack-dsc-acb6a.appspot.com",
  messagingSenderId: "569528574190",
  appId: "1:569528574190:web:c9d1fe3a096069d8b4d3ff",
  measurementId: "G-GMRH4R6BPH"
});

const browserHistory = createBrowserHistory();

Chart.helpers.extend(Chart.elements.Rectangle.prototype, {
  draw: chartjs.draw
});

validate.validators = {
  ...validate.validators,
  ...validators
};

export default class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Router history={browserHistory}>
          <Routes />
        </Router>
      </ThemeProvider>
    );
  }
}
