import React from "react";
import styles from "./Nav.module.css";
import logo from "../assets/logo.svg";

const Nav = () => {
  return (
    <div className={styles.nav}>
        <div className="wrapper">
            <img src={logo} alt="logo" />
            <h1 className={styles.nav__title}>Echoes of the East</h1>
        </div>
        <div className={styles.wrapper__links}>
            <a href="" className={styles.link}>Home</a>
            <a href=""className={styles.link}>City Tours</a>
            <a href=""className={styles.link}>Travel Guide</a>
            <a href=""className={styles.link}>Revies</a>
        </div>
        <a href="" className={styles['contact-button']}>CONTACT</a>
    </div>
  );
};

export default Nav;