import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, Eye } from 'lucide-react';

const Resume = () => {
  return (
    <section id="resume" className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 px-6 py-2">My Resume</Badge>
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Professional{' '}
            <span className="bg-gradient-primary bg-clip-text text-transparent">Resume</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Download or view my complete professional resume with detailed work experience, 
            education, and technical skills.
          </p>
        </div>

        {/* Resume Download Section */}
        <div className="max-w-2xl mx-auto">
          <Card className="glass-card p-8 text-center">
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-4">Professional Resume</h3>
              <p className="text-muted-foreground">
                Download my complete professional resume with detailed work experience, 
                education, and technical skills.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-primary" asChild>
                <a href="https://drive.google.com/uc?export=download&id=1Yj0LIUEDZj7AWCw_utTxiJxPfaFXtyt6" target="_blank" rel="noopener noreferrer">
                  <Download className="w-5 h-5 mr-2" />
                  Download Resume
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="https://drive.google.com/file/d/1Yj0LIUEDZj7AWCw_utTxiJxPfaFXtyt6/view" target="_blank" rel="noopener noreferrer">
                  <Eye className="w-5 h-5 mr-2" />
                  View PDF
                </a>
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Resume;