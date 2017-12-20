import React, { Component } from 'react';
import './App.css';
import {connect} from 'redux-zero/react';
import {Search} from './Components/Search';
import {Book} from './Components/Book';
import {Form} from './Components/Form';
import {Row, Col} from 'react-bootstrap';
import logo from './Images/logo.png';

const Header = ({title}) => {
  return (
    <Row className='header'>  
      <Col md={3}>
        <img className='header--logo' src={logo}/>
      </Col>
      <Col mdOffset={6} md={3}>
        <h1>{title}</h1>
      </Col>
    </Row>
  )
}

const Logo = ({}) => {
  return (
    <Row className='logo'>  
      <Col mdOffset={4} md={4}>
      <img className='logo--logo' src={logo}/>
      </Col>
    </Row>
  )
}

const App = ({title, itunes}) => {
  return(
    <div>
      <Header title={title}/>
      <Logo />
      <Search />
      
        {/* // itunes !=null &&  */}
        <Book  />

    </div>
  );
}

const mapToProps = ({title, itunes}) => ({title, itunes});
export default connect (mapToProps)(App);
