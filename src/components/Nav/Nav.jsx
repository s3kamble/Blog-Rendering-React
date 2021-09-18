import React from 'react';
import {Link} from 'react-router-dom';
import logo from "../../logo.jpeg";
import Hamburger from '../Hamburger/Hamburger';
import styles from "../Nav/Nav.module.css"

function Navigation(){
 
    return(
        <div className={styles.navBar}>
            <div className={styles.logo}>
                <Link to="/">
                   <img className={styles.logoImg} src={logo} alt="Logo"></img>
                </Link>
            </div>
            <div className={styles.title}>
                <h1>TRAVEL-O-(B)LOG</h1>
            </div>
            <ul className={styles.navlinks}>
                <li className={styles.links}>
                    <Link to="/contact" className={styles.links}>Contact</Link>       
                </li>
                <li className={styles.links}>
                    <Link to="/feedback" className={styles.links}>Feedback</Link>
                </li>
            </ul>
            <Hamburger />        
        </div>
       
    )
}

export default Navigation;