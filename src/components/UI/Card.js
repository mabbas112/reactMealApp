import classes from './Card.module.css'
import React from 'react'

export default function Card(props){

    return(
        <React.Fragment>
            <div className={classes.card}>{props.children}</div>
        </React.Fragment>
    );
}