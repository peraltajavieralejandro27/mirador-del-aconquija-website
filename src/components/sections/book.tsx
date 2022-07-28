import React from 'react';
import {contactData, socialNetworks} from '../../data/data';
import social_buttons from "../fragments/social_buttons";
import SocialButtons from "../fragments/social_buttons";

const Book = () => {
  return (
      <section className="contact-section bg-black pb-5" id="book">

        <div className="container px-4 px-lg-5">
          <div className="row gx-4 gx-lg-5">
            <h2 className="text-white text-center">¡Reservá!</h2>

            <SocialButtons/>

            <p className='text-center text-white my-4'>
              Éstos son los diversos medios que tenes disponibles para no quedarte sin tu reserva
            </p>

            <div className="col-md-4 mb-3 mb-md-0">
              <div className="card py-4 h-100">
                <div className="card-body text-center">
                  <i className="fa-brands fa-whatsapp text-primary mb-2 fa-2x"/>

                  <h4 className="text-uppercase m-0">Whatsapp</h4>

                  <hr className="my-4 mx-auto"/>

                  <div className="small text-black-50">
                    <a
                      href={`tel: ${contactData.whatsapp.primary.number}`}
                      target='_blank'
                    >
                      {contactData.whatsapp.primary.number}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4 mb-3 mb-md-0">
              <div className="card py-4 h-100">
                <div className="card-body text-center">

                  <i className="fas fa-mobile-alt text-primary mb-2 fa-2x mb-2"/>

                  <h4 className="text-uppercase m-0">
                    Teléfono
                  </h4>

                  <hr className="my-4 mx-auto"/>

                  <div className="small text-black-50">
                    <a
                      href={`tel:${contactData.phone.primary}`}
                      target='_blank'
                    >
                      {contactData.phone.primary}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4 mb-3 mb-md-0">
              <div className="card py-4 h-100">
                <div className="card-body text-center">

                  <i className="fas fa-envelope text-primary mb-2 fa-2x mb-2"/>

                  <h4 className="text-uppercase m-0">
                    Email
                  </h4>
                  <hr className="my-4 mx-auto"/>
                  <div className="small text-black-50">
                    <a
                      href={`mailto:${contactData.email}`}
                      target='_blank'
                    >
                      {contactData.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>


          </div>

        </div>

      </section>
  );
};

export default Book;