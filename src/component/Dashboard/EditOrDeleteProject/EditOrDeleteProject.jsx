import React, { useEffect, useState } from 'react';

const EditOrDeleteProject = () => {
    const [projects, setProjects] = useState([]);
    const [editProject, setEditProject] = useState(null);

    useEffect(() => {
        fetch('https://my-portfolio-server-kcfx.onrender.com/projects')
            .then(res => res.json())
            .then(data => setProjects(data));
    }, []);

    const handleDelete = (id) => {
        fetch(`https://my-portfolio-server-kcfx.onrender.com/projects/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    alert("Deleted successfully");
                    setProjects(projects.filter(p => p._id !== id));
                }
            });
    };

    const handleEditSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const updated = {
            title: form.title.value,
            image: form.image.value,
            link: form.link.value,
            github: form.github.value,
            languages: form.languages.value.split(','),
        };

        fetch(`https://my-portfolio-server-kcfx.onrender.com/projects/${editProject._id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updated)
        })
            .then(res => res.json())
            .then(data => {
                alert('Updated!');
                setEditProject(null);
            });
    };

    return (
        <div className='w-10/12 mx-auto'>
            <h2 className='text-2xl font-bold mb-4'>All Projects</h2>
            <div className='space-y-4'>
                {projects.map(project => (
                    <div key={project._id} className='border p-4 rounded'>
                        <h3 className='text-xl font-semibold'>{project.title}</h3>
                        <p><b>Languages:</b> {project.languages?.join(', ')}</p>
                        <button onClick={() => setEditProject(project)} className='btn btn-warning mr-2'>Edit</button>
                        <button onClick={() => handleDelete(project._id)} className='btn btn-error'>Delete</button>
                    </div>
                ))}
            </div>

            {editProject && (
                <form onSubmit={handleEditSubmit} className='mt-6 border p-4 rounded'>
                    <h3 className='text-lg font-bold mb-2'>Edit Project</h3>
                    <input name="title" defaultValue={editProject.title} placeholder='Title' className='input w-full mb-2' />
                    <input name="image" defaultValue={editProject.image} placeholder='Image URL' className='input w-full mb-2' />
                    <input name="link" defaultValue={editProject.link} placeholder='Live Link' className='input w-full mb-2' />
                    <input name="github" defaultValue={editProject.github} placeholder='GitHub Link' className='input w-full mb-2' />
                    <input name="languages" defaultValue={editProject.languages?.join(',')} placeholder='Languages (comma separated)' className='input w-full mb-2' />
                    <button type="submit" className='btn btn-success'>Update</button>
                </form>
            )}
        </div>
    );
};

export default EditOrDeleteProject;
