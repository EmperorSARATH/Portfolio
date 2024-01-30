import { Tilt } from "react-tilt";
import { React } from "react";
import { styles } from "../styles";
import HealthCare from "../assets/HealthCare.png"
import Ecommerce from "../assets/Ecommerce.png"
import anime from "../assets/anime.png"
import examportal from "../assets/examportal.jpg"
import * as Scroll from 'react-scroll';

const Projects = () => {
    const scroller = Scroll.scroller;

    const scrollToAnchor = () => {
        scroller.scrollTo('hero', {
            duration: 100,
            delay: 100,
            smooth: true,
            offset: 50
        });
    };

    var Projects = [
        {
            title: "Anime List",
            icon: anime,
            url: "https://github.com/EmperorSARATH/Anime-Movie-List-React"
        },
        {
            title: "Git-hub Analytics",
            icon: Ecommerce,
            url: "https://github-analytics-chi.vercel.app/"

        },
        {
            title: "healthcare",
            icon: HealthCare
        },
        {
            title: "Blog Web App",
            icon: examportal,
            url:"https://github.com/EmperorSARATH/Blog-webapp"
        }
    ];

    return (
        <section>
            <h3 style={{ marginLeft: 60 }} className={styles.sectionHeadText}>My Projects</h3>
            {Projects.map(project => {
                return (
                    <Tilt className='xs:min-w-[150px] sm:w-[250px] w-full  mt-10 inline-block ml-20 mb-10' key={project.title}>
                        <div
                            className='sm:min-w-[200px] xs:w-[200px] yellow-gradient py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
                        >
                            <a href={project.url} target="_blank">
                                <img src={project.icon} className="rounded-[20px] min-h-[100px] min-w-[100px] " />
                                <h3>{project.title}</h3>
                            </a>
                        </div>
                    </Tilt>
                )
            })}

            <div className='sm:w-[250px] xs:w-[250px] pb-20 mr-10 flex justify-center items-start'>
                <div className='w-[35px] h-[35px] rounded-3xl border-2 border-secondary flex justify-center items-start p-0'>
                    <button onClick={scrollToAnchor}>T</button>
                </div>
            </div>
        </section>
    )
}
export default Projects;
