import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Tooltip,
  Legend
} from "chart.js";

import { Bar, Doughnut } from "react-chartjs-2";
import { initialTasks } from "../data/tasksData";
import "../styles/analytics.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Tooltip,
  Legend
);

function Analytics() {
  const todo = initialTasks.filter(t => t.status === "todo").length;
  const progress = initialTasks.filter(t => t.status === "progress").length;
  const done = initialTasks.filter(t => t.status === "done").length;

  const barData = {
    labels: ["To Do", "In Progress", "Completed"],
    datasets: [
      {
        label: "Tasks",
        data: [todo, progress, done],
        backgroundColor: ["#f97316", "#6366f1", "#22c55e"]
      }
    ]
  };

  const donutData = {
    labels: ["Completed", "Remaining"],
    datasets: [
      {
        data: [done, todo + progress],
        backgroundColor: ["#22c55e", "#e5e7eb"]
      }
    ]
  };

  return (
    <div className="page">
      <h1>Analytics</h1>
      <p className="subtitle">Task progress overview</p>

      <div className="analytics-grid">
        <div className="chart-card">
          <h3>Tasks by Status</h3>
          <Bar data={barData} />
        </div>

        <div className="chart-card">
          <h3>Completion Rate</h3>
          <Doughnut data={donutData} />
        </div>
      </div>
    </div>
  );
}

export default Analytics;
