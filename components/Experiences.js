import styles from "./Experiences.module.css";

const Experiences = ({ experiences }) => {
  return (
    <div className={styles.experiences}>
      <h2 id="experiences" className="pagetitle">
        Experiences
      </h2>
      <div className={styles.experiences__container}>
        {experiences.map((experience) => (
          <section className={styles.experience} key={experience.id}>
            <h3 className={styles.experience__title}>{experience.attributes.title}</h3>
            <p className={styles.experience__description}>
              {experience.attributes.description}
            </p>
            <p className={styles.experience__date}>
              {experience.attributes.period}
            </p>
          </section>
        ))}
      </div>
    </div>
  );
};

export default Experiences;
