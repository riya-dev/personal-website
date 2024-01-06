import '../styles/links.css'
import Image from 'next/image'
import github from '/public/static/images/socials/github.png'
import linkedin from '/public/static/images/socials/linkedin.png'
import twitter from '/public/static/images/socials/twitter.png'

const Links = () => {
    return(
        <>
            <div className="links-container" id="links">
                <section className="links-section">
                    <h1 className="text-purple-900">Find me Online</h1>
                    <section className="socials-section md:grid md:grid-cols-3 md:gap-3">
                        <a href="https://github.com/riya-dev">
                            <Image
                                src={github} alt="Riya Dev GitHub link: https://github.com/riya-dev" draggable="false"
                                style={{width: 'auto', height: 'auto' }}
                                className="object-none justify-center object-center hover:scale-110
                                        transition-all duration-500 cursor-pointer p-1" />
                                        {/* w-80 h-80 */}
                            <a className="socials-text">Github</a>
                        </a>

                        <a href="https://www.linkedin.com/in/riya-dev/">
                            <Image
                                src={linkedin} alt="Riya Dev LinkedIn link: https://www.linkedin.com/in/riya-dev/" draggable="false"
                                style={{width: 'auto', height: 'auto' }}
                                className="object-none justify-center object-center hover:scale-110
                                        transition-all duration-500 cursor-pointer p-1" />
                                        {/* w-80 h-80 */}
                            <a className="socials-text">LinkedIn</a>
                        </a>

                        <a href="https://twitter.com/ceoRiya">
                            <Image
                                src={twitter} alt="Riya Dev Twitter link: https://twitter.com/ceoRiya" draggable="false"
                                style={{ width: '75%', height: '75%', objectFit: 'cover' }}
                                className="object-none justify-center object-center hover:scale-110
                                        transition-all duration-500 cursor-pointer p-1" />
                                        {/* w-80 h-80 */}
                            <a className="socials-text">X (Twitter)</a>
                        </a>
                    </section>
                </section>
            </div>
        </>
    );
}

export default Links