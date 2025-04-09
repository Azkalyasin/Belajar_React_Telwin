
import Header from "./component/Header";
import About from "./component/About";
import Projects from "./component/Projects";
import Testimonials from "./component/Testimonials";
import Contact from "./component/Contact";
import Footer from "./component/Footer";
function App() {


  return (
    <>
    <div className="overflow-hidden w-full">
      <Header/>
      <About/>
      <Projects/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </div>
    </>
  );
}

export default App;
