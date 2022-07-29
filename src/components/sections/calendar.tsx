import React from 'react';
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import googleCalendarPlugin from '@fullcalendar/google-calendar';
import bootstrap5Plugin from '@fullcalendar/bootstrap5';
import '../../assets/scss/fullcalendar.scss';
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

          <FullCalendar
            plugins={[dayGridPlugin, googleCalendarPlugin, bootstrap5Plugin]}
            themeSystem={'bootstrap5'}
            locale={'es'}
            googleCalendarApiKey={contactData.googleCalendar.apiKey}
            events={{googleCalendarId: contactData.googleCalendar.id}}
            initialView="dayGridMonth"
            eventClick={(info) => {
              info.jsEvent.preventDefault();
            }}
            weekends={true}
          />
        </div>
      </div>
    </section>
  );
};

export default Calendar;