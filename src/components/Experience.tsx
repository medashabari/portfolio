import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Experience = () => {
  const experiences = [
    {
      company: "Tenzai Systems",
      role: "Software Engineer",
      period: "Sep 2023 - Present",
      description:
        "Developing scalable backend systems using Python, FastAPI, and cloud technologies. Working on microservices architecture, containerization, and DevOps practices.",
      achievements: [
        "Designed and implemented a citation management system using Python Django and PostgreSQL, enabling traffic enforcement agencies to process 3000+ violations monthly with 99.99% data accuracy and integrity.",
        "Developed multiple data pipelines capable of managing image and video data from various sources (APIs, S3 buckets etc.),loading the data to AWS RDS.",
        "Boosted the stability and speed of data pipelines by 80% reducing the processing time from 5 hours to 1 hour.",
        "Integrated Xpress Bill Pay APIs into the citation platform, boosting online fine collection success rate by 30%.",
        "Planned and created the end-to-end DevOps automation pipeline, reducing manual deployment errors by 40% and accelerating release frequency by 3x",
        "Orchestrated Kubernetes deployments in scalable EKS clusters to improve uptime by 99%.",
        "Ensured secure deployments and container image integrity using AWS Private ECR and Secrets Manager.",
         "Created  and  maintained  technical  documentation  for  API  integrations,  CI/CD  workflows  and  deployment procedures"
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 section-gradient">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-primary">
            Experience
          </h2>

          <div className="space-y-8 mb-12">
            {experiences.map((exp, index) => (
              <Card key={index} className="card-elegant border-0">
                <CardContent className="pt-6">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-primary mb-1">
                        {exp.role}
                      </h3>
                      <h4 className="text-lg font-medium text-muted-foreground mb-2">
                        {exp.company}
                      </h4>
                    </div>
                    <span className="skill-tag">{exp.period}</span>
                  </div>

                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {exp.description}
                  </p>

                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li
                        key={i}
                        className="flex items-center text-sm text-muted-foreground"
                      >
                        <span className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button
              size="lg"
              className="px-8 py-3"
              onClick={() => {
                const link = document.createElement("a");
                link.href = "/Meda Shabarish - Resume.pdf";
                link.download = "Meda Shabarish - Resume.pdf";
                link.click();
              }}
            >
              Download Full Resume
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
