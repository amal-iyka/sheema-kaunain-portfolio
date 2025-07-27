import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from 'lucide-react';
import project1 from '@/assets/project-1.jpg';
import project2 from '@/assets/project-2.jpg';
import project3 from '@/assets/project-3.jpg';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Movie Recommendation System",
      description: "A Python-based recommendation system using cosine similarity to suggest movies. Built with Pandas, Scikit-learn, and deployed using Streamlit with interactive UI and filtering by user preferences.",
      image: "/uploads/21195d79-263c-484d-8b7a-a3adca7a9f55.png",
      technologies: ["Python", "Pandas", "Scikit-learn", "Streamlit", "Machine Learning"],
      githubUrl: "https://github.com/amal-iyka/movie-recommendation",
      liveUrl: "https://movie-recommendation-app-4jyaqy8am6tufoea2i5wld.streamlit.app/",
      featured: true
    },
    {
      id: 2,
      title: "Customer Churn Prediction",
      description: "Developed a machine learning pipeline to predict customer churn using Logistic Regression and Decision Trees with trend visualization using Matplotlib and Seaborn.",
      image: "/uploads/c4617174-3cb7-4c6b-98a6-1c7d463cf636.png",
      technologies: ["Python", "Scikit-learn", "Pandas", "Seaborn", "Jupyter Notebook"],
      githubUrl: "https://github.com/amal-iyka/customer-churn",
      liveUrl: "#",
      featured: false
    },
    {
      id: 3,
      title: "Airline Management System",
      description: "A Java-based console application to manage flights, bookings, and passengers with implemented file handling for data persistence using OOP principles.",
      image: project3,
      technologies: ["Java", "OOP", "File Handling", "Console Application"],
      githubUrl: "https://github.com/amal-iyka/airline-management",
      liveUrl: "#",
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 px-6 py-2">My Projects</Badge>
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Recent{' '}
            <span className="bg-gradient-primary bg-clip-text text-transparent">Work</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Here are some of my recent projects that showcase my skills in web development, 
            UI/UX design, and problem-solving.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.id} 
              className={`glass-card hover:shadow-glow-secondary transition-all duration-500 group overflow-hidden animate-fade-in ${
                project.featured ? 'lg:col-span-2 xl:col-span-1' : ''
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Project Links Overlay */}
                <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <Button size="icon" variant="secondary" className="w-8 h-8" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4" />
                    </a>
                  </Button>
                  {project.liveUrl !== "#" && (
                    <Button size="icon" variant="secondary" className="w-8 h-8" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </Button>
                  )}
                </div>

                {/* Featured Badge */}
                {project.featured && (
                  <Badge className="absolute top-4 left-4 bg-primary">
                    Featured
                  </Badge>
                )}
              </div>

              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex} 
                      variant="outline" 
                      className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="p-6 pt-0">
                <div className="flex space-x-3 w-full">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1"
                    asChild
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button 
                    size="sm" 
                    className="flex-1 bg-gradient-primary"
                    asChild
                  >
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="hover:bg-primary hover:text-primary-foreground">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;