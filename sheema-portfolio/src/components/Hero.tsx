import React from 'react';

const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Hi, I'm{' '}
              <span className="text-blue-600">Sheema Kaunain</span>
            </h1>
            
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-700 mb-6">
              Computer Science Engineer
            </h2>
            
            <p className="text-lg text-gray-600 mb-8 max-w-2xl">
              Results-oriented Computer Science Engineer with a strong background in Python, Java, and MySQL. 
              Skilled in designing responsive web interfaces and building machine learning models. 
              Looking to join innovative teams and drive technical excellence in real-world applications.
            </p>
            
            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8 text-gray-600">
              <div className="flex items-center justify-center lg:justify-start">
                <span className="mr-2">📧</span>
                <a href="mailto:sheemakaunainsh@gmail.com" className="hover:text-blue-600 transition-colors">
                  sheemakaunainsh@gmail.com
                </a>
              </div>
              <div className="flex items-center justify-center lg:justify-start">
                <span className="mr-2">📱</span>
                <a href="tel:+919342731307" className="hover:text-blue-600 transition-colors">
                  +91 9342731307
                </a>
              </div>
              <div className="flex items-center justify-center lg:justify-start">
                <span className="mr-2">📍</span>
                <span>Tirupattur, Tamil Nadu, India</span>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                Get In Touch
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors duration-200"
              >
                View My Work
              </button>
            </div>
            
            {/* Social Links */}
            <div className="flex gap-6 justify-center lg:justify-start mt-8">
              <a
                href="https://github.com/amal-iyka"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition-colors duration-200 font-medium"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/sheema-kaunain/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition-colors duration-200 font-medium"
              >
                LinkedIn
              </a>
            </div>
          </div>
          
          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 p-1">
                <img
                  src="/lovable-uploads/f7c8f0df-b210-450d-a237-cbd35a6981ff.png"
                  alt="Sheema Kaunain"
                  className="w-full h-full rounded-full object-cover bg-white"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgdmlld0JveD0iMCAwIDMyMCAzMjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMjAiIGhlaWdodD0iMzIwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0xNjAgMTAwQzE4MS4wNDYgMTAwIDIwMCAxMTguOTU0IDIwMCAxNDBDMjAwIDE2MS4wNDYgMTgxLjA0NiAxODAgMTYwIDE4MEM4OC45NTQgMTgwIDEyMCAxNjEuMDQ2IDEyMCAxNDBDMTIwIDExOC45NTQgMTM4Ljk1NCAxMDAgMTYwIDEwMFoiIGZpbGw9IiM5Q0EzQUYiLz4KPHBhdGggZD0iTTE2MCAyMDBDMTk2LjQ0IDIwMCAyMjYuNjY3IDIyMC44OTYgMjQwIDI1MEg4MEM5My4zMzMzIDIyMC44OTYgMTIzLjU2IDIwMCAxNjAgMjAwWiIgZmlsbD0iIzlDQTNBRiIvPgo8L3N2Zz4K';
                  }}
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-200 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-300 rounded-full opacity-30 animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
