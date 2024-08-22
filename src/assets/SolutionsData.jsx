import { GrDocumentTest } from "react-icons/gr";
import { MdOutlineDesignServices, MdOutlineDataExploration } from "react-icons/md";
import { GiPsychicWaves,GiTeamUpgrade  } from "react-icons/gi";
import { SiHiveBlockchain} from "react-icons/si";




const SolutionsData = [
    {
        id:1,
        icon: <GrDocumentTest />,
        title: "Application Development",
        desc: "Custom application development services, delivering scalable, secure, and user-friendly solutions tailored to your business needs, driving digital transformation.",
        more: ""
    },

    {
        id:2,
        icon: <MdOutlineDesignServices />,
        title: "UX/UI Design Services",
        desc: "Expert UX/UI design services, crafting intuitive, visually appealing interfaces that enhance user experience and drive customer engagement.",
        more: ""
    },


    {
        id:3,
        icon: <GiPsychicWaves />,
        title: "Net fee solutions",
        desc: "Optimizing network costs with transparent billing, efficient management, and customized plans to maximize your connectivity budget.",
        more:""
    },

    {
        id:4,
        icon: <MdOutlineDataExploration />,
        title: "Data Analytics & BI",
        desc: "Converting raw data into actionable insights with advanced analytics, interactive dashboards, and data-driven strategies to empower informed business decisions.",
        more: ""
    },

    {
        id:5,
        icon: <SiHiveBlockchain />,
        title: "Blockchain Development",
        desc: "Blockchain development services, creating secure, decentralized applications and smart contracts, enabling transparent, efficient, and scalable solutions for various industries.",
        more: ""
    },

    {
        id:6,
        icon: <GiTeamUpgrade />,
        title: "Team Augmentation",
        desc: "providing skilled professionals to seamlessly integrate with your team, enhancing your project's capacity, expertise, and flexibility for timely and successful delivery.",
        more: ""
    },
]



export default SolutionsData;