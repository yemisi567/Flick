import { Switch } from "antd";
import DocumentationIcon from "../icons/documentation";
import FlickLogoIcon from "../icons/flick-logo";
import SupportIcon from "../icons/support";
import NotificationIcon from "../icons/notification";
import LineIcon from "../icons/line";

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-white shadow-sm h-[83px]">
      <div className="flex ">
        <div className="px-4 max-[678px]:hidden">
          <FlickLogoIcon />
        </div>
      </div>
      <div className="ml-auto min-[678px]:hidden">
        <NotificationIcon />
      </div>
      <div className="flex items-center gap-[12px] mr-[24px] max-[678px]:hidden">
        <div className="flex items-center gap-[4px] border border-[#D0D5DD] rounded-[8px] h-[40px] px-[16px] py-[10px]">
          <SupportIcon />
          Support
        </div>
        <div className="flex items-center gap-[4px] border border-[#D0D5DD] rounded-[8px] h-[40px] px-[16px] py-[10px]">
          <DocumentationIcon />
          API Documentation
        </div>
        <div>
          <LineIcon />
        </div>
        <div>
          <Switch
            defaultChecked={false}
            className="bg-[#F2F4F7]"
            style={{ width: "36px" }}
          />
          Test Mode
        </div>
        <div>
          <LineIcon />
        </div>
        <div>
          <NotificationIcon />
        </div>
      </div>
    </header>
  );
};

export default Header;
