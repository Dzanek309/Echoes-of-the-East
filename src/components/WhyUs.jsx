import React from "react";
import styles from "./WhyUs.module.css";
import WhyUsCard from "./WhyUsCard";
import price from "../assets/price.png"
import information from "../assets/information.png"
import time from "../assets/time.png"
import transport from "../assets/transport.png"

const WhyUs = () =>{

    return(
        <div className={styles['whyUs']}>
            <h1 className={styles['whyUs__title']}>WHY US</h1>
            <p className={styles['whyUs__desc']}>Discover China like never before — expertly guided, tailor-made adventures just for you.</p>
            <div className={[styles['whyUs__cards-wrapper']]}>
                <WhyUsCard
                title="Price"
                src={price}
                desc="Enjoy top-quality travel experiences through China at a price that’s as impressive as the journey itself—our tours are thoughtfully designed to offer exceptional value, combining comfort, expert guidance, and unforgettable moments without breaking the bank."
                />
                <WhyUsCard
                title="Information"
                src={information}
                desc="We provide top-quality information every step of the way—our expert guides share deep cultural insights, local stories, and historical context, turning every destination into a meaningful experience and not just a photo stop."
                />
                <WhyUsCard
                title="Time"
                src={time}
                desc="Our tours are perfectly timed and thoughtfully organized, ensuring you make the most of every moment without feeling rushed—balancing must-see highlights with free time to explore, relax, or discover hidden gems at your own pace."
                />
                <WhyUsCard
                title="Transport"
                src={transport}
                desc="We provide comfortable and reliable transportation throughout your journey, so you can travel stress-free between destinations—whether it's by private car, high-speed train, or guided group bus, we've got every detail covered."
                />
            </div>
        </div>
    )
}

export default WhyUs;