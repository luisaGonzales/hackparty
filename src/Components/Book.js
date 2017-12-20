import React, { Component } from 'react';

export const Book = ({title, price}) => {
    return (
        <div>
            {title}
            {price}
        </div>
    )
}