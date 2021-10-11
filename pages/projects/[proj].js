import Layout from "../../components/Layout";
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/ProjectDetail.module.css";

const Project = ({ project }) => {
  return (
    <Layout>
      <div className={styles.project}>
        <Link href={`/#projects`}>
          <a className={styles.project__backlink}>Terug</a>
        </Link>
        <h2 className={styles.title}>{project.title}</h2>
        <p className={styles.description}>{project.description}</p>
        <p className={styles.description}>{project.extradescription}</p>

        <div className={styles.img1}>
          <Image
            src={`/assets/img/${project.title}/1.png`}
            alt="Lieselot"
            width={200}
            height={200}
          />
        </div>

        <div className={styles.role}>
          <h3 className={styles.subtitle}>My role during the project</h3>
          <div className={styles.tags}>
            {project.roles.split("-").map((tag) => (
              <p className={styles.tag}>{tag}</p>
            ))}
          </div>
        </div>

        <div className={styles.team}>
          <h3 className={styles.subtitle}>Teammembers</h3>
          <div className={styles.tags}>
            {project.team.split("-").map((team) => (
              <p className={styles.tag}>{team}</p>
            ))}
          </div>
        </div>

        <div className={styles.checkout}>
          <h3 className={styles.subtitle}>Check out the project!</h3>
          <div className={styles.links}>
            {project.github ? (
              <Link href={project.github}>
                <a className={styles.link} target="_blank">
                  Github
                </a>
              </Link>
            ) : (
              ""
            )}
            {project.behance ? (
              <Link href={project.behance}>
                <a className={styles.link} target="_blank">
                  Behance
                </a>
              </Link>
            ) : (
              ""
            )}
            {project.demo ? (
              <Link href={project.demo}>
                <a className={styles.link} target="_blank">
                  Live demo
                </a>
              </Link>
            ) : (
              ""
            )}
            {project.prototype ? (
              <Link href={project.prototype}>
                <a className={styles.link} target="_blank">
                  Prototype
                </a>
              </Link>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Project;

export const getServerSideProps = async (context) => {
  const { proj } = context.query;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/projects/${proj}`
  );
  let project = await res.json();
  return { props: { project } };
};
