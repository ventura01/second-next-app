import Link from "next/link";
import Producto from "../../models/Producto";
import Layout from "../../components/Layout";
import dbConnect from "../../lib/dbConnect";

const Products = ({ productos }) => {
  return (
    <Layout
      title="Picky | Productos"
      description="Pagina de nuestros productos."
    >
      <div className="container">
        <h1>Products</h1>
        {productos.map(({ _id, plot, title, price }) => (
          <div key={_id} className="card my-3 col-md-4">
            <div className="card-body">
              <Link href={`/productos/${_id}`}>
                <a>
                  <h3>
                    {_id} - {title}
                  </h3>
                </a>
              </Link>
              <h4>{plot}</h4>
              <p>{price}</p>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Products;

// export async function getStaticProps() {
//   try {
//     const res = await fetch("https://jsonplaceholder.typicode.com/comments");
//     const data = await res.json();
//     return {
//       props: {
//         data,
//       },
//     };
//   } catch (error) {}
// }
export async function getServerSideProps() {
  try {
    await dbConnect();
    const res = await Producto.find({});
    const productos = res.map((doc) => {
      const producto = doc.toObject();
      producto._id = `${producto._id}`;
      return producto;
    });
    console.log(res);
    return { props: { productos } };
  } catch (error) {
    console.log(error);
    return { props: { success: false, error: "Error" } };
  }
}
