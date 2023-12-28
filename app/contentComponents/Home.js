import Image from 'next/image'
import '../styles/home.css'
import Riya from '/public/static/images/pfp.jpg'
import { FaArrowDown } from 'react-icons/fa';
// "../../components/images/pfp.jpg"?

const Home = () => {
    return(
        <>
            <div className="home-container" id="home">
                <section className="home-section">
                    <Image 
                        src={Riya}
                        alt="This is me"
                        draggable="false"
                    // add animation when clicking. explode confetti or music notes or something
                        className="home-image object-none w-96 h-96 rounded-full self-center justify-center object-center
                                    hover:scale-110 transition-all duration-500" /> 

                    <h1 className="highlight text-purple-900">
                        Riya Dev
                    </h1>

                    {/* 리야 데브 */}
                    <h2 className="text-purple-900">Software Engineer • Innovator • Singer</h2>

                    <div className="arrow bounce">
                        <a href="#about">
                            <FaArrowDown className="text-purple-900" />
                        </a>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Home