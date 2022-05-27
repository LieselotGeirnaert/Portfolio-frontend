import styles from "./Projects.module.css";
import Image from "next/image";
import Link from "next/link";

const Projects = ({ projects }) => {
  return (
    <div className={styles.projects}>
      <h2 id="projects" className="pagetitle">
        Projects
      </h2>
      <div className={styles.projects__container}>
        {projects.map((project) => (
          <section className={styles.project} key={project.id}>
            <Link href={`/projects/${project.id}`}>
              <a className={styles.project__link}>
                <h3 className={styles.title}>{project.attributes.name}</h3>
                <div className={styles.img}>
                  <Image
                    src={
                      project.attributes.images.data[0].attributes.formats.small.url
                    }
                    alt="Behance"
                    width={project.attributes.images.data[0].attributes.formats.small.width}
                    height={project.attributes.images.data[0].attributes.formats.small.height}
                  />
                </div>
                <div className={styles.tags}>
                  {/* {project.roles.split("-").map((tag) => (
                    <p className={styles.tag} key={tag}>
                      #{tag}
                    </p>
                  ))} */}
                </div>
              </a>
            </Link>
          </section>
        ))}
      </div>
    </div>
  );
};

export default Projects;
