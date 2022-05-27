import Layout from "../../components/Layout";
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/ProjectDetail.module.css";

const Project = ({ project }) => {
  console.log(project.attributes);

  return (
    <Layout>
      <div className={styles.project}>
        <Link href={`/#projects`}>
          <a className={styles.project__backlink}>Terug</a>
        </Link>
        <h2 className={styles.title}>{project.title}</h2>
        <p className={styles.description}>{project.description}</p>
        <p className={styles.description}>{project.extradescription}</p>

        <div className={styles.images}>
          {project.images.data.map((image) => (
            <div className={styles.image} key={image.attributes.url}>
              {image.attributes.mime !== "video/mp4" ? (
                <Image
                  src={image.attributes.formats.large.url}
                  alt="Lieselot"
                  width={image.attributes.formats.large.width}
                  height={image.attributes.formats.large.height}
                />
              ) : (
                <video width="100%" controls>
                  <source src={image.attributes.url} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}
            </div>
          ))}
        </div>

        <div className={styles.role}>
          <h3 className={styles.subtitle}>My role during the project</h3>
          <div className={styles.tags}>
            {project.role.split("-").map((tag) => (
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
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/projects/${proj}?populate=*`
  );
  let project = await res.json();
  return { props: { project: project.data.attributes } };
};
