import styles from "./About.module.css";
import Image from "next/image";

const About = () => {
  return (
    <div className={styles.about}>
      <h2 id="about" className={styles.title}>
        Hi there!
      </h2>
      <p className={styles.intro}>
        Hi, I’m Lieselot, a twenty-something developer and UX/UI designer from
        Ghent. I’m an enthusiastic jack-of-all-trades, with a passion for
        frontend development, web design and UX research. By day you can call me
        a “Deviner”. By night and during the weekends, I’m “juf Lieselot”, as I
        try to pass on my enthusiasm for the world wide web to the next
        generation, by teaching kids the basics of programming.
      </p>
      <div className={styles.img}>
        <Image
          src={`/assets/img/Lieselot.png`}
          alt="Lieselot"
          width={200}
          height={200}
        />
      </div>
      <div className={styles.quote}>
        <p className={styles.quote__text}>"Everything is designed. Few things are designed well."</p>
        <p>- Brian Reed</p>
      </div>

      <p className={styles.info}>
        Hi, I’m Lieselot, a twenty-something developer and UX/UI designer from
        Ghent. I’m an enthusiastic jack-of-all-trades, with a passion for
        frontend development, web design and UX research. By day you can call me
        a “Deviner”. By night and during the weekends, I’m “juf Lieselot”, as I
        try to pass on my enthusiasm for the world wide web to the next
        generation, by teaching kids the basics of programming.
      </p>
    </div>
  );
};

export default About;
