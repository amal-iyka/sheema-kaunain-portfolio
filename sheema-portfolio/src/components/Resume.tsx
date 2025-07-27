import React from 'react';

const Resume: React.FC = () => {
  return (
    <section id="resume" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            My Resume
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Download or view my complete professional resume with detailed work experience, education, and technical skills.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-gray-50 p-8 rounded-lg text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Professional Resume</h3>
            <p className="text-gray-600 mb-6">
              Download my complete professional resume with detailed work experience, education, and technical skills.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/resume.pdf"
                download
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
              >
                Download Resume
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors duration-200"
              >
                View PDF
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
