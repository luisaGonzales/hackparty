import React, { Component } from 'react';
import {Col, Row} from 'react-bootstrap'

export const Book = ({}) => {
    const mybook = {
        name: 'My book',
        img: 'http://is2.mzstatic.com/image/thumb/Publication18/v4/db/3a/18/db3a1818-f034-a7fd-85be-170bf8707143/source/100x100bb.jpg',
        price: 9.99,
        author: 'invent',
        link: 'http://www.facebook.com'
    }
    return (
        <Row>
            <Col mdOffset={2} md={4}>
                <Col md={4}>
                    <img className='img-book' src={mybook.img}/>
                </Col> 
                <Col md={8}>
                    <p className='text--book'><b>Nombre: </b>{mybook.name}</p>
                    <p className='text--book'><b>Precio: </b>{mybook.price}</p>
                    <p className='text--book'><b>Autor: </b>{mybook.author}</p>
                    <a className='btn btn-book' href={mybook.name}>Compralo Aquí</a>
                </Col>
            </Col>
            <Col md={4}>
                <Col md={4}>
                    <img className='img-book' src={mybook.img}/>
                </Col> 
                <Col md={8}>
                    <p className='text--book'><b>Nombre: </b>{mybook.name}</p>
                    <p className='text--book'><b>Precio: </b>{mybook.price}</p>
                    <p className='text--book'><b>Autor: </b>{mybook.author}</p>
                    <a className='btn btn-book' href={mybook.name}>Compralo Aquí</a>
                </Col>
            
            </Col>
             
        </Row>
    )
}