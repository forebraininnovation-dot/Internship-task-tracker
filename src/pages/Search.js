import { useState } from "react";
import { initialTasks } from "../data/tasksData";
import "../styles/search.css";

function Search() {
  const [query, setQuery] = useState("");

  const filtered = initialTasks.filter(t =>
    t.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="page">
      <h1>Search Tasks</h1>
      <p className="subtitle">Find tasks quickly</p>

      <input
        className="search-input"
        placeholder="Search by task name..."
        value={query}
        onChange={e => setQuery(e.target.value)}
      />

      <table className="task-table">
        <thead>
          <tr>
            <th>Task</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map(task => (
            <tr key={task.id}>
              <td>{task.title}</td>
              <td>
                <span className={`badge ${task.status}`}>
                  {task.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Search;
