import { BsPlus, BsFillLightningChargeFill, BsFillLightningFill, BsGearFill } from 'react-icons/bs';
import { RiGraduationCapFill, RiGraduationCapLine, RiGithubFill, RiGithubLine, 
        RiCodeBoxFill, RiCodeBoxLine, RiMicFill, RiMicLine, RiMickeyFill, RiMickeyLine } from 'react-icons/ri';

const NavBar = () => {
    return (
        <>
            <div className="fixed top-0 left-0 h-20 w-screen m-0
                            flex flex-row items-center
                            bg-purple-900 text-white shadow-lg">
                                
                <a href="#home" className="text-center self-center h-16 w-96 ml-2 hover:underline decoration-dotted
                    text-3xl text-purple-400 font-bold py-4 px-center rounded-3xl
                    hover:text-white hover:text-4xl hover:py-3 transition-all ease-in">
                    Riya Dev
                </a>
                
                {/* <Divider /> */}
                {/* <a href="#about"> */}
                    <NavBarIcon icon={<RiMickeyFill size="36"/>} text={"About"} /> {/*home page*/}
                {/* </a> */}
                {/* <Divider /> */}
                {/* <a href="#education"> */}
                    <NavBarIcon icon={<RiGraduationCapFill size="36"/>} text={"Education"} link={"education"} /> {/*education page*/}
                {/* </a> */}
                {/* <Divider /> */}
                {/* <a href="#projects"> */}
                    <NavBarIcon icon={<RiCodeBoxFill size="36"/>} text={"Projects"} link={"projects"} /> {/*project page*/}
                {/* </a> */}
                {/* <Divider /> */}
                {/* <a href="#skills"> */}
                    <NavBarIcon icon={<BsFillLightningChargeFill size="36"/>} text={"Skills"} link={"skills"} /> {/*project page*/}
                {/* </a> */}
                {/* <Divider /> */}
                {/* <a href="https://www.linkedin.com/in/riya-dev/"> */}
                    <NavBarIcon icon={<RiGithubFill size="36"/>} text={"Links"}/> {/*links page*/}
                {/* </a> */}
            </div>
        </>
    );
};

const NavBarIcon = ({icon, text, link}) => (
    <div className="navbar-icon group">
        {icon}
        <span className="navbar-tooltip group-hover:scale-100">
            {text}
        </span>
    </div>
);

const Divider = () => <hr className="navbar-hr" />;

export default NavBar;