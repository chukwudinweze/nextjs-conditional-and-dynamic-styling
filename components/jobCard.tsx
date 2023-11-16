import { IconType } from "react-icons";
import { TbPointFilled } from "react-icons/tb";

interface JobCardProps {
  type: string;
  title: string;
  company: string;
  location: string;
  time: string;
  logo: IconType;
}

const JobCard = ({
  company,
  location,
  title,
  type,
  time,
  logo: Logo,
}: JobCardProps) => {
  return (
    <div className=" bg-white space-y-8 py-5 px-5 relative ">
      <div className="space-y-2 ">
        <span className="absolute top-0 transform -translate-y-1/2">
          <Logo />
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
