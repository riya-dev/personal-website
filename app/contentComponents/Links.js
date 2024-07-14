import '../styles/links.css'
import Image from 'next/image'
import github from '/public/static/images/socials/github.png'
import linkedin from '/public/static/images/socials/linkedin.png'
import twitter from '/public/static/images/socials/twitter.png'

const Links = () => {
    return (
      <>
        <div className="links-container" id="links">
          <section className="links-section">
            <h1 className="text-purple-900">Find me Online</h1>
            <section className="socials-section md:grid md:grid-cols-3 md:gap-3">
              <div>
                <a href="https://github.com/riya-dev">
                  <Image
                    src={github}
                    alt="Riya Dev GitHub link: https://github.com/riya-dev"
                    draggable="false"
                    style={{ width: "auto", height: "auto" }}
                    className="object-none justify-center object-center hover:scale-110
                                            transition-all duration-500 cursor-pointer p-1"
                  />
                  {/* w-80 h-80 */}
                </a>
                <a
                  href="https://github.com/riya-dev"
                  className="socials-text"
                  title="Riya Dev GitHub profile"
                >
                  Github
                </a>
              </div>

              <div>
                <a href="https://www.linkedin.com/in/riya-dev/">
                  <Image
                    src={linkedin}
                    alt="Riya Dev LinkedIn link: https://www.linkedin.com/in/riya-dev/"
                    draggable="false"
                    style={{
                      width: "75%",
                      height: "75%",
                      marginBottom: "3px",
                    }}
                    className="object-none justify-center object-center hover:scale-105
                                            transition-all duration-500 cursor-pointer p-1"
                  />
                  {/* w-80 h-80 */}
                </a>
                <a
                  href="https://www.linkedin.com/in/riya-dev/"
                  className="socials-text"
                  title="Riya Dev LinkedIn profile"
                >
                  LinkedIn
                </a>
              </div>

              <div>
                <a href="https://twitter.com/ceoRiya">
                  <Image
                    src={twitter}
                    alt="Riya Dev Twitter link: https://twitter.com/ceoRiya"
                    draggable="false"
                    style={{ width: "75%", height: "75%", objectFit: "cover" }}
                    className="object-none justify-center object-center hover:scale-110
                                            transition-all duration-500 cursor-pointer p-1"
                  />
                  {/* w-80 h-80 */}
                </a>
                <a
                  href="https://twitter.com/ceoRiya"
                  className="socials-text"
                  title="Riya Dev X(Twitter) profile"
                >
                  X (Twitter)
                </a>
              </div>
            </section>
          </section>
        </div>
      </>
    );
}

export default Links