import Layout from "../../components/Layout";

const Producto = ({ data }) => {
  return (
    <Layout
      title={`Picky | Producto ${data.id}`}
      description="Pagina de detalle del producto."
    >
      <div className="container">
        <h1>Detalle de producto</h1>
        <div className="row">
          <div className="card my-4 col-md-6">
            <div className="card-body">
              <h2>
                {data.id} - {data.name}
              </h2>
              <h3>{data.email}</h3>
              <p>{data.body}</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Producto;

export async function getStaticPaths() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/comments");
    const data = await res.json();
    const paths = data.map(({ id }) => ({ params: { id: `${id}` } }));
    return {
      paths,
      fallback: false,
    };
  } catch (error) {
    console.log(error);
  }
}

export async function getStaticProps({ params }) {
  try {
    const res = await fetch(
      "https://jsonplaceholder.typicode.com/comments/" + params.id
    );
    const data = await res.json();
    return {
      props: {
        data,
      },
    };
  } catch (error) {
    console.log(error);
  }
}
