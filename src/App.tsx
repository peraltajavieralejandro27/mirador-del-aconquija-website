import React from 'react';
import './assets/scss/styles.scss';
import './assets/scss/custom.scss';
import './assets/js/scripts';
import Nav from "./components/layout/nav";
import Header from "./components/layout/header";
import About from "./components/sections/about";
import Footer from "./components/layout/footer";
import Projects from "./components/sections/projects";
import Signup from "./components/sections/signup";
import Contact from "./components/sections/contact";
import Book from "./components/sections/book";
import Calendar from "./components/sections/calendar";
import Preloader from "./components/layout/preloader";
import 'hover.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

function App() {
  return (
    <div className="App">
      <Preloader/>

      <Nav/>

      <Header/>

      <Book/>

      <Calendar/>

      <About/>

      {/*<Projects/>*/}

      {/*<Signup/>*/}

      <Contact/>

      <Footer/>
    </div>
  );
}

export default App;
