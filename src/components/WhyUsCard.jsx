import React from "react";
import styles from "./WhyUsCard.module.css";

const WhyUsCard = ({title,desc,src}) =>{
    return(

        <div className={styles['whyUsCard']}>
            <img src={src} alt="" className={styles['whyUsCard__img']}/>
            <h1 className={styles['whyUsCard__title']}>{title}</h1>
            <p className={styles['whyUsCard__desc']}>{desc}</p>
        </div>
    );
};

export default WhyUsCard;