import React from "react";
import styles from "./Newsletter.module.css"

const Newsletter = () =>{
    return(
        <div className={styles['newsletter']}>
            <a className={styles['newsletter__link']} href="#">newsletter</a>
            <h1 className={styles['newsletter__title']}>Don't Miss Our Daily Updates</h1>
            <form action="" className={styles['wrapper']}>
                <input className={styles['newsletter__text-form']} type="email" placeholder="Email address" name="mail" required/>
                <input className={styles['newsletter__submit-btn']} type="submit" value="SUBSCRIBE" name="mail"></input>
            </form>
        </div>
    );
};

export default Newsletter;