import { BsPlus, BsFillLightningFill, BsGearFill } from 'react-icons/bs';
import { RiGraduationCapFill, RiGraduationCapLine, RiGithubFill, RiGithubLine, 
        RiCodeBoxFill, RiCodeBoxLine, RiMicFill, RiMicLine, RiMickeyFill, RiMickeyLine } from 'react-icons/ri';

const SideBar = () => {
    return (
        <div className="fixed top-0 left-0 h-screen w-16 m-0
                        flex flex-col 
                        bg-primary text-white shadow-lg">
            {/* <i>A</i>
            <i>B</i>
            <i>C</i>
            <i>D</i>
            <i>E</i> */}
            <SideBarIcon icon={<RiMickeyFill size="28"/>} text={"Home"} /> {/*home page*/}
            <SideBarIcon icon={<RiGraduationCapFill size="28"/>} text={"Education"} /> {/*education page*/}
            <SideBarIcon icon={<RiCodeBoxFill size="28"/>} text={"Projects"} /> {/*project page*/}
            <SideBarIcon icon={<RiGithubFill size="28"/>} text={"Links"} /> {/*links page*/}
            
        </div>
    );
};

const SideBarIcon = ({icon, text='tooltip'}) => (
    <div className="sidebar-icon group">
        {icon}
        <span class="sidebar-tooltip group-hover:scale-100">
            {text}
        </span>
    </div>
);

export default SideBar;