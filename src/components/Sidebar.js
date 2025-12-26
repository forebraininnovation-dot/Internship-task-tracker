import { NavLink } from "react-router-dom";
import "../styles/sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <h3 className="sidebar-title">Menu</h3>

      <NavLink to="/" end className="side-link">
        Dashboard
      </NavLink>

      <NavLink to="/tasks" className="side-link">
        My Tasks
      </NavLink>

      <NavLink to="/certificates" className="side-link">
        Certificates
      </NavLink>

      <NavLink to="/learning" className="side-link">
        Learning
      </NavLink>
<NavLink to="/analytics" className="side-link">
  Analytics
</NavLink>
<NavLink to="/kanban" className="side-link">Kanban Board</NavLink>
<NavLink to="/search" className="side-link">Search</NavLink>
<NavLink to="/admin" className="side-link">Admin</NavLink>
<NavLink to="/profile" className="side-link">Profile</NavLink>



      <NavLink to="/notifications" className="side-link">
        Notifications
      </NavLink>
    </div>
  );
}

export default Sidebar;
