import { Button } from "@/components/ui/button";
import { Code, Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "Navigation",
      links: [
        { label: "About", href: "#about" },
        { label: "Projects", href: "#projects" },
        { label: "Skills", href: "#skills" },
        { label: "Contact", href: "#contact" }
      ]
    },
    {
      title: "Projects",
      links: [
        { label: "Movie Recommendation System", href: "https://movie-recommendation-app-4jyaqy8am6tufoea2i5wld.streamlit.app/" },
        { label: "Customer Churn Prediction", href: "#projects" },
        { label: "Airline Management System", href: "#projects" },
        { label: "Portfolio Website", href: "#" }
      ]
    },
    {
      title: "Connect",
      links: [
        { label: "GitHub", href: "https://github.com/amal-iyka" },
        { label: "LinkedIn", href: "https://www.linkedin.com/in/sheema-kaunain/" },
        { label: "Location", href: "#" },
        { label: "Email", href: "mailto:sheemakaunainsh@gmail.com" }
      ]
    }
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com/amal-iyka", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/sheema-kaunain/", label: "LinkedIn" },
    { icon: Mail, href: "mailto:sheemakaunainsh@gmail.com", label: "Email" },
  ];

  return (
    <footer className="relative border-t border-border/50">
      <div className="container mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Code className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                Sheema Kaunain
              </span>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Results-oriented Computer Science Engineer with expertise in Python, Java, 
              and machine learning. Passionate about creating innovative solutions and 
              driving technical excellence.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  size="icon"
                  className="hover:bg-primary/10 hover:text-primary transition-colors"
                  asChild
                >
                  <a href={social.href} aria-label={social.label}>
                    <social.icon className="w-5 h-5" />
                  </a>
                </Button>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold mb-4 text-foreground">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-border/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <span>© {currentYear} Sheema Kaunain. Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>and lots of coffee.</span>
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-secondary/20 to-transparent pointer-events-none" />
    </footer>
  );
};

export default Footer;