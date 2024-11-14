import '../styles/about.css'
import { RiArrowDropDownLine } from 'react-icons/ri';

const About = () => {
    return (
      <>
        <div className="about-container" id="about">
          <section className="about-section">
            <h1 className="text-purple-900 text-5xl font-extrabold mb-4">
              About Me
            </h1>
            <div className="about-description">
              <p className="tracking-wider text-lg font-semibold">
                I am Riya Dev.
              </p>
              <p className="tracking-tight font-normal text-gray-700 mb-4">
                I've been coding since the age of 9 when I wrote my first
                JavaScript program — a Samsung Galaxy S4 clone. Intrigued by the
                boundless possibilities of code, I pursued an Artificial
                Intelligence course in high school, where I built games like
                Othello and Connect 4 and their solvers, and utilized tools like
                Pomegranate for neural networks and Pillow for image analysis.
                Venturing into the realm of image-based AI, I later explored
                Computer Vision. I've also undertaken several internships over
                the past few years. Forever a builder, I continuously expand my
                technological toolkit to kickstart more projects and build
                impactful innovations.
              </p>
              <p className="tracking-tight font-normal text-gray-800 mb-4">
                When I'm not coding, you can find me singing to Adele, gushing
                over the latest fashion shows, listening to my favorite podcasts
                (Morning Brew Daily and How I Built This are my favorites), or
                trading in the markets.
              </p>
            </div>

            <div className="logo-ribbon">
              <div className="logo-ribbon-content">
                <img
                  src="/static/logos/amazon.png"
                  alt="Amazon"
                  className="logo"
                />
                <img src="/static/logos/ross.jpg" alt="Ross" className="logo" />
                <img
                  src="/static/logos/tjhsst.png"
                  alt="TJHSST"
                  className="logo"
                />
                <img
                  src="/static/logos/v1michigan.jpeg"
                  alt="V1 @ Michigan"
                  className="logo"
                />
                <img
                  src="/static/logos/engineering.png"
                  alt="Engineering"
                  className="logo"
                />
                <img
                  src="/static/logos/comma.png"
                  alt="Comma Capital"
                  className="logo"
                />
                <img
                  src="/static/logos/jackpot.png"
                  alt="Jackpot"
                  className="logo"
                />
                <img
                  src="/static/logos/foundess.png"
                  alt="Foundess"
                  className="logo"
                />

                <img
                  src="/static/logos/amazon.png"
                  alt="Amazon"
                  className="logo"
                />
                <img src="/static/logos/ross.jpg" alt="Ross" className="logo" />
                <img
                  src="/static/logos/tjhsst.png"
                  alt="TJHSST"
                  className="logo"
                />
                <img
                  src="/static/logos/v1michigan.jpeg"
                  alt="V1 @ Michigan"
                  className="logo"
                />
                <img
                  src="/static/logos/engineering.png"
                  alt="Engineering"
                  className="logo"
                />
                <img
                  src="/static/logos/comma.png"
                  alt="Comma Capital"
                  className="logo"
                />
                <img
                  src="/static/logos/jackpot.png"
                  alt="Jackpot"
                  className="logo"
                />
                <img
                  src="/static/logos/foundess.png"
                  alt="Foundess"
                  className="logo"
                />

                <img
                  src="/static/logos/amazon.png"
                  alt="Amazon"
                  className="logo"
                />
                <img src="/static/logos/ross.jpg" alt="Ross" className="logo" />
                <img
                  src="/static/logos/tjhsst.png"
                  alt="TJHSST"
                  className="logo"
                />
                <img
                  src="/static/logos/v1michigan.jpeg"
                  alt="V1 @ Michigan"
                  className="logo"
                />
                <img
                  src="/static/logos/engineering.png"
                  alt="Engineering"
                  className="logo"
                />
                <img
                  src="/static/logos/comma.png"
                  alt="Comma Capital"
                  className="logo"
                />
                <img
                  src="/static/logos/jackpot.png"
                  alt="Jackpot"
                  className="logo"
                />
                <img
                  src="/static/logos/foundess.png"
                  alt="Foundess"
                  className="logo"
                />
              </div>
            </div>

            <div className="arrow bounce">
              <a href="#education" alt="Scroll to education section">
                <RiArrowDropDownLine
                  size="72"
                  className="text-purple-900 hover:text-purple-600 transition duration-300"
                />
              </a>
            </div>
          </section>
        </div>
      </>
    );
}

export default About;