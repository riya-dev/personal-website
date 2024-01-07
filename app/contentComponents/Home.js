import Image from 'next/image'
import '../styles/home.css'
import Riya from '/public/static/images/pfp.jpg'
import { RiArrowDropDownLine } from 'react-icons/ri';

const Home = () => {
    return(
        <>
            <div className="home-container" id="home">
                <section className="home-section">
                    {/* <Image 
                        src={Riya}
                        alt="Picture of Riya Dev in from of laptop with TJHSST sticker."
                        draggable="false"
                        className="home-image rounded-full
                                    hover:scale-110 transition-all duration-500" />  */}
                    <div className="home-image-div"
                        alt="Picture of Riya Dev using laptop with TJHSST sticker."></div>
                    {/* add animation when clicking. explode confetti or music notes or something */}

                    <h1 className="highlight text-purple-900">
                        Riya Dev
                    </h1>

                    {/* 리야 데브 */}
                    <h2 className="text-purple-900">Software Engineer • Innovator • Singer</h2>

                    <div className="arrow bounce">
                        <a href="#about"
                            alt="Scroll to about section">
                            <RiArrowDropDownLine size="72" className="text-purple-900" />
                        </a>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Home