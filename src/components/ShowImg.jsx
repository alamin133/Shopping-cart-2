import React from 'react';
import classes from './ShowImg.module.css';


export default function ShowImg({img}) {
    return (
        <div className={classes.display}>
            <img className={classes.img} src={img}alt="anything"/>
            
        </div>
    )
}
