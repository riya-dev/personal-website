import Image from 'next/image'
import '../styles/home.css'
import Riya from '/public/static/images/pfp.jpg'
// "../../components/images/pfp.jpg"?

const Home = () => {
    return(
        <>
            <div className="home-container" id="home">
                <section class="home-section">
                    <Image src={Riya} alt="This is me!" href="#"
                        className="home-image object-none w-96 h-96 rounded-full self-center justify-center object-center
                                    hover:scale-125 transition-all duration-500" /> 
                        {/* custom-position */}
                    {/* <Image src={Riya} width={200} height={250} alt="This is me!" class="home-image"></Image> */}
                    <h1 class="text-purple-900">Riya Dev</h1>
                    <h2 class="text-purple-900">Singing • Software Engineering • Innovating</h2>
                </section>
            </div>
        </>
    )
}

export default Home