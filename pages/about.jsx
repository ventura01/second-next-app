import Layout from "../components/Layout";
import Image from "next/image";

// const myLoader = ({ src, width, quality }) => {
//   return `${src}?w=${width}&q=${quality || 75}`;
// };

const About = () => {
  return (
    <Layout
      title="Picky | About"
      description="Pagina About, descripcion de la empresa e historia."
    >
      <div className="container">
        <h1>About</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero ullam
          eos, possimus, nobis aspernatur dolores dolorum nisi ea iure maiores
          fuga laboriosam pariatur doloribus porro laudantium vero voluptas,
          deserunt excepturi amet? Eveniet expedita fugit cum accusantium
          facilis sed vitae aliquid nam ex accusamus velit inventore culpa,
          officia non asperiores et ea in ullam aut. Reiciendis, commodi
          consequuntur minima nesciunt dolorem accusantium magnam voluptate
          repudiandae quam quo rerum saepe sint, voluptas aperiam vitae dolorum
          aliquam dolore eius molestias nulla quod enim cum voluptatibus quis?
          Eos inventore eligendi nisi! Consequuntur, hic. Saepe, fugit qui illum
          ipsam voluptas praesentium veritatis corrupti asperiores sed sit
          blanditiis soluta doloribus quae sequi itaque quisquam perferendis
          dolore? Ducimus mollitia iure, earum libero nisi odio nam at id
          ratione voluptates doloribus sint dicta qui molestiae, sit distinctio
          soluta cum facere blanditiis reiciendis? Ratione reiciendis fugit
          similique dolores voluptatibus inventore ipsum sequi aperiam. Quisquam
          perspiciatis quidem pariatur! Dignissimos nihil accusamus temporibus
          eaque, dolores laborum dolor quo atque repudiandae. Dolorum aut
          impedit reprehenderit saepe quos suscipit quis quaerat. Nesciunt est
          doloremque qui alias. Magni enim animi, quis ducimus error, distinctio
          laborum tenetur dolorem numquam aperiam ipsum ea iste magnam illo
          aliquid repudiandae sapiente rerum et assumenda architecto. Sed
          pariatur ipsa repudiandae corrupti inventore autem necessitatibus, rem
          nisi aliquam, reiciendis delectus ducimus quidem dolore assumenda
          officiis neque et tenetur voluptas debitis minima. Non dolore
          laudantium ducimus odio vero ipsa amet veritatis voluptatem officiis,
          culpa doloribus reprehenderit vitae expedita. Dolor dignissimos nihil
          quisquam magnam, eligendi nulla cum pariatur. Ducimus, quis totam
          exercitationem error vel commodi aliquid impedit sunt voluptatibus
          quisquam quibusdam assumenda.
        </p>
        <Image
          // loader={myLoader}
          src="https://images.unsplash.com/photo-1464375117522-1311d6a5b81f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2250&q=80"
          width={1920}
          height={1280}
          layout="responsive"
          priority
          alt="img"
        ></Image>
      </div>
    </Layout>
  );
};

export default About;
