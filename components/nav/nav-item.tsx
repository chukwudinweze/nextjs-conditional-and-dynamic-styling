import { IconType } from "react-icons";
import { IconBadge } from "../icon-badge";
import { Button } from "../button";

interface NavItemProps {
  icon?: IconType;
  inputType: "text" | "check";
  placeholder?: string;
}

const NavItem = ({ icon, inputType, placeholder }: NavItemProps) => {
  return (
    <div className="flex justify-between flex-1 items-center px-2">
      {/* modify icon below */}
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

      {/* modify search button below */}
      {inputType === "check" && <Button variant="purple">Search</Button>}
    </div>
  );
};

export default NavItem;
