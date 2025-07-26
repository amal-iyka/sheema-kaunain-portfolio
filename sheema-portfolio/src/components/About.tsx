import React from 'react';

const About: React.FC = () => {
  const stats = [
    {
      number: '8.95',
      label: 'CGPA',
      description: 'Computer Science Engineering'
    },
    {
      number: '3+',
      label: 'Projects',
      description: 'Machine Learning & Web Development'
    },
    {
      number: '2',
      label: 'Internships',
      description: 'Web Development & Cybersecurity'
    },
    {
      number: '1+ Year',
      label: 'Experience',
      description: 'Programming & Development'
    }
  ];

  const whatIDo = [
    'Machine Learning Model Development',
    'Responsive Web Development',
    'Database Design & Management',
    'Software Engineering & Problem Solving'
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Passionate about creating innovative solutions through technology and continuous learning.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Content */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">My Journey</h3>
            <div className="space-y-4 text-gray-600">
              <p>
                I'm a dedicated Computer Science Engineering student with a passion for developing 
                innovative solutions through programming and machine learning. My academic journey 
                has been complemented by hands-on experience in web development and cybersecurity.
              </p>
              <p>
                I excel in Python, Java, and MySQL, with expertise in creating responsive web 
                interfaces and building machine learning models. My goal is to contribute to 
                innovative teams and drive technical excellence in real-world applications.
              </p>
            </div>

            <h4 className="text-xl font-semibold text-gray-900 mt-8 mb-4">What I Do</h4>
            <ul className="space-y-2">
              {whatIDo.map((item, index) => (
                <li key={index} className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 flex-shrink-0"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-sm font-semibold text-gray-900 mb-1">
                  {stat.label}
                </div>
                <div className="text-xs text-gray-600">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
