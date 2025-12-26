import { useState } from "react";
import "../styles/learning.css";

function Learning() {
  const [openModule, setOpenModule] = useState(null);

  const toggleModule = (index) => {
    setOpenModule(openModule === index ? null : index);
  };

  const modules = [
    {
      title: "HTML & CSS Basics",
      progress: 100,
      lessons: ["HTML structure", "CSS styling", "Layouts"]
    },
    {
      title: "JavaScript Fundamentals",
      progress: 70,
      lessons: ["Variables", "Functions", "DOM manipulation"]
    },
    {
      title: "React Development",
      progress: 40,
      lessons: ["Components", "State & Props", "Routing"]
    }
  ];

  return (
    <div className="page">
      <h1>Learning Modules</h1>
      <p className="subtitle">
        Track your learning progress during the internship
      </p>

      <div className="modules">
        {modules.map((module, index) => (
          <div className="module-card" key={index}>
            <div
              className="module-header"
              onClick={() => toggleModule(index)}
            >
              <div>
                <h3>{module.title}</h3>
                <span>{module.progress}% completed</span>
              </div>

              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{ width: `${module.progress}%` }}
                />
              </div>
            </div>

            {openModule === index && (
              <ul className="lesson-list">
                {module.lessons.map((lesson, i) => (
                  <li key={i}>{lesson}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Learning;
