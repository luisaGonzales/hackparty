import React, { Component } from 'react';
// import {saveIsbn} from '../Actions/Actions';
import {Form, FormGroup, Col, Button, FormControl} from 'react-bootstrap';

export const Search = () => {
    const onSubmit = (e) => {
        e.preventDefault();
        // if(this.isbnSearch.value) {
        //     console.log(this.isbnSearch.value);
        //     saveIsbn(this.isbnSearch.value);
        // }
    } 
    return (
        <Form horizontal onSubmit={onSubmit}>

            <FormGroup controlId="formHorizontalPassword">
                <Col mdOffset={4} md={4}>
                    <FormControl type="text" placeholder="Text ISBN" autoComplete="none" inputRef={ref => { this.isbnSearch = ref }}/>
                </Col>
                <Col md={4}>
                    <Button type="submit" className="btnSubmit">
                        SearchItunes
                    </Button>
                </Col>
            </FormGroup>
            <br/><br/>
        </Form>
    );
}