import React from 'react';
import classes from './Navbar.module.css';
import ListItem from './ListItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import image from '../images/image.jpg'


export default function Navbar() {
    return (
        <div className={classes.nav}>
            <div className={classes.left}>
                <h1>SNEAKERS</h1>

            </div>
            <div className={classes.middle}>
              <ListItem name="Collections"/>
              <ListItem name="Men"/>
              <ListItem name="Women"/>
              <ListItem name="About"/>
              <ListItem name="Contact"/>

            </div>
            <div className={classes.right}>
                <div>
                <FontAwesomeIcon icon={ faShoppingCart }/>
                </div>
            
            <div>
            <img className={classes.img}src={image}alt="anything"/>
            </div>

            </div>
            
        </div>
    )
}
