import React from 'react';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: 'Web Development Intern',
      company: 'ShadowFox Inc.',
      period: 'Jan 2025 - Feb 2025',
      location: 'Remote',
      type: 'Internship',
      description: 'Improved code performance by optimizing logic and actively participated in debugging to troubleshoot and resolve critical issues.',
      achievements: [
        'Enhanced code efficiency and collaborated in debugging efforts to identify and resolve performance issues.',
        'Worked with modern web development frameworks and tools to deliver high-quality solutions.'
      ],
      skills: ['Web Development', 'JavaScript', 'React.js', 'Performance Optimization', 'Debugging']
    },
    {
      title: 'Cybersecurity Intern',
      company: 'Tata Cyber Security Virtual Internship',
      period: 'March 2025',
      location: 'Virtual',
      type: 'Virtual Internship',
      description: 'Explored threat detection and vulnerability scanning techniques for comprehensive security assessment.',
      achievements: [
        'Learned penetration testing basics and ethical hacking tools to identify system vulnerabilities.',
        'Gained hands-on experience with cybersecurity frameworks and security best practices.'
      ],
      skills: ['Cybersecurity', 'Threat Detection', 'Vulnerability Scanning', 'Penetration Testing', 'Ethical Hacking']
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Work Experience
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Professional experience and internships that have shaped my technical skills and industry knowledge.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-blue-200"></div>

          {experiences.map((exp, index) => (
            <div key={index} className="relative mb-12 last:mb-0">
              {/* Timeline Dot */}
              <div className="absolute left-2 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>

              {/* Content */}
              <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:ml-auto md:pl-12'}`}>
                <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                  {/* Header */}
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                      {exp.type}
                    </span>
                    <span className="text-sm text-gray-500">{exp.location}</span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {exp.title}
                  </h3>
                  <h4 className="text-lg font-semibold text-blue-600 mb-2">
                    {exp.company}
                  </h4>
                  <p className="text-sm text-gray-500 mb-4 flex items-center">
                    <span className="mr-2">📅</span>
                    {exp.period}
                  </p>

                  <p className="text-gray-600 mb-4">
                    {exp.description}
                  </p>

                  {/* Achievements */}
                  <div className="mb-4">
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start text-sm text-gray-600">
                          <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Skills */}
                  <div>
                    <h5 className="text-sm font-semibold text-gray-900 mb-2">
                      Key Skills & Technologies:
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-blue-50 p-8 rounded-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Open to new opportunities and exciting projects
            </h3>
            <p className="text-gray-600 mb-4">
              Looking for opportunities in Full-stack Web Development, Machine Learning Engineer positions, 
              Software Developer roles, and Freelance projects.
            </p>
            <button
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
