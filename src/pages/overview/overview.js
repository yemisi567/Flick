import NairaIcon from "../../components/icons/naira.png";
import UsdIcon from "../../components/icons/usd.png";
import KenyaIcon from "../../components/icons/kenya.png";
import ArrowIcon from "../../components/icons/arrow";
import EllipsisIcon from "../../components/icons/elipsis";
import TransactionImage from "../../components/icons/barchart.png";
import { Dropdown, Space } from "antd";
import SearchIcon from "../../components/icons/search";
import CalendarIcon from "../../components/icons/calender";
import SmallLineIcon from "../../components/icons/smaller-line";
import MultipleIcon from "../../components/icons/multiple";
import ToggleSwitch from "../../components/toggle-switch/toggle-switch";

export default function Overview() {
  const items = [
    {
      key: "1",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
        >
          1st menu item
        </a>
      ),
    },
    {
      key: "2",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.aliyun.com"
        >
          2nd menu item
        </a>
      ),
    },
    {
      key: "3",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.luohanacademy.com"
        >
          3rd menu item
        </a>
      ),
    },
  ];

  return (
    <div className="bg-[#F6F7F9] p-[32px]">
      <header className="flex justify-between items-center mb-6">
        <div className="bg-white p-4 rounded-[12px] h-[104px] px-[23px] py-[19px] w-full">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-primary text-[24px] font-medium">
                Mide Ajibade! 🔆
              </p>
              <p className="text-[#999999] font-[450px] text-sm mt-[4px]">
                Here’s how Flick is performing
              </p>
            </div>
            <div>
              <ToggleSwitch />
            </div>
          </div>
        </div>
      </header>

      {/* Balances Section */}
      <section className="mb-6 bg-white rounded-[12px] h-[257px] px-[28.5px] py-[23px] mt-[32px]">
        <h3 className="text-primary text-lg font-medium">Your balances</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px] mt-[12px]">
          <div className="bg-[#FEF4F1] rounded-[12px] h-[159px] p-[20px]">
            <div className="flex gap-[8px]">
              <img src={NairaIcon} alt="" />
              <p className="text-gray-500">Nigerian Naira</p>
            </div>
            <div className="flex flex-col mt-[40px] gap-[8px]">
              <p className="text-[#7F91B4] text-[10px] font-[450]">
                AVAiLABLE BALANCE
              </p>
              <div className="flex justify-between items-center">
                <p className="text-primary text-[32px] font-[900]"> K0.00</p>
                <ArrowIcon />
              </div>
            </div>
          </div>
          <div className="bg-[#F4FBFB] rounded-[12px] h-[159px] p-[20px]">
            <div className="flex gap-[8px]">
              <img src={UsdIcon} alt="" />
              <p className="text-gray-500">United States Dollar</p>
            </div>
            <div className="flex flex-col mt-[40px] gap-[8px]">
              <p className="text-[#7F91B4] text-[10px] font-[450]">
                AVAiLABLE BALANCE
              </p>
              <div className="flex justify-between items-center">
                <p className="text-primary text-[32px] font-[900]"> K0.00</p>
                <ArrowIcon />
              </div>
            </div>
          </div>
          <div className="bg-[#FEF0F5] rounded-[12px] h-[159px] p-[20px]">
            <div className="flex gap-[8px]">
              <img src={KenyaIcon} alt="" />
              <p className="text-gray-500">Kenyan Shilling</p>
            </div>
            <div className="flex flex-col mt-[40px] gap-[8px]">
              <p className="text-[#7F91B4] text-[10px] font-[450]">
                AVAiLABLE BALANCE
              </p>
              <div className="flex justify-between items-center">
                <p className="text-primary text-[32px] font-[900]"> K0.00</p>
                <ArrowIcon />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transactions Section */}
      <section className="mb-6 bg-white rounded-[12px] h-[auto] p-[24px] mt-[32px]">
        <div className="flex justify-between">
          <p className="text-primary text-lg font-medium">
            Transactions over time
          </p>
          <EllipsisIcon />
        </div>
        <div className="w-full">
          <img src={TransactionImage} alt="" width={"100%"} />
        </div>
      </section>
      {/* All Transactions Section */}
      <section className="mb-6 bg-white rounded-[12px] h-[auto] p-[24px] mt-[32px]">
        <div className="flex justify-between">
          <p className="text-primary text-lg font-medium">All transactions</p>
          <div className="flex items-center gap-[8px]">
            <div className="flex gap-[20px] h-[32px] items-center border border-[#EAECF0] px-[14px] py-[6px] rounded-[8px]">
              <p>Search by name, acc num or reff...</p> <SearchIcon />
            </div>
            <div className="flex gap-[4px] items-center h-[32px] border border-[#EAECF0] px-[4px] py-[6px] rounded-[8px]">
              <CalendarIcon />{" "}
              <span className="text-[13px] text-[#7F91B4] font-[450]">
                From:
              </span>{" "}
              <span className="text-[#16192C] text-[13px] font-[450]">
                10 August
              </span>
              <div className="px-[4px]">
                <SmallLineIcon />
              </div>
              <span className="text-[13px] text-[#7F91B4] font-[450]">
                To:{" "}
              </span>{" "}
              <span className="text-[#16192C] text-[13px] font-[450]">
                17 August
              </span>
            </div>
            <div>
              <MultipleIcon />
            </div>
          </div>
        </div>
        <div className="w-full"></div>
      </section>
    </div>
  );
}
