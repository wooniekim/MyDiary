import { NavLink } from "react-router-dom";
import { FaHome, FaClipboardList, FaPen, FaUser } from "react-icons/fa";

const NavBar = () => {
  return (
    <div className="fixed bottom-0 w-screen">
      <footer className="p-2 bg-gray-900 rounded-lg shadow">
        <ul className="flex flex-wrap items-center justify-center mt-2">
          <li className="px-4 grid place-items-center">
            <FaHome className="text-orange-500 mb-1" />
            <NavLink
              to={"/"}
              className="text-sm text-orange-500 hover:underline decoration-red-300"
            >
              Home
            </NavLink>
          </li>
          <li className="px-4 grid place-items-center">
            <FaClipboardList className="text-orange-500 mb-1" />
            <NavLink
              to={"/board_list"}
              className="text-sm text-orange-500 hover:underline decoration-red-300"
            >
              List
            </NavLink>
          </li>
          <li className="px-4 grid place-items-center">
            <FaPen className="text-orange-500 mb-1" />
            <NavLink
              to={"/board_write"}
              className="text-sm text-orange-500 hover:underline decoration-red-300"
            >
              Write
            </NavLink>
          </li>
          <li className="px-4 grid place-items-center">
            <FaUser className="text-orange-500 mb-1" />
            <NavLink
              to={"/board_update"}
              className="text-sm text-orange-500 hover:underline decoration-red-300"
            >
              Update
            </NavLink>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default NavBar;
