import { styles } from "../styles";
import * as Scroll from 'react-scroll';

const Contact = () => {


     const scroller = Scroll.scroller;

  const scrollToAnchor = () => {
    scroller.scrollTo('hero', {
      duration: 100,
      delay: 100,
      smooth: true,
      offset: 50
    });
  }

  return (
    <section className="px-6 pb-20">

      <h3
        style={{ marginLeft: 60 }}
        className={styles.sectionHeadText}
      >
        Contact Me
      </h3>

      <div className="mt-10 flex flex-col md:flex-row gap-10 max-w-6xl mx-auto">

        {/* Left - Message */}
        <div className="flex-1 green-pink-gradient rounded-2xl p-8 shadow-md">

          <h4 className="text-2xl font-bold text-black">
            Let's work together!
          </h4>

          <p className="mt-4 text-black/80 leading-7">
            I'm always open to discussing new opportunities, interesting
            projects, or just having a conversation about technology.
          </p>

          <p className="mt-4 text-black/80 leading-7">
            If you have something in mind, feel free to reach out.
          </p>

        </div>

        {/* Right - Contact details */}
        <div className="flex-1 flex flex-col gap-5">

          <a
            href="mailto:sarath.thedev@gmail.com"
            className="yellow-gradient rounded-2xl p-6 shadow-md
                       hover:scale-[1.02] transition-transform duration-200"
          >
            <p className="text-sm text-black/60">
              Email
            </p>

            <p className="mt-1 text-lg font-semibold text-black">
              sarath.thedev@gmail.com
            </p>
          </a>

          <a
            href="https://www.linkedin.com/in/sarath-u-81485b1a6/"
            target="_blank"
            rel="noopener noreferrer"
            className="yellow-gradient rounded-2xl p-6 shadow-md
                       hover:scale-[1.02] transition-transform duration-200"
          >
            <p className="text-sm text-black/60">
              LinkedIn
            </p>

            <p className="mt-1 text-lg font-semibold text-black">
              Let's connect on LinkedIn
            </p>
          </a>

          <a
            href="https://github.com/EmperorSARATH"
            target="_blank"
            rel="noopener noreferrer"
            className="yellow-gradient rounded-2xl p-6 shadow-md
                       hover:scale-[1.02] transition-transform duration-200"
          >
            <p className="text-sm text-black/60">
              GitHub
            </p>

            <p className="mt-1 text-lg font-semibold text-black">
              Check out my projects
            </p>
          </a>

        </div>

      </div>

      {/* Back to top */}
      <div className="mt-16 flex justify-center">
        <div className="w-[65px] h-[105px] rounded-full border-2 border-secondary flex justify-center items-center hover:border-green-500">
          <button onClick={scrollToAnchor}>
            Go To Top
          </button>
        </div>
      </div>

    </section>
  );
};

export default Contact;
