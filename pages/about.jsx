import Link from "next/link";
import Layout from "../components/Layout";

const About = () => {
  return (
    <Layout title="Picky | About" description="Pagina About, descripcion de la empresa e historia.">
      <div className="container">
          <h1>About</h1>
          <Link href="/">
            <a className="btn btn-primary">Volver..</a>
          </Link>
      </div>
    </Layout>
  );
};

export default About;
