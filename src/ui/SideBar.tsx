import { HiOutlineHome } from "react-icons/hi";
import {
  HiOutlineCalendarDays,
  HiOutlineCog6Tooth,
  HiOutlineHomeModern,
  HiOutlineUsers,
} from "react-icons/hi2";
import { NavLink } from "react-router-dom";

const MainNav = () => {
  return (
    <nav>
      <ul className="flex flex-col gap-2">
        <li>
          <NavLink
            to="/dashboard"
            className="flex items-center gap-3 rounded-md px-6
  py-3 text-lg font-medium text-gray-600 transition-all hover:bg-gray-50
  hover:text-gray-800"
          >
            <HiOutlineHome className="h-6 w-6" />
            <span>Home</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/bookings"
            className="flex items-center gap-3 rounded-md px-6
  py-3 text-lg font-medium text-gray-600 transition-all hover:bg-gray-50
  hover:text-gray-800"
          >
            <HiOutlineCalendarDays className="h-6 w-6" />
            <span>Bookings</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/cabins"
            className="flex items-center gap-3 rounded-md px-6 py-3
  text-lg font-medium text-gray-600 transition-all hover:bg-gray-50 hover:text-gray-800"
          >
            <HiOutlineHomeModern className="h-6 w-6" />
            <span>Suites</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/users"
            className="flex items-center gap-3 rounded-md px-6 py-3
  text-lg font-medium text-gray-600 transition-all hover:bg-gray-50 hover:text-gray-800"
          >
            <HiOutlineUsers className="h-6 w-6" />
            <span>Users</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/settings"
            className="flex items-center gap-3 rounded-md px-6
  py-3 text-lg font-medium text-gray-600 transition-all hover:bg-gray-50
  hover:text-gray-800"
          >
            <HiOutlineCog6Tooth className="h-6 w-6" />
            <span>Settings</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

const SideBar = () => {
  return (
    <aside
      className="row-span-full flex flex-col gap-8 border-r border-gray-100
  bg-gray-0 px-6 py-8"
    >
      {/* You can add a <Logo /> component here later */}
      <MainNav />
    </aside>
  );
};
export default SideBar;
