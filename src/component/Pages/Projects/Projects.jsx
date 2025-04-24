import projects from '../../../../src/data/projects.json';
import Project from '../Project/Project';

const Projects = () => {
  return (
    <section  className="bg-[#0f1117]  text-white">
      <hr className="bg-gray-500 h-px border-0" />
      <div id="projects" className="w-11/12 mx-auto px-6 pt-12 pb-5">
        <h2 className="text-3xl md:text-5xl font-extrabold bg-gradient-to-r from-pink-500 via-purple-700 to-indigo-800 text-transparent bg-clip-text mb-6 py-3">
          My Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects && projects.length > 0 ? (
            projects.map(project => (
              <Project
                key={project._id}
                title={project.title}
                tech={project.technologies.join(', ')}
                liveLink={project.live}
                githubLink={project.github}
                img={project.img}
              />
            ))
          ) : (
            <p>No projects available.</p>
          )}
        </div>
      </div>
      <hr className="bg-gray-500 h-px border-0" />
    </section>
  );
};

export default Projects;
