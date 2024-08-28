import { MdOutlineDataExploration } from "react-icons/md";
import { GiPsychicWaves,GiTeamUpgrade  } from "react-icons/gi";
import { SiHiveBlockchain} from "react-icons/si";

import { FaHome,FaBuilding} from "react-icons/fa";





const SolutionsData = [
    {
        id:1,
        icon: <FaHome />,
        title: "Home Internet",
        desc: "Get ready for more potential and more opportunity.",
        more: ""
    },

    {
        id:2,
        icon: <FaBuilding />,
        title: "Corporate Connectivity",
        desc: "More than 400 corporate clients have trust in us.",
        more: ""
    },


    {
        id:3,
        icon: <GiPsychicWaves />,
        title: "SME Internet",
        desc: "Designed for more speed within a reasonable price.",
        more:""
    },

    {
        id:4,
        icon: <MdOutlineDataExploration />,
        title: "Dedicated Server",
        desc: "Powerful Dedicated SSD Hosting with Root Access.",
        more: ""
    },

    {
        id:5,
        icon: <SiHiveBlockchain />,
        title: "GPS Tracker",
        desc: "Suitable for personal use or any type of business.",
        more: ""
    },

    {
        id:6,
        icon: <GiTeamUpgrade />,
        title: "Business Email",
        desc: "The most well-known which is said to have originated.",
        more: ""
    },
]



export default SolutionsData;