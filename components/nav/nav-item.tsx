import { IconType } from "react-icons";
import { IconBadge } from "../icon-badge";

interface NavItemProps {
  icon?: IconType;
  inputType: "text" | "check";
  placeholder?: string;
}

const NavItem = ({ icon, inputType, placeholder }: NavItemProps) => {
  return (
    <div className="flex justify-between flex-1 items-center px-2">
      {inputType === "text" && icon && <IconBadge icon={icon!} bgSize="sm" />}
      {inputType === "text" && (
        <input
          type="text"
          placeholder={placeholder}
          className="p-1 flex-1 placeholder:text-xs"
        />
      )}
      {inputType === "check" && (
        <input
          type="checkbox"
          placeholder="filter by size, companies or expertise"
        />
      )}
      {inputType === "check" && <p>Full Time Only</p>}
      {inputType === "check" && <button>Search</button>}
    </div>
  );
};

export default NavItem;
