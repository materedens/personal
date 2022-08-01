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


function App() {
  return (
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
      <Navbar />
      <Header />
      <About />
      <Services />
      <Contact />
      <Footer />
      <ScrollToTop style={{ marginTop: "150vh" }} smooth color='#ef4035' />

    </>
  );
}

export default App;
