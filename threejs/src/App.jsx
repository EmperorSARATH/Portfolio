
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import * as Scroll from 'react-scroll';


function App() {
    const Element = Scroll.Element;
    return (
        <div>
            <div className='relative z-0 bg-primary '>
                <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
                    <Element name="hero">
                        <Hero />

                    </Element>
                    <About />
                    <br /> <br /> <br /> <br /> <br /> <br /><br />
                    <Projects />
                    <section className="mt-32">
                        <Contact/>
                    </section>
                </div>
            </div>

        </div>
    );
}

export default App;
