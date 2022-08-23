import React, { useEffect, useState } from "react";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
// import Particles from 'react-particles-js';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';
import Services from './components/Services';
import ScrollToTop from 'react-scroll-to-top';
import Whatsapp from "./components/Whatsapp";


function App() {
  const [data, setData] = useState([]);
  const [loading, setloading] = useState(undefined);
  const [completed, setcompleted] = useState(undefined);

  useEffect(() => {
    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((json) => {
          console.log(json);
          setData(json);
          setloading(true);

          setTimeout(() => {
            setcompleted(true);
          }, 1000);
        });
    }, 2000);
  }, []);

  return (
    <>
      {!completed ? (
        <>
          {!loading ? (
            <div className='spinner'>
              <span>DENNIS MATERE...</span>
              <div className='half-spinner'></div>
            </div>
          ) : (
            <div className='completed'>DENNIS MATERE</div>
          )}
        </>
      ) : (
        <>

          {/* <Particles 
       className="particles-canvas"
         params={{
          particles:{
            number:{
              value: 30,
              density: {
                enable: true,
                value_area: 900
              }
            },
            shape:{
              type:"circle",
              stroke:{
                width: 6,
                color:"#f9ab00"
              }
            }
          }
         }}
      /> */}
          {/* <Preloader /> */}
          <Navbar />
          <Header />
          <About />
          <Services />
          <Contact />
          <Footer />
          <Whatsapp />
          <ScrollToTop style={{ marginTop: "150vh" }} smooth color='#ef4035' />
        </>
      )}
    </>
  );
}

export default App;
