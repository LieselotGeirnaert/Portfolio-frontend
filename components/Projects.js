import styles from "./Projects.module.css";
import Image from "next/image";
import Link from "next/link";

const Projects = ({ projects }) => {
  console.log(projects);
  return (
    <div className={styles.projects}>
      <h2 id="projects" className="pagetitle">
        Projects
      </h2>
      <div className={styles.projects__container}>
        {projects.map((project) => (
          <section className={styles.project} key={project.id}>
            <Link href={`/projects/${project.id}`}>
              <a className={styles.link}>
                <h3 className={styles.title}>{project.title}</h3>
                <div className={styles.img}>
                  <Image
                    src={`/assets/img/${project.title}/1.png`}
                    alt="Behance"
                    width={400}
                    height={250}
                  />
                </div>
                {/* {tags.forEach((tag) => {
              <p>{tag}</p>;
            })} */}
              </a>
            </Link>
          </section>
        ))}
      </div>
    </div>
  );
};

export default Projects;
