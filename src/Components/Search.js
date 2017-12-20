import React, { Component } from 'react';
import {search} from '../Actions/Actions';
import {Form, FormGroup, Col, Button, FormControl} from 'react-bootstrap';

export const Search = () => {
    const onSubmit = (e) => {
        e.preventDefault();
        if(this.isbnSearch.value) {
            console.log(this.isbnSearch.value);
            search();
        }
    } 
    return (
        <Form horizontal onSubmit={onSubmit}>
            <FormGroup controlId="formHorizontalPassword">
                <Col smOffset={4} sm={4}>
                    <FormControl type="text" placeholder="Text ISBN" autoComplete="none" inputRef={ref => { this.isbnSearch = ref }}/>
                </Col>
            </FormGroup>
            <FormGroup>
                <Col smOffset={4} sm={4}>
                    <Button type="submit" className="btnSubmit">
                        SearchItunes
                    </Button>
                </Col>
            </FormGroup>
        </Form>
    );
}