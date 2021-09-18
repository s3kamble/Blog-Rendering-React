import React from 'react';
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCalendarAlt, faCopyright, faImages } from '@fortawesome/fontawesome-free-solid'
import logo from "../../logo.jpeg";
import styles from "../Footer/Footer.module.css"


function Footer(){
    
    return(
        <div className={styles.footerBar}>
            <div className={styles.logo}>
                <Link to="/">
                   <img className={styles.logoImg} src={logo} alt="Logo"></img>
                </Link>
            </div>
            <div className={styles.title}>
                <h3><FontAwesomeIcon icon={faCopyright} />Privacy Policy</h3>
            </div>
            <ul className={styles.footerlinks}>
                <li className={styles.links}>
                    <Link to="/images" className={styles.links}>   <FontAwesomeIcon icon={faImages} /> </Link>
                </li>
                <li className={styles.links}>
                    <Link to="/plan-a-trip" className={styles.links}> <FontAwesomeIcon icon={faCalendarAlt} /> </Link>
                </li>
            </ul>

            
        </div>
    )
}

export default Footer;