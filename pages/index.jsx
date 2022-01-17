import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout title="Picky | Home" description="Pagina Inicio">
      <div className="container">
        <h1>Home</h1>
      </div>
      <section className="container p-3">
        <article>
          <h2>Artículo</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis
            placeat vero autem maxime aspernatur ipsa corporis. Ex nihil
            architecto, distinctio reprehenderit id at omnis.
          </p>
        </article>
      </section>
    </Layout>
  );
}
