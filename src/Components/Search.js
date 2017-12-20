import React, { Component } from 'react';
import {searchItunes} from '../Actions/Actions';

export const Search = () => {
    return (
        <button
            onClick={()=>{searchItunes()}}
            >
            SearchItunes
            </button>
    );
}