import { useState } from "react";
import { initialTasks } from "../data/tasksData";
import "../styles/kanban.css";

function Kanban() {
  const [tasks, setTasks] = useState(initialTasks);

  const updateStatus = (id, status) => {
    setTasks(tasks.map(t =>
      t.id === id ? { ...t, status } : t
    ));
  };

  const renderTasks = (status) =>
    tasks.filter(t => t.status === status).map(t => (
      <div key={t.id} className="task-card">
        <h4>{t.title}</h4>

        <div className="task-actions">
          {status !== "todo" && (
            <button onClick={() => updateStatus(t.id, "todo")}>←</button>
          )}
          {status !== "progress" && (
            <button onClick={() => updateStatus(t.id, "progress")}>●</button>
          )}
          {status !== "done" && (
            <button onClick={() => updateStatus(t.id, "done")}>→</button>
          )}
        </div>
      </div>
    ));

  return (
    <div className="page">
      <h1>Kanban Board</h1>
      <p className="subtitle">Manage tasks visually</p>

      <div className="kanban-board">
        <div className="kanban-column todo">
          <h3>To Do</h3>
          {renderTasks("todo")}
        </div>

        <div className="kanban-column progress">
          <h3>In Progress</h3>
          {renderTasks("progress")}
        </div>

        <div className="kanban-column done">
          <h3>Completed</h3>
          {renderTasks("done")}
        </div>
      </div>
    </div>
  );
}

export default Kanban;
