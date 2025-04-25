import React from "react";
import styles from "./PopularCard.module.css";
import pin from "../assets/locationPin.png";

const PopularCard = ({title,location,rating,imgSrc}) =>{
    return(
        <div className={styles['card-container']}>
            <img src={imgSrc} alt="" className={styles['card__photo']} />
            <div className={styles['wrapper-row']}>
            <div className={styles['wrapper']}>
                <h1 className={styles['card__photo-title']}>{title}</h1>
                    <div className={styles['card__location']}>
                        <img src={pin} alt="" className={styles['card__location-logo']}/>
                        <span className={styles['card__location-location']}>{location}</span>
                    </div>
            </div>
            <div className={styles['card__rating']}>
                <span className={styles['card__rating-number']}>{rating}</span>
            </div>
            </div>
        </div>
    );
};

export default PopularCard;