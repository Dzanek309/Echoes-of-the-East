import React from "react";
import styles from "./News.module.css";
import SideNews from "./SideNews";

const News = () => {
    return(
        <div className={styles['news']}>
            <div className={styles['wrapper-title']}>
            <h1 className={styles['news-title']}>News</h1>
            <h2 className={styles['news-title-desc']}># What's going on</h2>
            </div>
            <div className={styles['wrapper']}>
                <div  className={styles['main-news']}>
                    <img src="https://placehold.co/1000x600" alt="" className={styles['main-news__photo']} />
                    <h1 className={styles['main-news__title']}>Title</h1>
                    <h2 className={styles['main-news__desc']}>Blah blah blahBlah blah blahBlah blah blahBlah blah blahBlah blah blahBlah blah blahBlah blah blahBlah blah blahBlah blah blahBlah blah blahBlah blah blahBlah blah blahBlah blah blahBlah blah blahBlah blah blahBlah blah blahBlah blah blahBlah blah blahBlah blah blahBlah blah blahBlah blah blahBlah blah blahBlah blah blahBlah blah blahBlah blah blahBlah blah blahBlah blah blahBlah blah blah</h2>
                </div>
                <div className={styles['side-news']}>
                    <SideNews 
                    title="title1"
                    desc="Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum "
                    />
                    <SideNews 
                    title="title2"
                    desc="blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah "
                    />
                    <SideNews 
                    title="title3"
                    desc="bing chillin bing chillin bing chillin bing chillin bing chillin bing chillin "
                    />
                </div>
            </div>
        </div>
    );
};

export default News;