import { IconType } from "react-icons";

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
    <div className="p3">
      <span>
        <Logo />
      </span>
      <p>
        {time} <span className="font-bold">.</span> {type}
      </p>
      <p className="font-bold text-black">{title}</p>
      <p>{company}</p>
      <p className="text-brandColor font-bold">{location}</p>
    </div>
  );
};

export default JobCard;
