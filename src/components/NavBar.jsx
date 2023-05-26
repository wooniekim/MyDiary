import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="fixed bottom-0 w-50%">
      <footer className="p-4 bg-indigo-900 rounded-lg shadow">
        <ul className="flex flex-wrap items-center mt-3">
          <li>
            <NavLink
              to={"/"}
              className="mr-4 text-sm text-orange-500 hover:underline md:mr-6 decoration-red-300"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/board_list"}
              className="mr-4 text-sm text-orange-500 hover:underline md:mr-6 decoration-red-300"
            >
              List
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/board_write"}
              className="mr-4 text-sm text-orange-500 hover:underline md:mr-6 decoration-red-300"
            >
              Write
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/board_update"}
              className="mr-4 text-sm text-orange-500 hover:underline md:mr-6 decoration-red-300"
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
