import React from "react";
import styles from "./SideNews.module.css"

const SideNews = ({title,desc}) =>{
    return(
        <div className={styles['sideNews']}>
            <img src="https://placehold.co/600x400" alt="" className={styles['sideNews__img']}/>
            <div className={styles['sideNews-content']}>
                <h1 className={styles['sideNews__title']}>{title}</h1>
                <h2 className={styles['sideNews__desc']}>{desc}</h2>
            </div>
        </div>
    );
};

export default SideNews;