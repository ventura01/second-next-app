import Link from "next/link";
import Layout from "../../components/Layout";

const Products = ({ data }) => {
  return (
    <Layout
      title="Picky | Productos"
      description="Pagina de nuestros productos."
    >
      <div className="container">
        <h1>Products</h1>
        {data.map((producto) => (
          <div key={producto.id} className="card my-3 col-md-4">
            <div className="card-body">
              <Link href={`/productos/${producto.id}`}>
                <a>
                  <h3>
                    {producto.id} - {producto.name}
                  </h3>
                </a>
              </Link>
              <h4>{producto.email}</h4>
              <p>{producto.body}</p>
            </div>
          </div>
        ))}
        <Link href="/">
          <a className="btn btn-primary">Volver..</a>
        </Link>
      </div>
    </Layout>
  );
};

export default Products;

export async function getStaticProps() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/comments");
    const data = await res.json();
    return {
      props: {
        data,
      },
    };
  } catch (error) {}
}
