import React, { useEffect } from "react";
import HomeIcon from "../icons/home";
import OTCDashboardIcon from "../icons/coin-swap";
import BalanceIcon from "../icons/balance";
import DirectDebitIcon from "../icons/repeat";
import PaymentIcon from "../icons/money";
import DataIcon from "../icons/data";
import SettingsIcon from "../icons/settings";
import OverViewIcon from "../icons/bar-chart-sqaure";
import { NavLink } from "react-router-dom";
import FlickLogoIcon from "../icons/flick-logo";
import CopyIcon from "../icons/copy";
import ChevronUpIcon from "../icons/chevron-up";
import ChevronRightIcon from "../icons/chevron-right";

const Sidebar = ({ isSidebarOpen, toggleSidebar }) => {
  const linkClass = ({ isActive }) => `
    block px-4 py-[10.5px] rounded transition-colors duration-200 relative
    ${isActive ? "text-[#101828]" : "text-[#98A2B3] hover:text-[#101828]"}
    before:content-[''] before:absolute before:inset-0 before:bg-[#F6F7F9] 
    before:opacity-0 hover:before:opacity-100 ${
      isActive ? "before:opacity-100" : ""
    }
    before:rounded before:transition-opacity before:duration-200
  `;

  const menuItems = [
    { path: "/get-started", Icon: HomeIcon, text: "Get Started" },
    { path: "/overview", Icon: OverViewIcon, text: "Overview" },
    { path: "/otc-dashboard", Icon: OTCDashboardIcon, text: "OTC Dashboard" },
    { path: "/balance", Icon: BalanceIcon, text: "Balance" },
    { path: "/direct-debit", Icon: DirectDebitIcon, text: "Direct Debit" },
    { path: "/payment", Icon: PaymentIcon, text: "Payment", hasArrow: true },
    { path: "/data", Icon: DataIcon, text: "Data", hasArrow: true },
    { path: "/settings", Icon: SettingsIcon, text: "Settings", hasArrow: true },
  ];

  useEffect(() => {
    document.body.style.overflow = isSidebarOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isSidebarOpen]);

  return (
    <div>
      {/* Mobile Toggle Button */}
      <div
        className="min-[678px]:hidden absolute top-4 left-0 text-white pt-2 rounded "
        onClick={toggleSidebar}
      >
        <FlickLogoIcon />
      </div>
      <aside
        className={`fixed lg:static top-0 left-0 h-dvh lg:h-screen bg-white p-4 transition-transform transform lg:translate-x-0 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:w-[280px] z-50 flex flex-col justify-between`}
      >
        <ul className="space-y-1 flex-grow">
          <li>
            <span className="block py-2 px-4 text-[#7F91B4] text-xs font-[450] mb-[12.5px]">
              MAIN MENU
            </span>
          </li>
          {menuItems.map(({ path, Icon, text, hasArrow }) => (
            <li key={path}>
              <NavLink to={path} onClick={toggleSidebar} className={linkClass}>
                {({ isActive }) => (
                  <div className="flex gap-[12px] items-center relative z-10">
                    <Icon stroke={isActive ? "#151F32" : "#98A2B3"} />
                    <p className="text-sm font-[450]">{text}</p>
                    {hasArrow && (
                      <div className="ml-auto mr-[24px]">
                        <ChevronRightIcon />
                      </div>
                    )}
                  </div>
                )}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="mt-auto">
          <div className="border-[#EAECF0] border mb-[24px]" />
          <div className="flex gap-[10px] items-center">
            <button className="w-[40px] h-[40px] rounded-full border-[#EAF8F8] outline-none cursor-pointer bg-[#EAF8F8]">
              <span className="text-[#2EBDB6] text-sm font-medium">MA</span>
            </button>
            <div>
              <p className="text-sm text-[#344054] font-medium">Mide Ajibade</p>
              <div className="text-[11px] font-[300] text-[#475467] leading-[20px] flex gap-[8px] items-center">
                Merchant ID: 00707317 <CopyIcon />
              </div>
            </div>
            <div className="ml-auto">
              <ChevronUpIcon />
            </div>
          </div>
        </div>
      </aside>
      {/* Overlay when sidebar is open on mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 lg:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
    </div>
  );
};

export default Sidebar;
