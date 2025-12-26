import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

import Dashboard from "./pages/Dashboard";
import Tasks from "./pages/Tasks";
import Certificates from "./pages/Certificates";
import Learning from "./pages/Learning";
import Notifications from "./pages/Notifications";
import Analytics from "./pages/Analytics";

import Kanban from "./pages/Kanban";
import Search from "./pages/Search";
import Admin from "./pages/Admin";


import Profile from "./pages/Profile";


import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <div className="app-layout">
        <Sidebar />

        <div className="main-content">
          <Navbar />

          <Routes>
<Route path="/analytics" element={<Analytics />} />
<Route path="/learning" element={<Learning />} />
<Route path="/profile" element={<Profile />} />
            <Route path="/" element={<Dashboard />} />
            <Route path="/tasks" element={<Tasks />} />
            <Route path="/certificates" element={<Certificates />} />
            <Route path="/learning" element={<Learning />} />
            <Route path="/notifications" element={<Notifications />} />
<Route path="/kanban" element={<Kanban />} />
<Route path="/search" element={<Search />} />
<Route path="/admin" element={<Admin />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
