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
              <a className={styles.img}>
                <h3>{project.title}</h3>
                <div>
                  {/* <Image
                src={`/assets/img/${project.Imgages[0]}.png`}
                alt="Behance"
                width={25}
                height={25}
              /> */}
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
