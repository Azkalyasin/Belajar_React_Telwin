
import Header from "./component/Header";
import About from "./component/About";
import Projects from "./component/Projects";
import Testimonials from "./component/Testimonials";
function App() {


  return (
    <>
    <div className="overflow-hidden w-full">
      <Header/>
      <About/>
      <Projects/>
      <Testimonials/>
    </div>
    </>
  );
}

export default App;
