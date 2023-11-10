import Logo from "../logo";
import ThemeToggle from "./theme-toggle";

const Header = () => {
  return (
    <div className="flex items-center px-5 md:px-20 bg-brandColor header-radius] h-10 md:h-20 lg:rounded-headerBorderRadius">
      <Logo />
      <ThemeToggle />
    </div>
  );
};

export default Header;
