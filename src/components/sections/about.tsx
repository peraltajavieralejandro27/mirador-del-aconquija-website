import React from 'react';
import aboutImage from '../../assets/img/about-2.jpg';
import logoText from '../../assets/img/logo-text.png';
import {siteData} from "../../data/data";

const About = () => {
  return (
    <section className="about-section text-center" id="about">
      <div className="container px-4 px-lg-5">
        <div className="row gx-4 gx-lg-5 justify-content-center px-5">

          <div className='col-6 mb-5'>
            <img src={logoText} alt={siteData.title} className='img-fluid image-white'/>
          </div>

          <div className="col-lg-12">
            <p className="text-white mb-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda corporis delectus iste iusto maxime
              minus mollitia perspiciatis reiciendis reprehenderit temporibus. Atque consequatur explicabo, ipsum
              libero
              maxime quae vel veritatis voluptatem.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, ex sit! A accusamus ad aspernatur aut
              debitis ducimus eveniet facilis, itaque obcaecati officiis quasi reiciendis, sapiente sint temporibus
              tenetur voluptate?
            </p>
          </div>

          <div className='col-lg-6'>
            <p className="text-white text-end mb-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut deserunt dignissimos distinctio dolorem
              expedita, fugit id ipsam minima minus nesciunt nihil nisi omnis optio porro qui reprehenderit tempore
              ullam ut!
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum error sapiente voluptatum? Ad
              assumenda
              consectetur consequuntur dolor ducimus enim, excepturi expedita, fugiat nam natus nemo pariatur porro
              provident repudiandae suscipit.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis consequuntur deserunt dolor impedit
              nostrum obcaecati pariatur quae quo rerum sit. Aliquam eum fugiat rem sed! Consequatur deleniti minus ut
              voluptas?
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi distinctio eum, illum incidunt iusto
              laborum, laudantium magni minima natus nihil numquam perspiciatis qui quisquam quos ratione recusandae
              vero voluptatem voluptatum.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur cumque fugiat modi nulla omnis,
              quisquam reiciendis. Culpa earum eius, eos explicabo facere incidunt magnam perspiciatis possimus, quam
              ratione saepe similique!
            </p>
          </div>

          <div className='col-lg-6'>
            <img src={aboutImage} alt='About image' className='img-fluid'/>
          </div>

          <div className='col-lg-12'>
            <p className="text-white">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda corporis delectus iste iusto maxime
              minus mollitia perspiciatis reiciendis reprehenderit temporibus. Atque consequatur explicabo, ipsum
              libero
              maxime quae vel veritatis voluptatem.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, ex sit! A accusamus ad aspernatur aut
              debitis ducimus eveniet facilis, itaque obcaecati officiis quasi reiciendis, sapiente sint temporibus
              tenetur voluptate?
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;