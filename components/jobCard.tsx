import { IconType } from "react-icons";
import { TbPointFilled } from "react-icons/tb";
import { IconBadge } from "./icon-badge";

interface JobCardProps {
  type: string;
  title: string;
  company: string;
  location: string;
  time: string;
  logo: IconType;
  logoBg: string;
}

const JobCard = ({
  company,
  location,
  title,
  type,
  time,
  logo,
  logoBg,
}: JobCardProps) => {
  return (
    <div className=" bg-white space-y-8 py-5 px-5 relative ">
      <div className="space-y-2 ">
        <span className="absolute top-0 transform -translate-y-1/2">
          {/* <Logo/> */}
          <IconBadge
            bgColor="darkBlue"
            iconColor="white"
            bgSize="sm"
            iconSize="sm"
            icon={logo}
          />
        </span>
        <div className="text-xs text-gray-400 flex items-center space-x-1 font-semibold">
          <p>{time}</p>
          <TbPointFilled size={8} />
          <p>{type}</p>
        </div>
        <p className="font-bold text-black text-sm">{title}</p>
        <p className="text-gray-400 text-xs font-semibold">{company}</p>
      </div>
      <p className="text-brandColor font-bold text-sm">{location}</p>
    </div>
  );
};

export default JobCard;
