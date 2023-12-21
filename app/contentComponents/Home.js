import Image from 'next/image'
import '../styles/home.css'
import Riya from '/public/static/images/pfp.jpg'
import { RiArrowDownCircleLine } from 'react-icons/ri';
// "../../components/images/pfp.jpg"?

const Home = () => {
    return(
        <>
            <div className="home-container" id="home">
                <section class="home-section">
                    <Image src={Riya} alt="This is me!" href="#"
                    // add animation when clicking. explode confetti or music notes or something
                        className="home-image custom-position object-none w-96 h-96 rounded-full self-center justify-center object-center
                                    hover:scale-125 transition-all duration-500 cursor-pointer" /> 
                        {/* custom-position */}
                    <h1 class="text-purple-900">Riya Dev</h1>
                    <h2 class="text-purple-900">Singing • Software Engineering • Innovating</h2>
                    {/* <svg src={RiArrowDownCircleLine} class="animate-bounce w-12 h-12
                            bg-purple-800 text-purple-300 shadow-lg" /> */}
                </section>
            </div>
        </>
    )
}

export default Home