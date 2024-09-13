import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-white shadow-sm">
      <div className="flex items-center">
        <h1 className="text-2xl font-bold mr-4">flick.</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link
                to="/overview"
                className="text-gray-600 hover:text-gray-900"
              >
                Overview
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="flex items-center space-x-4">
        <a href="#" className="text-gray-600 hover:text-gray-900">
          Support
        </a>
        <a href="#" className="text-gray-600 hover:text-gray-900">
          API Documentation
        </a>
        <button className="bg-gray-200 text-gray-700 px-3 py-1 rounded-md">
          Test Mode
        </button>
        <div className="w-8 h-8 bg-gray-300 rounded-full"></div>{" "}
      </div>
    </header>
  );
};

export default Header;
