import React from 'react';

const Education: React.FC = () => {
  const education = [
    {
      degree: 'Bachelor of Engineering (CSE)',
      institution: 'Priyadarshini Engineering College',
      period: 'Nov 2023 - July 2025',
      cgpa: '8.95',
      status: 'Current',
      highlights: [
        'Developed expertise in programming, Cloud Computing, and software design',
        'Strengthened problem-solving skills by working on real-world projects',
        'Hands-on experience with Cloud Computing technologies'
      ],
      areas: ['Programming', 'Cloud Computing', 'Software Design', 'System Optimization', 'Problem Solving']
    },
    {
      degree: 'Higher Secondary Education (HSC)',
      institution: 'Al-Ameen Matric.Hr.Sec.School',
      period: 'Jun 2020 - Apr 2022',
      percentage: '80%',
      status: 'Completed',
      highlights: [
        'Built a comprehensive base in Mathematics and Computer Science',
        'Developed critical thinking and analytical abilities',
        'Enhanced problem-solving skills'
      ],
      areas: ['Mathematics', 'Computer Science', 'Critical Thinking', 'Analytical Skills', 'Problem Solving']
    }
  ];

  const achievements = [
    {
      title: 'Academic Excellence',
      description: 'Maintaining 8.95 CGPA in Computer Science Engineering'
    },
    {
      title: 'Project Leadership',
      description: 'Successfully completed multiple machine learning and web development projects'
    },
    {
      title: 'Technical Skills',
      description: 'Proficient in Python, Java, MySQL, and modern web technologies'
    }
  ];

  return (
    <section id="education" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Education & Achievements
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Academic journey focused on building strong foundations in computer science and developing practical skills.
          </p>
        </div>

        {/* Education Timeline */}
        <div className="relative mb-16">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-blue-200"></div>

          {education.map((edu, index) => (
            <div key={index} className="relative mb-12 last:mb-0">
              {/* Timeline Dot */}
              <div className="absolute left-2 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>

              {/* Content */}
              <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:ml-auto md:pl-12'}`}>
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                      {edu.status}
                    </span>
                    <span className="text-sm font-semibold text-blue-600">
                      {edu.cgpa || edu.percentage}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {edu.degree}
                  </h3>
                  <h4 className="text-lg font-semibold text-gray-700 mb-2">
                    {edu.institution}
                  </h4>
                  <p className="text-sm text-gray-500 mb-4 flex items-center">
                    <span className="mr-2">📅</span>
                    {edu.period}
                  </p>

                  {/* Highlights */}
                  <div className="mb-4">
                    <ul className="space-y-2">
                      {edu.highlights.map((highlight, highlightIndex) => (
                        <li key={highlightIndex} className="flex items-start text-sm text-gray-600">
                          <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Areas of Study */}
                  <div>
                    <h5 className="text-sm font-semibold text-gray-900 mb-2">
                      Areas of Study:
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {edu.areas.map((area, areaIndex) => (
                        <span
                          key={areaIndex}
                          className="px-2 py-1 bg-white text-gray-700 text-xs rounded font-medium border border-gray-200"
                        >
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Academic Achievements */}
        <div className="bg-gray-50 p-8 rounded-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Academic Achievements
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <div className="w-6 h-6 bg-blue-600 rounded"></div>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    {achievement.title}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {achievement.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
