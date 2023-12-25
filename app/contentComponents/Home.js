import Image from 'next/image'
import '../styles/home.css'
import Riya from '/public/static/images/pfp.jpg'
import { RiArrowDownCircleLine } from 'react-icons/ri';
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
                    {/* <svg src={RiArrowDownCircleLine} className="animate-bounce w-12 h-12
                            bg-purple-800 text-purple-300 shadow-lg" /> */}
                    </section>
            </div>
        </>
    )
}

export default Home