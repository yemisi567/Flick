import React from "react";
import { Link } from "react-router-dom";
import HomeIcon from "../icons/home";
import OTCDashboardIcon from "../icons/coin-swap";
import BalanceIcon from "../icons/balance";
import DirectDebitIcon from "../icons/repeat";
import PaymentIcon from "../icons/money";
import DataIcon from "../icons/data";
import SettingsIcon from "../icons/settings";
import OverViewIcon from "../icons/bar-chart-sqaure";

const Sidebar = ({ isSidebarOpen, toggleSidebar }) => {
  return (
    <div>
      <button
        className="lg:hidden absolute top-4 left-4 bg-gray-900 text-white p-2 rounded"
        onClick={toggleSidebar}
      >
        {isSidebarOpen ? "Close" : "Menu"}
      </button>
      <aside
        className={`fixed lg:static top-0 left-0 w-64 h-full lg:h-screen bg-white text-#4A5873 p-4 transition-transform transform lg:translate-x-0 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:w-[280px] z-50`}
      >
        <ul>
          <li>
            <Link
              to=""
              className="block py-2 px-4 text-[#7F91B4] text-xs font-[450]"
            >
              MAIN MENU
            </Link>
          </li>

          <li>
            <Link
              to="/get-started"
              onClick={toggleSidebar}
              className="block py-2 px-4 hover:bg-gray-700 rounded"
            >
              <div className="flex gap-[12px] items-center">
                <HomeIcon /> Get Started
              </div>
            </Link>
          </li>
          <li>
            <Link
              to="/overview"
              onClick={toggleSidebar}
              className="block py-2 px-4 hover:bg-gray-700 rounded"
            >
              <div className="flex gap-[12px] items-center">
                <OverViewIcon /> Overview
              </div>
            </Link>
          </li>
          <li>
            <Link
              to="/otc-dashboard"
              onClick={toggleSidebar}
              className="block py-2 px-4 hover:bg-gray-700 rounded"
            >
              <div className="flex gap-[12px] items-center">
                <OTCDashboardIcon /> OTC Dashboard
              </div>
            </Link>
          </li>
          <li>
            <Link
              to="/balance"
              onClick={toggleSidebar}
              className="block py-2 px-4 hover:bg-gray-700 rounded"
            >
              <div className="flex gap-[12px] items-center">
                <BalanceIcon /> Balance
              </div>
            </Link>
          </li>
          <li>
            <Link
              to="/direct-debit"
              onClick={toggleSidebar}
              className="block py-2 px-4 hover:bg-gray-700 rounded"
            >
              <div className="flex gap-[12px] items-center">
                <DirectDebitIcon /> Direct Debit
              </div>
            </Link>
          </li>
          <li>
            <Link
              to="/payment"
              onClick={toggleSidebar}
              className="block py-2 px-4 hover:bg-gray-700 rounded"
            >
              <div className="flex gap-[12px] items-center">
                <PaymentIcon /> Payment
              </div>
            </Link>
          </li>
          <li>
            <Link
              to="/data"
              onClick={toggleSidebar}
              className="block py-2 px-4 hover:bg-gray-700 rounded"
            >
              <div className="flex gap-[12px] items-center">
                <DataIcon /> Data
              </div>
            </Link>
          </li>
          <li>
            <Link
              to="/settings"
              onClick={toggleSidebar}
              className="block py-2 px-4 hover:bg-gray-700 rounded"
            >
              <div className="flex gap-[12px] items-center">
                <SettingsIcon /> Settings
              </div>
            </Link>
          </li>
        </ul>
        <div className="mt-8">
          <p className="text-sm">Mide Ajibade</p>
          <p className="text-sm">Merchant ID: 0077317</p>
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
