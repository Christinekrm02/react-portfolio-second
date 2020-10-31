import { RFC_2822 } from 'moment';
import React, { Component } from 'react';

export default function(props) {
    return(
        <div>
            <h2>Portfolio Detail for {props.match.params.slug}</h2>
        </div>
    );
    
};
