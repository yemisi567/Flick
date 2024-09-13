import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import Balance from "./pages/balance/balance";
import DirectDebit from "./pages/direct-debit/direct-debit";
import Data from "./pages/data/data";
import Payments from "./pages/payments/payments";
import Settings from "./pages/settings/settings";
import Sidebar from "./components/sidebar/sidebar";
import GetStarted from "./pages/get-started/get-started";
import Overview from "./pages/overview/overview";
import OTCDashboard from "./pages/otc-dashboard/otc-dashboard";
import Header from "./components/header/header";

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <Router>
      <div className="flex flex-col">
        <div className="flex">
          <Sidebar
            isSidebarOpen={isSidebarOpen}
            toggleSidebar={toggleSidebar}
          />
          <div className="flex-1 ml-0 lg:ml-[280px] min-h-screen ">
            <Header
              isSidebarOpen={isSidebarOpen}
              toggleSidebar={toggleSidebar}
            />
            <div className="h-full bg-[#F6F7F9]">
              <Routes>
                <Route path="/" element={<Navigate to="/overview" replace />} />
                <Route path="/get-started" element={<GetStarted />} />
                <Route path="/overview" element={<Overview />} />
                <Route path="/otc-dashboard" element={<OTCDashboard />} />
                <Route path="/balance" element={<Balance />} />
                <Route path="/direct-debit" element={<DirectDebit />} />
                <Route path="/data" element={<Data />} />
                <Route path="/payments" element={<Payments />} />
                <Route path="/settings" element={<Settings />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
