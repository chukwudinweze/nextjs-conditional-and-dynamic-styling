import Logo from "../logo";
import ThemeToggle from "./theme-toggle";

const Header = () => {
  return (
    <div className="flex items-center px-5 md:px-20 lg:px-36 bg-brandColor header-radius] h-10 md:h-20 lg:h-28 lg:rounded-headerBorderRadius ">
      <Logo />
      <ThemeToggle />
    </div>
  );
};

export default Header;
