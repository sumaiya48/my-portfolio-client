import React, { useEffect, useState } from "react";
import { FaProjectDiagram, FaPlus, FaTools, FaChartPie } from "react-icons/fa";
import { Link } from "react-router-dom";

const DashboardOverview = () => {
  const [projects, setProjects] = useState([]);
  const [techUsage, setTechUsage] = useState({});

  useEffect(() => {
    fetch("https://my-portfolio-server-kcfx.onrender.com/projects")
      .then(res => res.json())
      .then(data => {
        setProjects(data);
        calculateTechStats(data);
      })
      .catch(error => console.error("Error loading dashboard data:", error));
  }, []);

  const calculateTechStats = (projects) => {
    const usage = {};
    projects.forEach(project => {
      project.technologies?.forEach(tech => {
        usage[tech] = (usage[tech] || 0) + 1;
      });
    });
    setTechUsage(usage);
  };

  return (
    <div className="p-6 space-y-6">
      <h2 className="text-2xl font-bold">📊 Dashboard Overview</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-blue-100 p-4 rounded-xl shadow">
          <FaProjectDiagram className="text-2xl mb-2" />
          <h4 className="text-lg font-semibold">Total Projects</h4>
          <p className="text-2xl">{projects.length}</p>
        </div>

        <div className="bg-green-100 p-4 rounded-xl shadow">
          <FaTools className="text-2xl mb-2" />
          <h4 className="text-lg font-semibold">Tech Used</h4>
          <ul className="text-sm mt-1">
            {Object.entries(techUsage).map(([tech, count]) => (
              <li key={tech}>{tech}: {count}</li>
            ))}
          </ul>
        </div>

        <div className="bg-yellow-100 p-4 rounded-xl shadow">
          <FaChartPie className="text-2xl mb-2" />
          <h4 className="text-lg font-semibold">Recent Projects</h4>
          <ul className="text-sm mt-1">
            {projects.slice(-3).reverse().map(p => (
              <li key={p._id}>{p.title}</li>
            ))}
          </ul>
        </div>

        <div className="bg-purple-100 p-4 rounded-xl shadow">
          <FaPlus className="text-2xl mb-2" />
          <h4 className="text-lg font-semibold">Quick Actions</h4>
          <Link to="/add-project" className="text-blue-600 hover:underline text-sm mt-1 block">
            ➕ Add New Project
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DashboardOverview;
