import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail, Play } from 'lucide-react';
import profileImage from '@/assets/profile-image.jpg';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary to-background opacity-50" />
      <div className="absolute top-20 left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <div className="mb-6 animate-fade-in">
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                Available for new opportunities
              </span>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Hi, I'm{' '}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Sheema Kaunain
                </span>
              </h1>
              <h2 className="text-2xl lg:text-3xl text-muted-foreground mb-6 font-light">
                Computer Science Engineer & Full-Stack Developer
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-2xl">
                Results-oriented Computer Science Engineer with expertise in Python, Java, and MySQL. 
                Skilled in designing responsive web interfaces and building machine learning models. 
                Looking to join innovative teams and drive technical excellence in real-world applications.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8 animate-slide-in-right">
              <Button size="lg" className="group bg-gradient-primary hover:shadow-glow-primary transition-all duration-300">
                <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                View My Work
              </Button>
              <Button variant="outline" size="lg" className="hover:bg-primary hover:text-primary-foreground">
                <Mail className="w-5 h-5 mr-2" />
                Get In Touch
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start space-x-4 animate-fade-in" style={{ animationDelay: '0.5s' }}>
              <Button asChild variant="ghost" size="icon" className="hover:bg-primary/10 hover:text-primary">
                <a href="https://github.com/amal-iyka" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github className="w-5 h-5" />
                </a>
              </Button>
              <Button asChild variant="ghost" size="icon" className="hover:bg-primary/10 hover:text-primary">
                <a href="https://www.linkedin.com/in/sheema-kaunain/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin className="w-5 h-5" />
                </a>
              </Button>
              <Button asChild variant="ghost" size="icon" className="hover:bg-primary/10 hover:text-primary">
                <a href="mailto:sheemakaunainsh@gmail.com" aria-label="Email">
                  <Mail className="w-5 h-5" />
                </a>
              </Button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="lg:w-1/2 flex justify-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary/20 shadow-glow-primary">
                <img
                  src="/uploads/bd8d993b-c785-4da1-9650-da62e3029f34.png"
                  alt="Sheema Kaunain - Computer Science Engineer"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-primary/20 rounded-full blur-xl animate-glow-pulse" />
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-purple-500/20 rounded-full blur-xl animate-glow-pulse" style={{ animationDelay: '1.5s' }} />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-muted-foreground" />
        </div>
      </div>
    </section>
  );
};

export default Hero;