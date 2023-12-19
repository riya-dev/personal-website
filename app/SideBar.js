import { BsPlus, BsFillLightningFill, BsGearFill } from 'react-icons/bs';
import { RiGraduationCapFill, RiGraduationCapLine, RiGithubFill, RiGithubLine, 
        RiCodeBoxFill, RiCodeBoxLine, RiMicFill, RiMicLine, RiMickeyFill, RiMickeyLine } from 'react-icons/ri';

const SideBar = () => {
    return (
        <>
            <div className="fixed top-0 left-0 h-screen w-32 m-0
                            flex flex-col items-center
                            bg-purple-900 text-white shadow-lg">
                {/* <i>A</i>
                <i>B</i>
                <i>C</i>
                <i>D</i>
                <i>E</i> */}
                <a href="#home" class="center justify-center h-24 w-24 mt-2 mb-2
                            text-purple-400 hover:text-white font-bold py-2 px-2 rounded-3xl">
                    Riya Dev
                </a>
                {/* <Divider /> */}
                <SideBarIcon icon={<RiMickeyFill size="36"/>} text={"Home"} /> {/*home page*/}
                {/* <Divider /> */}
                <SideBarIcon icon={<RiGraduationCapFill size="36"/>} text={"Education"} /> {/*education page*/}
                {/* <Divider /> */}
                <SideBarIcon icon={<RiCodeBoxFill size="36"/>} text={"Projects"} /> {/*project page*/}
                {/* <Divider /> */}
                <SideBarIcon icon={<RiGithubFill size="36"/>} text={"Links"} link={"https://www.linkedin.com/in/riya-dev/"}/> {/*links page*/}
                
            </div>
        </>
    );
};

const SideBarIcon = ({icon, text='tooltip'}) => (
    <div className="sidebar-icon group">
        {icon}
        <span class="sidebar-tooltip group-hover:scale-100">
            {text}
        </span>
        <a href="#title">

        </a>
    </div>
);

const Divider = () => <hr className="sidebar-hr" />;

export default SideBar;