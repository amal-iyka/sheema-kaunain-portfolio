import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Palette, Server, Smartphone } from 'lucide-react';

const About = () => {
  const services = [
    {
      icon: Code,
      title: "Frontend Development",
      description: "Creating responsive and interactive user interfaces with React, TypeScript, and modern CSS frameworks."
    },
    {
      icon: Server,
      title: "Backend Development", 
      description: "Building scalable server-side applications with Node.js, Python, and cloud technologies."
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Designing beautiful and intuitive user experiences with attention to detail and usability."
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Developing cross-platform mobile applications using React Native and modern mobile frameworks."
    }
  ];

  const stats = [
    { number: "3+", label: "Projects Completed" },
    { number: "8.95", label: "CGPA" },
    { number: "2+", label: "Internships" },
    { number: "8+", label: "Technologies" }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 px-6 py-2">About Me</Badge>
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Crafting Digital Experiences with{' '}
            <span className="bg-gradient-primary bg-clip-text text-transparent">Passion</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm a passionate Computer Science Engineer with expertise in Python, Java, and web technologies. 
            I love building machine learning models and creating responsive web interfaces that solve real-world problems.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="text-3xl lg:text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Services */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="glass-card hover:shadow-glow-secondary transition-all duration-300 group animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Skills Summary */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-8">Core Technologies</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Python", "Java", "JavaScript", "React.js", "HTML", "CSS", 
              "MySQL", "Pandas", "Scikit-learn", "Streamlit", "Git", "GitHub"
            ].map((tech, index) => (
              <Badge 
                key={index} 
                variant="secondary" 
                className="px-4 py-2 hover:bg-primary hover:text-primary-foreground transition-colors cursor-default animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;