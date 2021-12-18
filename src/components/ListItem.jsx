import React from 'react';
import classes from './ListItem.module.css'

export default function ListItem({name}) {
    return (
        <div className={classes.list}>
        <ul className={classes.lis}>
            <li>{name}</li>
           
        </ul>
    </div>
    )
}
