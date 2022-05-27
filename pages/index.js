// components
import Layout from "../components/Layout";
import About from "../components/About";
import Experiences from "../components/Experiences";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

export default function Home({ experiences, projects }) {
  console.log(experiences);
  return (
    <Layout>
      <About />
      <Projects projects={projects} />
      <Experiences experiences={experiences} />
      <Contact />
    </Layout>
  );
}

export async function getStaticProps() {
  const reqExperiences = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/experiences?sort[0]=id%3Adesc`
  );
  const experiences = await reqExperiences.json();

  const reqProjects = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/projects?populate=*`
  );
  const projects = await reqProjects.json();

  return {
    props: { experiences: experiences.data, projects: projects.data },
  };
}
