import { BsPlus, BsFillLightningChargeFill, BsFillLightningFill, BsGearFill } from 'react-icons/bs';
import { RiGraduationCapFill, RiGraduationCapLine, RiGithubFill, RiGithubLine, 
        RiCodeBoxFill, RiCodeBoxLine, RiMicFill, RiMicLine, RiMickeyFill, RiMickeyLine } from 'react-icons/ri';

const SideBar = () => {
    return (
        <>
            <div className="fixed top-0 left-0 h-20 w-screen m-0
                            flex flex-row items-center
                            bg-purple-900 text-white shadow-lg">
                                
                <a href="#home" class="text-center self-center h-16 w-96 ml-2 text-3xl
                            text-purple-400 hover:text-white font-bold py-4 px-center rounded-3xl
                            hover:text-4xl hover:py-3 transition-all ease-in">
                    Riya Dev
                </a>
                
                {/* <Divider /> */}
                <SideBarIcon icon={<RiMickeyFill size="36"/>} text={"About"} link={"about"} /> {/*home page*/}
                {/* <Divider /> */}
                <SideBarIcon icon={<RiGraduationCapFill size="36"/>} text={"Education"} link={"education"} /> {/*education page*/}
                {/* <Divider /> */}
                <SideBarIcon icon={<RiCodeBoxFill size="36"/>} text={"Projects"} link={"projects"} /> {/*project page*/}
                {/* <Divider /> */}
                <SideBarIcon icon={<BsFillLightningChargeFill size="36"/>} text={"Skills"} link={"skills"} /> {/*project page*/}
                {/* <Divider /> */}
                <SideBarIcon icon={<RiGithubFill size="36"/>} text={"Links"} link={"https://www.linkedin.com/in/riya-dev/"}/> {/*links page*/}
                
            </div>
        </>
    );
};

const SideBarIcon = ({icon, text, link}) => (
    <a href="#about" className="sidebar-icon group">
        {icon}
        <span class="sidebar-tooltip group-hover:scale-100">
            {text}
        </span>
    </a>
);

const Divider = () => <hr className="sidebar-hr" />;

export default SideBar;