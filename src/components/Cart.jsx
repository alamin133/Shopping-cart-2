import React, { useState } from 'react';
import classes from './Cart.module.css';
import img1 from '../images/1.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus,faPlus,faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import ShowImg from './ShowImg';

import img3 from '../images/3.jpg';
import img4 from '../images/4.jpg';
import img5 from '../images/5.jpg'


export default function Cart() {
    const[count,setCount]=useState(0)

    const Decrement=()=>{
        setCount(count -1)
    }
    const Increment=(e)=>{
        
        setCount(count +1)

    }
    return (
        <div className={classes.cart}>
            <div className={classes.img1}>
                <img className={classes.main} src={img1}alt="any"/>

                <div className={classes.images}>
                    <ShowImg img={img3}/>
                    <ShowImg img={img4}/>
                    <ShowImg img={img5}/>
                    <ShowImg img={img3}/>
                </div>


            </div>
            <div className={classes.text}>
                <p className={classes.title}>SNEAKER COMPANY</p>
                <h1>Fall Limited Edition Sneakers</h1>
                <p className={classes.para}>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Eum ad illum delectus. A, obcaecati deserunt placeat nam tenetur ducimus quod unde,
                     dicta dolore facere voluptatibus molestias harum eligendi vel nemo.</p>
                     <div className={classes.price}>
                         <h1 >$125</h1>
                         <h2 className={classes.price1}>50%</h2>

                     </div>
                     <del>$250</del>
                     <div className={classes.button}>
                     <FontAwesomeIcon icon={ faMinus } className={classes.minus}onClick={Decrement}/>
                     <h2 className={classes.count}>{count}</h2>
                     <FontAwesomeIcon icon={ faPlus } className={classes.plus} onClick={Increment}/>
                     <div>
                     <button className={classes.btn}><FontAwesomeIcon icon={ faShoppingCart } /> Add to cart</button>

                     </div>

                     </div>

            </div>
            
        </div>
    )
}
