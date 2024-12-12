import { Link } from "react-router-dom";

const ResponsiveMenu = ({ showMenu }) => {
  return (
    <div
      className={`${
        showMenu ? "left-0" : "-left-[100%]"
      } fixed bottom-0 top-0 z-50 flex h-screen w-[75%] flex-col justify-between  bg-gray-900 text-white px-8 pb-6 pt-16 transition-all duration-200 lg:hidden rounded-r-xl shadow-md`}>
      <div className="card">
        <nav className="mt-12">
          <ul className="space-y-4 text-xl">
            <li>
              <Link className="mb-5 inline-block" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="mb-5 inline-block" to="/menus">
                Menu
              </Link>
            </li>
            <li>
              <Link className="mb-5 inline-block" to="/create-menu">
                Create Menu
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default ResponsiveMenu;
