import SchoolIcon from "@mui/icons-material/School";
// import MenuBookIcon from "@mui/icons-material/MenuBook";
import WifiIcon from "@mui/icons-material/Wifi";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import ResearchIcon from "@mui/icons-material/Science";
import PeopleIcon from "@mui/icons-material/People";
import HomeIcon from "@mui/icons-material/Home";
import SelfImprovementIcon from "@mui/icons-material/SelfImprovement";
import CelebrationIcon from "@mui/icons-material/Celebration";
import StorageIcon from "@mui/icons-material/Storage";
import VpnLockIcon from "@mui/icons-material/VpnLock";

const linkCategories = [
  {
    title: "Academics",
    links: [
      {
        name: "Courses",
        url: "https://courses.iiit.ac.in",
        icon: <SchoolIcon />,
        requiresVPN: true,
      },
      // {
      //   name: "Old Courses Portal",
      //   url: "https://courses-old.iiit.ac.in",
      //   icon: <MenuBookIcon />,
      //   requiresVPN: true,
      // },
      {
        name: "Intranet",
        url: "https://intranet.iiit.ac.in",
        icon: <WifiIcon />,
        requiresVPN: true,
      },
      {
        name: "Library",
        url: "https://library.iiit.ac.in",
        icon: <LibraryBooksIcon />,
        requiresVPN: false,
      },
    ],
  },
  {
    title: "Research",
    links: [
      {
        name: "Seminar",
        url: "https://web2py.iiit.ac.in/seminar/default/home",
        icon: <SchoolIcon />,
        requiresVPN: false,
      },
      {
        name: "Research Centres",
        url: "https://web2py.iiit.ac.in/research_centres",
        icon: <ResearchIcon />,
        requiresVPN: false,
      },
      {
        name: "Publications Portal",
        url: "https://web2py.iiit.ac.in/research_centres/publications/",
        icon: <LibraryBooksIcon />,
        requiresVPN: false,
      },
      {
        name: "Ada User Guide",
        url: "https://hpc.iiit.ac.in/wiki/index.php/Ada_User_Guide",
        icon: <StorageIcon />,
        requiresVPN: false,
      },
    ],
  },
  {
    title: "Campus Life",
    links: [
      {
        name: "Club Events",
        url: "https://clubs.iiit.ac.in/events/",
        icon: <CelebrationIcon />,
        requiresVPN: false,
      },
      {
        name: "Blog",
        url: "https://blogs.iiit.ac.in/",
        icon: <HomeIcon />,
        requiresVPN: false,
      },
      {
        name: "Mess",
        url: "https://mess.iiit.ac.in",
        icon: <SelfImprovementIcon />,
        requiresVPN: true,
      },
      {
        name: "Courier",
        url: "https://courier.iiit.ac.in/portal/main1.php",
        icon: <SelfImprovementIcon />,
        requiresVPN: true,
      },
      {
        name: "Alumni",
        url: "https://alumni.iiit.ac.in/",
        icon: <PeopleIcon />,
        requiresVPN: false,
      },
    ],
  },
];

const Miscellaneous = [
  {
    name: "IT Self Help",
    url: "https://self-help.iiit.ac.in/",
    icon: <PeopleIcon />,
    requiresVPN: true,
    description: "IT help website",
  },
  {
    name: "Password Reset",
    url: "https://passwordreset.iiit.ac.in/",
    icon: <PeopleIcon />,
    requiresVPN: false,
    description: "Password Reset",
  },
  {
    name: "Help Ticket",
    url: "https://help.iiit.ac.in/",
    icon: <PeopleIcon />,
    requiresVPN: false,
    description: "Help Ticket",
  },
  {
    name: "VPN",
    url: "https://vpn.iiit.ac.in/",
    icon: <VpnLockIcon />,
    requiresVPN: false,
    description: "VPN",
  },
];

const popularPortals = [
  {
    name: "IMS",
    url: "https://ims.iiit.ac.in",
    icon: <SchoolIcon />,
    requiresVPN: true,
    description: "Integrated Management System",
  },
  {
    name: "Intranet",
    url: "https://intranet.iiit.ac.in",
    icon: <WifiIcon />,
    requiresVPN: true,
    description: "Internal Network Access",
  },
  {
    name: "Mess",
    url: "https://mess.iiit.ac.in",
    icon: <SelfImprovementIcon />,
    requiresVPN: true,
    description: "Mess Menu and Services",
  },
  {
    name: "IT Self-Help",
    url: "https://self-help.iiit.ac.in/",
    icon: <PeopleIcon />,
    requiresVPN: true,
    description: "Technical Assistance",
  },
  {
    name: "Blog",
    url: "https://blogs.iiit.ac.in",
    icon: <HomeIcon />,
    requiresVPN: false,
    description: "Campus Blogs and Stories",
  },
];

export { linkCategories, popularPortals, Miscellaneous };
