import Image from "next/image";

const Footer = () => {
  return (
    <footer className="container">
      <div className="row">
        <div className="col-md-4 footer-cont-logo">
          <div className="footer-logo">
            <Image
              src="/img/rider_logo.png"
              width={266}
              height={91}
              alt="Imagen footer"
            ></Image>
          </div>
        </div>
        <div className="col-md-4">
          <div className="footer-contact">
            <h5 className="footer-contact-title">Contacto</h5>
          </div>
        </div>
        <div className="col-md-4">
          <div className="footer-text">
            <h5 className="footer-contact-title">Síguenos</h5>
            <div className="cont-icons row d-flex justify-content-center align-items-center">
              <div className="inst-icon col-4">
                <i className="bi bi-instagram"></i>
              </div>
              <div className="meta-icon col-4">
                <i className="bi bi-meta"></i>
              </div>
              <div className="twitter-icon col-4">
                <i className="bi bi-twitter"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
