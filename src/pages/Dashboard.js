import "../styles/dashboard.css";
import { initialTasks } from "../data/tasksData";

function Dashboard() {
  const totalTasks = initialTasks.length;
  const completed = initialTasks.filter(t => t.status === "done").length;
  const inProgress = initialTasks.filter(t => t.status === "progress").length;

  return (
    <div className="dashboard">
      {/* HEADER */}
      <div className="dashboard-header">
        <div>
          <h1>Welcome back 👋</h1>
          <p className="subtitle">
            Here’s a quick snapshot of your internship progress
          </p>
        </div>
      </div>

      {/* SUMMARY CARDS */}
      <div className="summary-grid">
        <div className="summary-card blue">
          <h3>Total Tasks</h3>
          <p>{totalTasks}</p>
        </div>

        <div className="summary-card purple">
          <h3>In Progress</h3>
          <p>{inProgress}</p>
        </div>

        <div className="summary-card green">
          <h3>Completed</h3>
          <p>{completed}</p>
        </div>
      </div>

      {/* TASK OVERVIEW */}
      <div className="dashboard-section">
        <h2>Task Overview</h2>

        {initialTasks.map(task => (
          <div className="task-row" key={task.id}>
            <div>
              <strong>{task.title}</strong>
              <span className={`status ${task.status}`}>
                {task.status}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* RECENT ACTIVITY */}
      <div className="dashboard-section">
        <h2>Recent Activity</h2>

        <ul className="activity-list">
          <li>✔ Task “Design Dashboard UI” marked as completed</li>
          <li>⏳ Task “Fix Sidebar Navigation” is in progress</li>
          <li>📄 Certificate issued for Frontend Internship</li>
        </ul>
      </div>
    </div>
  );
}

export default Dashboard;
