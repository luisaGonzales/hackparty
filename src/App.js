import React, { Component } from 'react';
import './App.css';
import {connect} from 'redux-zero/react';
import {Search} from './Components/Search';
import {Book} from './Components/Book';
import {Form} from './Components/Form';

const App = ({title, itunes}) => {
  return(
    <div>
      <h1>{title}</h1>
      <Search />
      {
        itunes !=null && 
        <Book title={itunes.title} price={itunes.price} />
      }
    </div>
  );
}

const mapToProps = ({title, itunes}) => ({title, itunes});
export default connect (mapToProps)(App);
