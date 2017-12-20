import React, { Component } from 'react';
import './App.css';
import {connect} from 'redux-zero/react';


const App = ({title}) => {
  return(
    <h1>{title}</h1>
  );
}

const mapToProps = ({title}) => ({title});
export default connect (mapToProps)(App);
