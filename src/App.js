import React, { Component } from 'react';
import './App.css';
import {connect} from 'redux-zero/react';
import {Search} from './Components/Search';

const App = ({title}) => {
  return(
    <div>
      <h1>{title}</h1>
      <Search />
    </div>
  );
}

const mapToProps = ({title}) => ({title});
export default connect (mapToProps)(App);
