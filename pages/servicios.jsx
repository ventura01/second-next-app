import Servicio from "../models/Servicio";
import Layout from "../components/Layout";
import dbConnect from "../lib/dbConnect";

const ServiciosPage = ({ servicios }) => {
  console.log(servicios);
  return (
    <Layout
      title="Picky | Servicios"
      description="Pagina Servicios, descripcion de los servicios."
    >
      <div className="container">
        <h1>Servicios</h1>
        <div className="container">
          <div className="row">
            {servicios.map(({ _id, title, plot, price }) => (
              <div key={_id} className="col-md-4 d-flex card mb-2">
                <div className="card-body">
                  <h2 className="text-uppercase">{title}</h2>
                  <h5 className="card-subtitle mb-2 text-muted">{plot}</h5>
                  <h2>{`Precio: ${price}`}</h2>
                  <p className="card-subtitle mb-2 text-muted">{`Ref: ${_id}`}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ServiciosPage;

export async function getServerSideProps() {
  try {
    await dbConnect();
    const res = await Servicio.find({});
    const servicios = res.map((doc) => {
      const servicio = doc.toObject();
      servicio._id = `${servicio._id}`;
      return servicio;
    });
    console.log(res);
    return { props: { servicios } };
  } catch (error) {
    console.log(error);
  }
}
