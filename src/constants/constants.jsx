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
import CreditScoreIcon from '@mui/icons-material/CreditScore';
import AndroidIcon from '@mui/icons-material/Android';

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
        url: "https://research.iiit.ac.in/centers/",
        icon: <ResearchIcon />,
        requiresVPN: true,
      },
      {
        name: "Publications Portal",
        url: "https://research.iiit.ac.in/publications/",
        icon: <LibraryBooksIcon />,
        requiresVPN: true,
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
        name: "Events",
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
    name: "IIIT Services",
    url: "https://services.iiit.ac.in/",
    icon: <CreditScoreIcon />,
    requiresVPN: false,
    description: "IIIT Office Services Payments",
  },
  {
    name: "VPN",
    url: "https://vpn.iiit.ac.in/",
    icon: <VpnLockIcon />,
    requiresVPN: false,
    description: "VPN",
  },
  {
    name: "Password Reset",
    url: "https://passwordreset.iiit.ac.in/",
    icon: <PeopleIcon />,
    requiresVPN: false,
    description: "Password Reset",
  },
  {
    name: "IT Self Help",
    url: "https://self-help.iiit.ac.in/",
    icon: <PeopleIcon />,
    requiresVPN: true,
    description: "IT help website",
  },
  {
    name: "Help Ticket",
    url: "https://help.iiit.ac.in/",
    icon: <PeopleIcon />,
    requiresVPN: false,
    description: "Help Ticket",
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
  {
    name: "My IIIT App",
    url: "https://play.google.com/store/apps/details?id=com.iiith.ims_app&hl=en_IN",
    icon: <AndroidIcon />,
    requiresVPN: false,
    description: "'My IIIT' app Playstore link",
  },
];

export { linkCategories, popularPortals, Miscellaneous };
