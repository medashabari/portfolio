import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import project1 from "@/assets/project1.png";
import project2 from "@/assets/project2.png";
import project3 from "@/assets/project3.png";
import project4 from "@/assets/project4.png";


const Projects = () => {
  const projects = [
    {
      title: "Traffic Violation Platform",
      description: "Microservice-based backend using Django & PostgreSQL with role-based workflow for reviewing video violations. Integrated payment portal via Zill Money API with S3 file management and scheduled jobs.",
      image: project3,
      tech: ["Python", "Django", "PostgreSQL", "S3","AWS", ,"Microservices"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Budget Analysis Platform",
      description: "Backend system with Azure Document Intelligence to process invoices, Redis caching for performance, and RBAC for data security. Features Azure Entra popup login with backend token verification.",
      image: project2,
      tech: ["Python", "MySQL", "Azure Document Intelligence", "Redis", "Azure Entra"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Generative AI Product – Zuno",
      description: "RAG-based AI assistant using FastAPI with embeddings stored in Milvus. Features RabbitMQ for async document processing, MongoDB aggregation, and Prometheus & Grafana monitoring.",
      image: project1,
      tech: ["FastAPI", "Milvus", "RabbitMQ", "MongoDB", "Prometheus", "Grafana"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "DevOps CI/CD for Go App",
      description: "End-to-end DevOps pipeline for a Go web app. Containerized the app, created Kubernetes manifests, Helm charts, and GitHub Actions for testing, building Docker images, and tagging. Integrated ArgoCD for automatic deployment on push.",
      image: project4,
      tech: ["Go", "Docker", "Kubernetes", "Helm", "GitHub Actions", "ArgoCD"],
      liveUrl: "#",
      githubUrl: "https://github.com/medashabari/go-web-app-cicd"
    },
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-primary">
            Featured Projects
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="card-elegant border-0 overflow-hidden">
                <div className="overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-primary">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span key={tech} className="skill-tag text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* <div className="flex gap-3">
                    <Button 
                      size="sm" 
                      className="flex-1"
                      onClick={() => window.open(project.liveUrl, '_blank')}
                    >
                      Live Demo
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => window.open(project.githubUrl, '_blank')}
                    >
                      <Github className="h-4 w-4" />
                    </Button>
                  </div> */}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;