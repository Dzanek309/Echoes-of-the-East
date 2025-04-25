import React from "react";
import styles from "./Footer.module.css"


const Footer = () => {
    return(
        <div className={styles['footer']}>
            <div className={styles['wrapper']}>
                <h2 className={styles['footer__title']}>ABOUT THIS SITE</h2>
                <a className={styles['footer__link']} href="#">Terms of use</a>
                <a className={styles['footer__link']} href="#">Privacy policy</a>
                <a className={styles['footer__link']} href="#">Cookie policy</a>
                <a className={styles['footer__link']} href="https://www.freepik.com/icon/pin_402326#fromView=search&page=1&position=1&uuid=462bc4e7-9730-492b-b1d5-25ac959f7d74" title="coffee icons">Pin
                    icon created by Alfredo Hernandez</a>
            </div>
            <div className={styles['wrapper']}>
                <h2 className={styles['footer__title']}>RELATED SITES</h2>
                <a className={styles['footer__link']} href="#">About Us</a>
                <a className={styles['footer__link']} href="#">Newsroom</a>
                <a className={styles['footer__link']} href="#">Join Us</a>
            </div>
            <div className={styles['wrapper']}>
                <h2 className={styles['footer__title']}>HELP</h2>
                <a className={styles['footer__link']} href="#">Contact us</a>
                <a className={styles['footer__link']} href="#">FAQ</a>
                <a className={styles['footer__link']} href="#">Newsletter signup</a>
            </div>
        </div>
    );
};

export default Footer;