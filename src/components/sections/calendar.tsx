import React from 'react';
import {contactData} from "../../data/data";

const Calendar = () => {
  return (
      <section className="contact-section bg-black calendar-background pt-5" id="calendar">
        <div className="container px-4 px-lg-5">
          <div className="row gx-4 gx-lg-5">
            <p
              className='text-center text-white mt-5'
            >
              Tambien podes consultar las fechas disponibles en nuestro calendario.
            </p>

            <h5 className='text-warning text-center mb-5'>
              <i className='fas fa-info-circle mb-3'/> <br/>¡Tené en cuenta que siempre se está actualizando a si que no
              te
              olvides de ingresar regularmente!
            </h5>

            <div>
              <iframe
                className='rounded'
                width='100%'
                height='600px'
                src={contactData.googleCalendar.url}
              />
            </div>
          </div>
        </div>
      </section>
  );
};

export default Calendar;