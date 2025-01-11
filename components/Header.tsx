import ButtonTheme from "./ButtonTheme";
import Sidebar from "./Sidebar";

type HeaderProps = {
  activeMenu: boolean;
  setActiveMenu: React.Dispatch<React.SetStateAction<boolean>>;
};

function Header({ activeMenu, setActiveMenu }: HeaderProps) {
  if (!activeMenu) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  return (
    <>
      <div
        className={`${
          activeMenu ? "hidden" : "flex"
        } fixed top-0 left-0 w-full z-30 h-lvh bg-background-light/60 dark:bg-background-dark/10 backdrop-filter backdrop-blur-lg`}
        onClick={() => setActiveMenu(true)}
      ></div>
      <div
        className={`${
          activeMenu ? "hidden" : "flex"
        } fixed lg:flex w-full lg:top-6 left-0 bg-transparent lg:justify-center z-40`}
      >
        <div className="w-full lg:w-auto lg:rounded-lg py-3 px-3 flex gap-4 justify-center bg-background-light/60 dark:bg-background-dark transition ease-in-out duration-700 border-b lg:border border-goldDark/40 ">
          <Sidebar setActiveMenu={setActiveMenu} activeMenu={activeMenu} />
          {activeMenu ? <ButtonTheme /> : null}
        </div>
      </div>
    </>
  );
}

export default Header;
