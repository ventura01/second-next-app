import Layout from "../../components/Layout";
import Link from "next/link";
import dbConnect from "../../lib/dbConnect";
import Producto from "../../models/Producto";

const ProductoPage = ({ success, error, producto }) => {
  console.log(success);
  console.log(error);
  console.log(producto);
  if (!success) {
    return (
      <div className="container text-center my-5">
        <h1>{error}</h1>
        <Link href="/productos">
          <a className="btn btn-primary mt-5">Volver</a>
        </Link>
      </div>
    );
  }
  return (
    <Layout
      title={`Picky | Producto ${producto.id}`}
      description="Pagina de detalle del producto."
    >
      <div className="container">
        <h1>Detalle de producto</h1>
        <div className="row">
          <div className="card my-4 col-md-6">
            <div className="card-body">
              <h2 className="text-uppercase">{producto.title}</h2>
              <h3 className="text-muted card-subtitle">{producto.plot}</h3>
              <h2 className="fw-bold">{producto.price}</h2>
              <p className="fw-light text-muted">{producto._id}</p>
            </div>
          </div>
        </div>
        <Link href="/productos">
          <a className="btn btn-primary">Volver</a>
        </Link>
      </div>
    </Layout>
  );
};

export default ProductoPage;

export async function getServerSideProps({ params }) {
  try {
    await dbConnect();
    const producto = await Producto.findById(params.id).lean();
    if (!producto) {
      return { props: { success: false, error: "Pelicula no encontrada" } };
    }
    console.log(producto);
    producto._id = `${producto._id}`;
    return { props: { success: true, producto } };
  } catch (error) {
    console.log(error);
    if (error.kind === "ObjectId") {
      return { props: { success: false, error: "Id no valido!" } };
    }
    return { props: { success: false, error: "Error de servidor!" } };
  }
}
