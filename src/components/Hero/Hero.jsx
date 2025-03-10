import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../util";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Ada</h1>
        <p className={styles.description}>
        I build exceptional digital experiences that are fast, accessible, visually appealing, and responsive. Let's work together to bring your ideas to life!
        </p>
        <a href="mailto:myemail@email.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImage}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};