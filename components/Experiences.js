import styles from "./Experiences.module.css";
import Image from "next/image";

const Experiences = ({ experiences }) => {
  return (
    <div className={styles.experiences}>
      <h2 id="experiences" className="pagetitle">
        Experiences
      </h2>
      <div className={styles.experiences__container}>
        {experiences.map((experience) => (
          <section className={styles.experience} key={experience.id}>
            <h3 className={styles.experience__title}>{experience.title}</h3>
            <p className={styles.experience__description}>
              {experience.description}
            </p>
            <p className={styles.experience__date}>
              {experience.start} {experience.end ? `- ${experience.end}` : ""}
            </p>
          </section>
        ))}
      </div>
    </div>
  );
};

export default Experiences;
