import { initialTasks } from "../data/tasksData";
import { certificateData } from "../data/certificatesData";

function Admin() {
  return (
    <div className="page">
      <h1>Admin Dashboard</h1>

      <div className="stats">
        <div className="stat-card">
          <h3>Total Interns</h3>
          <p>25</p>
        </div>

        <div className="stat-card">
          <h3>Total Tasks</h3>
          <p>{initialTasks.length}</p>
        </div>

        <div className="stat-card">
          <h3>Certificates Issued</h3>
          <p>{certificateData.length}</p>
        </div>
      </div>

      <h2>Recent Certificates</h2>
      <ul>
        {certificateData.map(c => (
          <li key={c.id}>{c.id} – {c.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Admin;
