
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import * as Scroll from 'react-scroll';


function App() {
  const Element = Scroll.Element;
  return (
   <div>
     <div className='relative z-0 bg-primary '>
     <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
      <Element name="hero">
          <Hero/>

      </Element>
        <About/>
        <br/> <br/> <br/> <br/> <br/> <br/><br/> 
        <Projects/>
        </div>
     </div>

     </div>
  );
}

export default App;
