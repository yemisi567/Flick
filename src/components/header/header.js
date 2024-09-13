import DocumentationIcon from "../icons/documentation";
import FlickLogoIcon from "../icons/flick-logo";
import SupportIcon from "../icons/support";

const Header = ({ isSidebarOpen, toggleSidebar }) => {
  return (
    <header className="flex justify-between items-center p-4 bg-white shadow-sm h-[83px]">
      <div className="flex items-center">
        <div className="px-4">
          <FlickLogoIcon />
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <div className="flex items-center gap-[4px]">
          <SupportIcon />
          Support
        </div>
        <div className="flex items-center gap-[4px] border border-[#D0D5DD] rounded-[8px] h-[40px] px-[16px] py-[10px]">
          <DocumentationIcon />
          API Documentation
        </div>
        <button className="bg-gray-200 text-gray-700 px-3 py-1 rounded-md">
          Test Mode
        </button>
        <div className="w-8 h-8 bg-gray-300 rounded-full"></div>{" "}
      </div>
    </header>
  );
};

export default Header;
