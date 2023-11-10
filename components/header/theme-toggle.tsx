import { PiToggleLeftFill } from "react-icons/pi";
import { BiSun } from "react-icons/bi";
import { RiMoonFill } from "react-icons/ri";

const ThemeToggle = () => {
  return (
    <div className="flex space-x-1 items-center ml-auto">
      <BiSun className="text-white" />
      <PiToggleLeftFill className="text-white" size={30} />
      <RiMoonFill className="text-white" size={10} />
    </div>
  );
};

export default ThemeToggle;
