import { FaInnosoft } from "react-icons/fa";
import {
  SiBmcsoftware,
  SiJirasoftware,
  SiMicrosoftacademic,
  SiUbisoft,
  SiMulesoft,
  SiAccusoft,
  SiMicrosoftoffice,
  SiAtlassian,
  SiArtstation,
  SiCircleci,
} from "react-icons/si";
import { RiMicrosoftLoopLine } from "react-icons/ri";
import { IconType } from "react-icons";

export const jobs: {
  type: string;
  title: string;
  company: string;
  location: string;
  time: string;
  logo: IconType;
  logoBgColor: string;
}[] = [
  {
    type: "Full Time",
    title: "Senior Software Engineer",
    company: "Scot",
    location: "United Kingdom",
    time: "5h ago",
    logo: FaInnosoft,
    logoBgColor: "bg-yellow-600",
  },
  {
    type: "Part Time",
    title: "Haskell and PureScript Dev Engineer",
    company: "Blogr",
    location: "United States",
    time: "20h ago",
    logo: SiBmcsoftware,
    logoBgColor: "bg-orange-500",
  },
  {
    type: "Part Time",
    title: "Midlevel Back End Engineer",
    company: "Vector",
    location: "Russia",
    time: "1d ago",
    logo: RiMicrosoftLoopLine,
    logoBgColor: "bg-black",
  },
  {
    type: "Full time",
    title: "Senior Application Engineer",
    company: "Ofice Lite",
    location: "Japan",
    logo: SiJirasoftware,
    time: "2d ago",
    logoBgColor: "bg-blue-500",
  },
  {
    type: "Part time",
    title: "Remote Devops Engineer",
    company: "Pod",
    location: "Thailand",
    time: "2d ago",
    logo: SiMicrosoftacademic,
    logoBgColor: "bg-black",
  },
  {
    type: "Part time",
    title: "Desktop Support Manager",
    company: "Creative",
    location: "Germany",
    time: "4d ago",
    logo: SiUbisoft,
    logoBgColor: "bg-red-950",
  },
  {
    type: "Full time",
    title: "iOS Engineer",
    company: "Pomodaro",
    location: "United States",
    time: "1w ago",
    logo: SiMulesoft,
    logoBgColor: "bg-purple-700",
  },
  {
    type: "Full time",
    title: "Senior EJB Developer",
    company: "Maker",
    location: "United Kingdom",
    time: "1w ago",
    logo: SiAccusoft,
    logoBgColor: "bg-blue-950",
  },
  {
    type: "Part time",
    title: "Senior EJB Developer",
    company: "Coffeeroasters",
    location: "Singapore",
    time: "1w ago",
    logo: SiMicrosoftoffice,
    logoBgColor: "bg-slate-300",
  },
  {
    type: "Freelance",
    title: "App & Website Designer",
    company: "Mastercraft",
    location: "United States",
    time: "2w ago",
    logo: SiAtlassian,
    logoBgColor: "bg-black",
  },
  {
    type: "Part time",
    title: "Fullstack Developer",
    company: "Crowdfund",
    location: "New Zealand",
    time: "1mo ago",
    logo: SiArtstation,
    logoBgColor: '"bg-emerald-300',
  },
  {
    type: "Part time",
    title: "Technical Lead Engineer",
    company: "TypeMaster",
    location: "United Kingdom",
    time: "1mo ago",
    logo: SiCircleci,
    logoBgColor: "bg-orange-500",
  },
];
