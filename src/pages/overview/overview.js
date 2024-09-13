import NairaIcon from "../../components/icons/naira.png";
import UsdIcon from "../../components/icons/usd.png";
import KenyaIcon from "../../components/icons/kenya.png";
import ArrowIcon from "../../components/icons/arrow";
import EllipsisIcon from "../../components/icons/elipsis";
import TransactionImage from "../../components/icons/barchart.png";
import SearchIcon from "../../components/icons/search";
import CalendarIcon from "../../components/icons/calender";
import SmallLineIcon from "../../components/icons/smaller-line";
import MultipleIcon from "../../components/icons/multiple";
import ToggleSwitch from "../../components/toggle-switch/toggle-switch";
import GtbankIcon from "../../components/icons/gtbank.png";
import ViewMoreIcon from "../../components/icons/view-more";
import CheckIcon from "../../components/icons/check";
import CancelIcon from "../../components/icons/cancel";
import DotIcon from "../../components/icons/dot";

export default function Overview() {
  const data = [
    {
      timestamp: "2 hours ago",
      account: "GTBank | 0130086553",
      amount: "NGN 848,67.06",
      channel: "Flick",
      customer: "Temikotan Felix",
      status: "Successful",
    },
    {
      timestamp: "Jan 6, 2023",
      account: "GTBank | 0130086553",
      amount: "NGN 848,67.06",
      channel: "USSD",
      customer: "Olojede Dipo Gbadebo",
      status: "Pending",
    },
    {
      timestamp: "2 hours ago",
      account: "GTBank | 0130086553",
      amount: "NGN 848,67.06",
      channel: "Bank",
      customer: "Olojede Dipo Gbadebo",
      status: "Failed",
    },
  ];

  return (
    <div className="bg-[#F6F7F9] lg:p-8 p-4">
      <header className="flex justify-between items-center mb-6">
        <div className="bg-white p-4 rounded-[12px] px-[23px] py-[19px] w-full">
          <div className="flex items-center justify-between flex-wrap gap-3">
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
      <section className="mb-6 bg-white rounded-[12px] h-auto px-4 py-6 mt-8 w-full max-w-full">
        <h3 className="text-primary text-lg font-medium">Your balances</h3>
        <div className="grid grid-cols-1 gap-6 mt-4 lg:grid-cols-3">
          <div className="bg-[#FEF4F1] rounded-[12px] h-[159px] p-[20px]">
            <div className="flex gap-2">
              <img src={NairaIcon} alt="" />
              <p className="text-gray-500">Nigerian Naira</p>
            </div>
            <div className="flex flex-col mt-[40px] gap-2">
              <p className="text-[#7F91B4] text-xs font-[450]">
                AVAILABLE BALANCE
              </p>
              <div className="flex justify-between items-center">
                <p className="text-primary text-[32px] font-[900]">K0.00</p>
                <ArrowIcon />
              </div>
            </div>
          </div>

          <div className="bg-[#F4FBFB] rounded-[12px] h-[159px] p-[20px]">
            <div className="flex gap-2">
              <img src={UsdIcon} alt="" />
              <p className="text-gray-500">United States Dollar</p>
            </div>
            <div className="flex flex-col mt-[40px] gap-2">
              <p className="text-[#7F91B4] text-xs font-[450]">
                AVAILABLE BALANCE
              </p>
              <div className="flex justify-between items-center">
                <p className="text-primary text-[32px] font-[900]">K0.00</p>
                <ArrowIcon />
              </div>
            </div>
          </div>

          <div className="bg-[#FEF0F5] rounded-[12px] h-[159px] p-[20px]">
            <div className="flex gap-2">
              <img src={KenyaIcon} alt="" />
              <p className="text-gray-500">Kenyan Shilling</p>
            </div>
            <div className="flex flex-col mt-[40px] gap-2">
              <p className="text-[#7F91B4] text-xs font-[450]">
                AVAILABLE BALANCE
              </p>
              <div className="flex justify-between items-center">
                <p className="text-primary text-[32px] font-[900]">K0.00</p>
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
        <div className="max-w-full">
          <img src={TransactionImage} alt="" className="w-full" />
        </div>
      </section>
      {/* All Transactions Section */}
      <section className="bg-white rounded-[12px] h-[auto] px-[24px] py-[30px] mt-[32px]">
        <div className="flex flex-col justify-between gap-[8px] lg:flex lg:flex-row">
          <p className="text-primary text-lg font-medium">All transactions</p>
          <div className="flex flex-col gap-[8px] lg:flex lg:flex-row lg:items-center lg:gap[8px]">
            <div className="flex gap-[20px] h-[32px] w-[256px] items-center border border-[#EAECF0] px-[14px] py-[6px] rounded-[8px]">
              <p className="text-[#151F32] text-xs font-[450]">
                Search by name, acc num or reff...
              </p>{" "}
              <SearchIcon />
            </div>
            <div className="flex gap-[4px] items-center h-[32px] w-[256px] border border-[#EAECF0] px-[4px] py-[6px] rounded-[8px]">
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
      </section>

      {/* Header */}
      <div className="lg:block hidden">
        <div className="grid grid-cols-[repeat(6,minmax(150px,1fr))] bg-[#F2F4F7] py-[13px] px-[24px]">
          <div className="text-[#475467] text-sm font-medium">Timestamp</div>
          <div className="text-[#475467] text-sm font-medium">Account</div>
          <div className="text-[#475467] text-sm font-medium">Amount</div>
          <div className="text-[#475467] text-sm font-medium">Channel</div>
          <div className="text-[#475467] text-sm font-medium">Customer</div>
          <div className="text-[#475467] text-sm font-medium">Status</div>
        </div>

        <section className="bg-white rounded-[12px] h-[auto] px-[24px]">
          {/* Data Rows */}
          {data.map((row, index) => (
            <div
              key={index}
              className="grid grid-cols-[repeat(6,minmax(150px,1fr))] p-2 even:bg-gray-100 odd:bg-white border-b border-b-[#F2F4F7] py-[24px] max-w-full"
            >
              <div className="text-[#475467] text-sm font-[450]">
                {row.timestamp}
              </div>
              <div className="text-[#475467] text-sm font-[450] flex items-center gap-3">
                <img src={GtbankIcon} alt="" />
                {row.account}
              </div>
              <div className="text-primary text-sm font-medium">
                {row.amount}
              </div>
              <div className="text-[#475467] text-sm  font-[450]">
                {row.channel}
              </div>
              <div className="text-[#475467] text-sm font-[450]">
                {row.customer}
              </div>
              <div>
                {row.status === "Successful" && (
                  <div className="inline-flex bg-[#ECFDF3] text-[#067647] rounded-[16px] border px-[6px] py-2px] border-[#ABEFC6]  items-center gap-[4px]">
                    <span className="shrink-0">
                      <CheckIcon />
                    </span>
                    {row.status}
                  </div>
                )}
                {row.status === "Failed" && (
                  <div className="inline-flex bg-[#FEF3F2] px-[6px] py-2px] text-[#B42318] rounded-[16px] border border-[#FECDCA] items-center gap-[4px]">
                    <span className="shrink-0">
                      <CancelIcon />
                    </span>
                    {row.status}
                  </div>
                )}
                {row.status === "Pending" && (
                  <div className="inline-flex bg-[#FFF8F0] text-[#F79009] rounded-[6px] border border-[#F79009] px-[6px] py-2px] items-center gap-[4px]">
                    <span className="shrink-0">
                      <DotIcon />
                    </span>
                    {row.status}
                  </div>
                )}
              </div>
            </div>
          ))}
          <div className="flex items-center justify-center mt-[28px] pb-[30px] gap-x-[6px]">
            <p className="text-[#2EBDB6] text-sm font-[450]">View more</p>
            <ViewMoreIcon />
          </div>
        </section>
      </div>
    </div>
  );
}
