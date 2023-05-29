import { NavLink } from "react-router-dom";
import { FaHome, FaClipboardList, FaPen, FaUser } from "react-icons/fa";

const NavBar = () => {
  return (
    <div className="fixed bottom-0 w-screen">
      <footer className="p-2 bg-gray-900 rounded-lg shadow">
        <ul className="flex flex-wrap items-center justify-center mt-2">
          <NavLink
            to={"/"}
            className="transition px-4 grid place-items-center hover:scale-110 hover:-translate-y-1"
          >
            <FaHome className="text-orange-500 mb-1 text-xl" />
            <h1 className="text-sm text-orange-500 decoration-red-300">Home</h1>
          </NavLink>
          <NavLink
            to={"/board_list"}
            className="transition px-4 grid place-items-center hover:scale-110 hover:-translate-y-1"
          >
            <FaClipboardList className="text-orange-500 mb-1 text-xl" />
            <span className="text-sm text-orange-500 decoration-red-300">
              List
            </span>
          </NavLink>
          <NavLink
            to={"/board_write"}
            className="transition px-4 grid place-items-center hover:scale-110 hover:-translate-y-1"
          >
            <FaPen className="text-orange-500 mb-1 text-xl" />
            <span className="text-sm text-orange-500 decoration-red-300">
              Write
            </span>
          </NavLink>
          <NavLink
            to={"/board_update"}
            className="transition px-4 grid place-items-center hover:scale-110 hover:-translate-y-1"
          >
            <FaUser className="text-orange-500 mb-1 text-xl" />
            <span className="text-sm text-orange-500 decoration-red-300">
              MyPage
            </span>
          </NavLink>
        </ul>
      </footer>
    </div>
  );
};

export default NavBar;
