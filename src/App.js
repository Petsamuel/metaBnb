import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Belt from "./components/Belt";
import Card from "./components/Cardui";
import Section from "./components/section-3";
import Model from "./components/Model";
import "./App.css";



function App() {
  return (
    <>
    
      <div className="flex">
        <header>
        <Header />
         
        </header>
        <main>
          <div className="flex">
            <Main />
          </div>
          <Belt />
          <div className="flex">
            <Card />
          </div>
          <section className="section-3">
           <div className="section-3-wrapper">
            <Section/>
           </div>
          </section>
          <Footer/>
        </main>
      </div>
      <div className="modal">
       <Model id="modal"/> 
      </div>
    </>
  );
}

export default App;
