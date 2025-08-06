import { Search } from "lucide-react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="bg-stone-700 sticky top-0 z-50">
      <nav className=" flex justify-between w-[95%] mx-auto items-center py-4">
        <div className="logo">
          <h1 className="text-white text-4xl font-extrabold uppercase">
            Social Media
          </h1>
        </div>
        <div className="links text-white ">
          <ul className="flex  gap-10 font-bold text-md">
            <li>
              <NavLink
                className={({ isActive }) =>
                  `${isActive ? "text-orange-500" : "text-white"}`
                }
                to="feed"
                end
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  `${isActive ? "text-orange-500" : "text-white"}`
                }
                to="create"
                end
              >
                Create
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="auth flex gap-5">
          <div className="relative ">
            <input
              type="text"
              name=""
              id=""
              className="bg-transparent border-2 border-white rounded p-2 text-white font-bold"
              placeholder="Search"
            />
            <div className="absolute top-2 right-3 text-white ">
              <Search />
            </div>
          </div>
          <a href="#" className="bg-orange-400 p-2 rounded font-bold">
            Signup
          </a>
          <a href="#" className="bg-orange-400 p-2 rounded font-bold">
            Signin
          </a>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
