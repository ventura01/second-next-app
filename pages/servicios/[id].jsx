import Layout from "../../components/Layout";
import Link from "next/link";
import dbConnect from "../../lib/dbConnect";
import Servicio from "../../models/Servicio";

const ServicioPage = ({ success, error, servicio }) => {
  console.log(success);
  console.log(error);
  console.log(servicio);
  if (!success) {
    return (
      <div className="container text-center my-5">
        <h1>{error}</h1>
        <Link href="/servicios">
          <a className="btn btn-primary mt-5">Volver</a>
        </Link>
      </div>
    );
  }
  return (
    <Layout
      title={`Picky | Servicio ${servicio.id}`}
      description="Pagina de detalle del servicio."
    >
      <div className="container">
        <h1>Detalle de servicio</h1>
        <div className="row">
          <div className="card my-4 col-md-6">
            <div className="card-body">
              <h2>
                {servicio._id} - {servicio.title}
              </h2>
              <h3>{servicio.plot}</h3>
              <p>{servicio.price}</p>
            </div>
          </div>
        </div>
        <Link href="/servicios">
          <a className="btn btn-primary">Volver</a>
        </Link>
      </div>
    </Layout>
  );
};

export default ServicioPage;

export async function getServerSideProps({ params }) {
  try {
    await dbConnect();
    const servicio = await Servicio.findById(params.id).lean();
    if (!servicio) {
      return { props: { success: false, error: "Pelicula no encontrada" } };
    }
    console.log(servicio);
    servicio._id = `${servicio._id}`;
    return { props: { success: true, servicio } };
  } catch (error) {
    console.log(error);
    if (error.kind === "ObjectId") {
      return { props: { success: false, error: "Id no valido!" } };
    }
    return { props: { success: false, error: "Error de servidor!" } };
  }
}
