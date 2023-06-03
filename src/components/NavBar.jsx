import { NavLink } from "react-router-dom";
import { FaHome, FaClipboardList, FaPen, FaUser } from "react-icons/fa";

const NavBar = () => {
  return (
    <nav className="pt-10">
      <div className="fixed top-0 w-30 right-0">
        <footer className="p-2 rounded-lg">
          <ul className="flex flex-wrap items-center justify-center mt-2">
            <NavLink
              to={"/"}
              className="transition px-4 grid place-items-center hover:scale-110 hover:-translate-y-1"
            >
              <FaHome className="text-red-300 mb-1 text-xl" />
              <h1 className="text-sm text-red-300 decoration-red-300">Home</h1>
            </NavLink>
            <NavLink
              to={"/board_list"}
              className="transition px-4 grid place-items-center hover:scale-110 hover:-translate-y-1"
            >
              <FaClipboardList className="text-red-300 mb-1 text-xl" />
              <span className="text-sm text-red-300 decoration-red-300">
                List
              </span>
            </NavLink>
            <NavLink
              to={"/board_write"}
              className="transition px-4 grid place-items-center hover:scale-110 hover:-translate-y-1"
            >
              <FaPen className="text-red-300 mb-1 text-xl" />
              <span className="text-sm text-red-300 decoration-red-300">
                Write
              </span>
            </NavLink>
            <NavLink
              to={"/board_update"}
              className="transition px-4 grid place-items-center hover:scale-110 hover:-translate-y-1"
            >
              <FaUser className="text-red-300 mb-1 text-xl" />
              <span className="text-sm text-red-300 decoration-red-300">
                MyPage
              </span>
            </NavLink>
          </ul>
        </footer>
      </div>
    </nav>
  );
};

export default NavBar;
