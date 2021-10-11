import Layout from "../../components/Layout";
import Image from "next/image";

const Project = ({ project }) => {
  console.log(project);
  return (
    <Layout>
      <h2>{project.title}</h2>
      <p>{project.description}</p>
      <p>{project.extradescription}</p>
      <Image
        src={`/assets/img/behance.svg`}
        // src={`/assets/img/${project.title}/1.png`}
        alt="Lieselot"
        width={600}
        height={200}
      />
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
