import Navbar from "./Navbar";
import Footer from "./Footer";
import Head from "next/head";

const Layout = ({ children, title, description }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
