import React, { useState } from 'react';

const AddProject = () => {
  const [project, setProject] = useState({
    img: '',
    title: '',
    live: '',
    github: '',
    technologies: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProject({ ...project, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Convert technologies to array
    const finalProject = {
      ...project,
      technologies: project.technologies.split(',').map(tech => tech.trim())
    };

    fetch('https://my-portfolio-server-kcfx.onrender.com/projects', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(finalProject)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        alert('✅ Project added!');
        setProject({ img: '', title: '', live: '', github: '', technologies: '' });
      });
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 border rounded shadow">
      <h2 className="text-xl font-bold mb-4 text-center">Add Project</h2>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          type="text"
          name="img"
          placeholder="Image URL"
          value={project.img}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded"
          required
        />
        <input
          type="text"
          name="title"
          placeholder="Project Title"
          value={project.title}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded"
          required
        />
        <input
          type="url"
          name="live"
          placeholder="Live Link"
          value={project.live}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded"
          required
        />
        <input
          type="url"
          name="github"
          placeholder="GitHub Link"
          value={project.github}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded"
          required
        />
        <input
          type="text"
          name="technologies"
          placeholder="Technologies (comma separated)"
          value={project.technologies}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded"
          required
        />
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded">
          Add Project
        </button>
      </form>
    </div>
  );
};

export default AddProject;
