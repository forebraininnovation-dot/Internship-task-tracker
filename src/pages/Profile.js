import "../styles/profile.css";
import { initialTasks } from "../data/tasksData";
import { certificateData } from "../data/certificatesData";

function Profile() {
  const completedTasks = initialTasks.filter(t => t.status === "done").length;

  return (
    <div className="page">
      <h1>My Profile</h1>
      <p className="subtitle">
        Intern details and progress summary
      </p>

      <div className="profile-card">
        <div className="profile-header">
          <div className="avatar-large">MO</div>
          <div>
            <h2>Mohammed Owais</h2>
            <p>Frontend Intern</p>
            <span>Duration: 3 Months</span>
          </div>
        </div>

        <div className="profile-stats">
          <div>
            <strong>{initialTasks.length}</strong>
            <span>Total Tasks</span>
          </div>

          <div>
            <strong>{completedTasks}</strong>
            <span>Completed</span>
          </div>

          <div>
            <strong>{certificateData.length}</strong>
            <span>Certificates</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
