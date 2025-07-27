import React from 'react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Movie Recommendation System',
      date: 'Feb 25 - Mar 25',
      description: 'Created a Python-based app using cosine similarity to recommend movies. Built with Pandas, Scikit-learn, and deployed using Streamlit. Enabled interactive UI and filtering by user preferences.',
      image: null,
      technologies: ['Python', 'Pandas', 'Scikit-learn', 'Streamlit', 'Machine Learning'],
      codeLink: 'https://github.com/amal-iyka/movie-recommendation-system',
      liveLink: 'https://movie-recommendation-app-4jyaqy8am6tufoea2i5wld.streamlit.app/'
    },
    {
      title: 'Customer Churn Prediction',
      date: 'Jan 25 - Feb 25',
      description: 'Developed a pipeline to predict customer churn using Logistic Regression and Decision Trees. Visualized trends with Matplotlib and Seaborn for comprehensive data analysis.',
      image: null,
      technologies: ['Python', 'Scikit-learn', 'Pandas', 'Seaborn', 'Jupyter Notebook'],
      codeLink: 'https://github.com/amal-iyka/customer-churn-prediction',
      liveLink: null
    },
    {
      title: 'Airline Management System',
      date: 'December 25',
      description: 'Java-based console application to manage flights, bookings, and passengers. Implemented file handling for data persistence and utilized object-oriented programming principles.',
      image: null,
      technologies: ['Java', 'OOP', 'File Handling', 'Console Application'],
      codeLink: 'https://github.com/amal-iyka/airline-management-system',
      liveLink: null
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            My Projects
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A showcase of my technical projects demonstrating skills in machine learning, web development, and software engineering.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden border border-gray-100"
            >
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center">
                <div className="text-4xl font-bold text-blue-600">
                  {project.title.charAt(0)}
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-xs font-medium text-gray-600">
                    {project.date}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <a
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gray-900 text-white text-center py-2 px-4 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors duration-200"
                  >
                    View Code
                  </a>
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 border border-blue-600 text-blue-600 text-center py-2 px-4 rounded-lg text-sm font-medium hover:bg-blue-600 hover:text-white transition-colors duration-200"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Link */}
        <div className="text-center">
          <a
            href="https://github.com/amal-iyka"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200"
          >
            View All Projects on GitHub
            <svg
              className="ml-2 w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
