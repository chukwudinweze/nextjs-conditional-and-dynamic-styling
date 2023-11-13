import { BiMap, BiSearch } from "react-icons/bi";
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import NavItem from "./nav-item";

const Nav = () => {
  return (
    <nav className=" flex justify-between lg:mx-20 divide-x-2 shadow-sm p-1 py-3 md:translate-y-[-50%] bg-white rounded-sm overflow-x-auto">
      <NavItem
        icon={BiSearch}
        inputType="text"
        placeholder="filter by size, companies or expertise..."
      />
      <NavItem
        icon={BiMap}
        inputType="text"
        placeholder="filter by location..."
      />
      <NavItem inputType="check" />
    </nav>
  );
};

export default Nav;
