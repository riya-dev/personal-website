import '../styles/links.css'
import Image from 'next/image'
import github from '/public/static/images/socials/github.png'
import linkedin from '/public/static/images/socials/linkedin.png'
import twitter from '/public/static/images/socials/twitter.png'

const Links = () => {
    return(
        <>
            <div class="links-container" id="links">
                <section class="links-section">
                    <h1 class="text-purple-900">Find me Online!</h1>
                    <section class="socials-section grid grid-cols-3 gap-3">
                        <a href="https://github.com/riya-dev">
                            <Image
                                src={github} alt="My GitHub: https://github.com/riya-dev!" draggable="false"
                                style={{width: 'auto', height: 'auto' }}
                                className="object-none justify-center object-center hover:scale-110
                                        transition-all duration-500 cursor-pointer p-1" />
                                        {/* w-80 h-80 */}
                        </a>

                        <a href="https://www.linkedin.com/in/riya-dev/">
                            <Image
                                src={linkedin} alt="My LinkedIn!" draggable="false"
                                style={{width: 'auto', height: 'auto' }}
                                className="object-none justify-center object-center hover:scale-110
                                        transition-all duration-500 cursor-pointer p-1" />
                                        {/* w-80 h-80 */}
                        </a>

                        <a href="https://twitter.com/ceoRiya">
                            <Image
                                src={twitter} alt="My Twitter!" draggable="false"
                                style={{width: 'auto', height: 'auto' }}
                                className="object-none justify-center object-center hover:scale-110
                                        transition-all duration-500 cursor-pointer p-1" />
                                        {/* w-80 h-80 */}
                        </a>

                        <a class="socials-text" 
                            href="https://github.com/riya-dev" >
                            GitHub
                        </a>

                        <a class="socials-text" 
                            href="https://www.linkedin.com/in/riya-dev/" >
                            LinkedIn
                        </a>

                        <a class="socials-text" 
                            href="https://twitter.com/ceoRiya" >
                            Twitter
                        </a>
                    </section>
                </section>
            </div>
        </>
    );
}

export default Links