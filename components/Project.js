import styles from "./Project.module.css";
import Image from "next/image";

const Project = ({ title, img, tags }) => {
  return (
    <section className={styles.project}>
      <h3>{title}</h3>
      <div>
        <Image
          src={`/assets/img/${img}.svg`}
          alt="Behance"
          width={25}
          height={25}
        />
      </div>
      {tags.forEach(tag => {
        <p>{tag}</p>  
      })}
    </section>
  );
};

export default Project;
