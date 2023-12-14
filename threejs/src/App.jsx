import {BrowserRouter,Routes,Route} from "react-router-dom";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import * as Scroll from 'react-scroll';


function App() {
  const Element = Scroll.Element;
  return (
    <BrowserRouter>
     <div className='relative z-0 bg-primary '>
     <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
      <Routes>
      <Element name="hero">
      <Route path="/" exact element={<Hero/>}/>
      </Element>
      <Route path="/" exact element={<About/>}/>
        <br/> <br/> <br/> <br/> <br/> <br/><br/> 
        <Route path="/" exact element={<Projects/>}/>
      </Routes>
        </div>
     </div>

    </BrowserRouter>
  );
}

export default App;
