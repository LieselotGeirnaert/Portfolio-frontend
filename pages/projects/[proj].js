import Layout from "../../components/Layout";

const Project = ({ project }) => {
  console.log(project);
  return (
    <Layout>
      <h2>{project.title}</h2>
    </Layout>
  );
};

export default Project;

export const getServerSideProps = async (context) => {
  console.log("wy nottt workinnng");
  console.log("contect", context);
  
  const { proj } = context.query;
  console.log(proj);

  // const res = await fetch(
  //   `${process.env.NEXT_PUBLIC_STRAPI_URL}/projects/${id}`
  // );
  // let project = await res.json();
  // project = project[0];

  let project = "";
  return { props: { project } };
};