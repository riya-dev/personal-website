// "use client"
// import { useState, useEffect } from 'react';
import { BsPlus, BsFillLightningChargeFill, BsFillLightningFill, BsGearFill } from 'react-icons/bs';
import { RiGraduationCapFill, RiGraduationCapLine, RiGithubFill, RiGithubLine, 
        RiCodeBoxFill, RiCodeBoxLine, RiMicFill, RiMicLine, RiMickeyFill, RiMickeyLine } from 'react-icons/ri';

const NavBar = () => {
    // const [isClient, setIsClient] = useState(false)
    // const [scrollPercentage, setScrollPercentage] = useState(0);

    // useEffect(() => {
    //     setIsClient(true)
    //     const handleScroll = () => {
    //         const scrollPosition = window.scrollY;
    //         const viewportHeight = window.innerHeight;
    //         const percentage = (scrollPosition / viewportHeight) * 100;

    //         setScrollPercentage(percentage);
    //     };

    //     window.addEventListener('scroll', handleScroll);

    //     return () => {
    //         window.removeEventListener('scroll', handleScroll);
    //     };
    // }, []);

    // const navbarColor = scrollPercentage > 50 ? 'bg-purple-900' : 'bg-transparent';
    // const textColor = scrollPercentage > 50 ? 'text-white' : 'text-purple-400';

    return (
        <>
            <div className="navbar fixed top-0 left-0 h-20 w-screen m-0 flex flex-row
                            items-center bg-purple-900 text-white shadow-lg">
                                {/* ${navbarColor} ${textColor} */}
                                
                <a href="#home" className="text-center self-center h-16 w-96 ml-2 hover:underline decoration-dotted
                    text-3xl text-purple-300 font-bold py-4 px-center rounded-3xl col-span-3
                    hover:text-white hover:text-4xl hover:py-3 transition-all ease-in">
                    Riya Dev
                </a>
                
                <NavBarIcon icon={<RiMickeyFill size="36"/>} text={"About"} link={"#about"} /> {/*home page*/}

                <NavBarIcon icon={<RiGraduationCapFill size="36"/>} text={"Education"} link={"#education"} /> {/*education page*/}

                <NavBarIcon icon={<BsFillLightningChargeFill size="36"/>} text={"Skills"} link={"#skills"} /> {/*project page*/}

                <NavBarIcon icon={<RiCodeBoxFill size="36"/>} text={"Projects"} link={"#projects"} /> {/*project page*/}

                <NavBarIcon icon={<RiGithubFill size="36"/>} text={"Links"} link={"#links"} /> {/*links page*/}

                {/* Dark Mode */}
            
            </div>
        </>
    );
};

const NavBarIcon = ({icon, text, link}) => (
    <a href={link} className="navbar-icon group">
        {icon}
        <span className="navbar-tooltip group-hover:scale-100">
            {text}
        </span>
    </a>
);

const Divider = () => <hr className="navbar-hr" />;

export default NavBar;