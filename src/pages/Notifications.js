import "../styles/notifications.css";

function Notifications() {
  return (
    <div className="page">
      <h1>Notifications</h1>

      <div className="notification-card">
        <strong>New Task Assigned</strong>
        <p>UI improvements task added</p>
      </div>

      <div className="notification-card">
        <strong>Deadline Reminder</strong>
        <p>React task due tomorrow</p>
      </div>

      <div className="notification-card read">
        <strong>Certificate Issued</strong>
        <p>Frontend internship certificate available</p>
      </div>
    </div>
  );
}

export default Notifications;
