import React from 'react';
import './assets/css/styles.css';
import './assets/js/scripts';
import Nav from "./components/layout/nav";
import Header from "./components/layout/header";
import About from "./components/sections/about";
import Footer from "./components/layout/footer";
import Projects from "./components/sections/projects";
import Signup from "./components/sections/signup";
import Contact from "./components/sections/contact";

function App() {
  return (
    <div className="App">
      <Nav/>

      <Header/>

      <About/>

      <Projects/>

      <Signup/>

      <Contact/>

      <Footer/>
    </div>
  );
}

export default App;
