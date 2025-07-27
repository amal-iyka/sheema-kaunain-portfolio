import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "HTML/CSS", level: 85 },
        { name: "JavaScript", level: 80 },
        { name: "React.js", level: 75 },
        { name: "Responsive Design", level: 85 }
      ]
    },
    {
      title: "Backend & Data",
      skills: [
        { name: "Python", level: 90 },
        { name: "Java", level: 85 },
        { name: "MySQL", level: 80 },
        { name: "Pandas", level: 85 }
      ]
    },
    {
      title: "Machine Learning & Tools",
      skills: [
        { name: "Scikit-learn", level: 80 },
        { name: "Git/GitHub", level: 85 },
        { name: "Streamlit", level: 75 },
        { name: "Jupyter Notebook", level: 80 }
      ]
    }
  ];

  const certifications = [
    "ShadowFox Inc. Web Development",
    "Tata Cyber Security Internship",
    "Bachelor of Engineering (CSE)",
    "Higher Secondary Education"
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 px-6 py-2">Skills & Expertise</Badge>
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Technical{' '}
            <span className="bg-gradient-primary bg-clip-text text-transparent">Proficiency</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Here's an overview of my technical skills and proficiency levels in various 
            technologies and tools I use for development.
          </p>
        </div>

        {/* Skills Categories */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <Card 
              key={categoryIndex} 
              className="glass-card hover:shadow-glow-secondary transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${categoryIndex * 0.2}s` }}
            >
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-6 text-center">{category.title}</h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-xs text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress 
                        value={skill.level} 
                        className="h-2"
                        style={{ 
                          animationDelay: `${(categoryIndex * 4 + skillIndex) * 0.1}s` 
                        }}
                      />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Certifications */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-8">Certifications & Achievements</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {certifications.map((cert, index) => (
              <Card 
                key={index} 
                className="glass-card hover:shadow-glow-primary transition-all duration-300 cursor-pointer group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-primary-foreground font-bold text-lg">
                      {cert.split(' ').map(word => word[0]).join('').slice(0, 2)}
                    </span>
                  </div>
                  <p className="text-sm font-medium text-center group-hover:text-primary transition-colors">
                    {cert}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Additional Skills Tags */}
        <div className="mt-16 text-center">
          <h3 className="text-xl font-semibold mb-6">Additional Technologies</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Problem Solving", "Algorithms", "Logic Building", "Debugging", 
              "Quick Learning", "Adaptability", "Communication", "OOP",
              "File Handling", "Data Visualization", "Machine Learning", "Cosine Similarity"
            ].map((tech, index) => (
              <Badge 
                key={index} 
                variant="secondary" 
                className="px-4 py-2 hover:bg-primary hover:text-primary-foreground transition-all duration-200 cursor-default animate-fade-in"
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

export default Skills;