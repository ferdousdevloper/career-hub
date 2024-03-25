import { NavLink } from "react-router-dom";

const Header = () => {
  const link = (
    <>
      <li className="text-[#757575] font-medium text-base">
        <NavLink to='/'>Home</NavLink>
      </li>
      <li className="text-[#757575] font-medium text-base">
        <NavLink to='/statistics'>Statistics</NavLink>
      </li >
      <li className="text-[#757575] font-medium text-base">
        <NavLink to='/applied-jobs'>Applied Jobs</NavLink>
      </li>
      <li className="text-[#757575] font-medium text-base">
        <NavLink to='/blog'>Blog</NavLink>
      </li>
      <li className="text-[#757575] font-medium text-base">
        <NavLink to='/latest-news'>Latest News</NavLink>
      </li>
    </>
  );

  return (
    <div className="bg-transparent absolute w-full z-10">
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow  rounded-box w-52"
            >
              {link}
            </ul>
          </div>
          <a className="btn btn-ghost text-4xl font-extrabold text-[#1A1919]">CareerHub</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {link}
          </ul>
        </div>
        <div className="navbar-end">
          <a className=" text-white font-extrabold text-xl bg-[#7E90FE] px-6 py-3 rounded-lg">Start Applying</a>
        </div>
      </div>
    </div>
  );
};

export default Header;
