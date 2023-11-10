import { BiMap, BiSearch } from "react-icons/bi";
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";

const Nav = () => {
  return (
    <nav className=" flex justify-between lg:mx-20 divide-x-2 shadow-sm p-1 md:translate-y-[-50%] bg-white rounded-sm overflow-x-auto">
      <div className="flex justify-between flex-1 items-center">
        <BiSearch />
        {/* search icon goes here */}
        <input
          type="text"
          placeholder="filter by size, companies or expertise"
          className="p-1 flex-1 "
        />
      </div>
      <div className="flex flex-1 w-full items-center">
        <BiMap />
        {/* location icon goes here  */}
        <input
          type="text"
          placeholder="filter by location"
          className="flex-1 p-1"
        />
      </div>
      <div className="flex flex-1 justify-between w-full items-center ">
        <MdOutlineCheckBoxOutlineBlank />
        {/* location icon goes here  */}
        <input
          type="text"
          placeholder="filter by location"
          className="flex-1 p-1 "
        />
      </div>
    </nav>
  );
};

export default Nav;
