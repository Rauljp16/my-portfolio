import ButtonTheme from "./ButtonTheme";
import Sidebar from "./Sidebar";

type HeaderProps = {
  activeMenu: boolean;
  setActiveMenu: React.Dispatch<React.SetStateAction<boolean>>;
};

function Header({ activeMenu, setActiveMenu }: HeaderProps) {
  return (
    <div
      className={`${
        activeMenu ? "hidden" : "flex"
      } fixed lg:flex w-full lg:top-6 left-0 bg-transparent lg:justify-center z-40`}
    >
      <div className="w-full lg:w-auto lg:rounded-lg py-3 px-3 flex gap-4 justify-center bg-background-light/60 dark:bg-background-dark/60 backdrop-filter backdrop-blur-lg bg-opacity-40 transition ease-in-out duration-700 border-b lg:border border-goldDark/40 ">
        <Sidebar setActiveMenu={setActiveMenu} activeMenu={activeMenu} />
        <ButtonTheme />
      </div>
    </div>
  );
}

export default Header;
