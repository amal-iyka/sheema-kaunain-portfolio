import React from 'react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      skills: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Responsive Design', 'UI/UX Design']
    },
    {
      title: 'Backend & Data',
      skills: ['Python', 'Java', 'MySQL', 'Pandas', 'Scikit-learn', 'Data Analysis']
    },
    {
      title: 'Machine Learning',
      skills: ['Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Model Development']
    },
    {
      title: 'Problem Solving',
      skills: ['Algorithms', 'Logic Building', 'Debugging', 'System Design', 'Performance Optimization']
    },
    {
      title: 'Tools & Platforms',
      skills: ['Git', 'GitHub', 'Streamlit', 'Jupyter Notebook', 'VS Code', 'Linux']
    },
    {
      title: 'Soft Skills',
      skills: ['Quick Learner', 'Adaptability', 'Communication', 'Team Collaboration', 'Critical Thinking']
    }
  ];

  const technicalProficiency = [
    { skill: 'Python', percentage: 90 },
    { skill: 'Java', percentage: 85 },
    { skill: 'JavaScript', percentage: 80 },
    { skill: 'MySQL', percentage: 85 },
    { skill: 'React.js', percentage: 75 },
    { skill: 'Machine Learning', percentage: 80 },
    { skill: 'Web Development', percentage: 85 },
    { skill: 'Problem Solving', percentage: 90 }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            My Skills
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A comprehensive set of technical and soft skills developed through academic learning and practical experience.
          </p>
        </div>

        {/* Skills Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                  <div className="w-4 h-4 bg-blue-600 rounded"></div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-blue-100 hover:text-blue-700 transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Technical Proficiency */}
        <div className="bg-white p-8 rounded-lg shadow-sm">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Technical Proficiency
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {technicalProficiency.map((item, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-700">
                    {item.skill}
                  </span>
                  <span className="text-sm font-medium text-gray-500">
                    {item.percentage}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${item.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
