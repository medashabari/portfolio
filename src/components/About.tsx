const About = () => {
  const skills = [
    "Python",
    "FastAPI",
    "Django",
    "DevOps",
    "AWS",
    "Azure",
    "Docker",
    "Kubernetes",
    "Git",
    "ArgoCD",
    "Terraform",
    "PostgreSQL",
    "MySQL",
    "MongoDB",
    "Redis",
    "RabbitMQ",
    "Prometheus",
    "Grafana",
    "CI/CD",
    "GitHub Actions",
    "Jenkins",
  ];

  return (
    <section id="about" className="py-20 section-gradient">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-primary">
            About Me
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Hello! I'm Shabarish Meda, a backend developer with 1.9+ years of experience in building scalable, cloud-native applications. 
                I work at Tenzai Systems, where I’ve contributed to real-world systems like traffic enforcement, budget analysis, and Gen AI using Python and modern backend tools.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                I specialize in backend development, containerization, and cloud-native architectures
                with a strong focus on scalability and automation.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I graduated in 2023 with a Bachelor’s in Computer Science and Engineering from Santhiram Engineering College, and I’m a certified Kubernetes and Cloud Native Associate. 
                I’m passionate about staying current with evolving trends in cloud tech, automation, and system design.
              </p>
            </div>

            <div className="animate-slide-in-right">
              <h3 className="text-2xl font-semibold mb-6 text-primary">
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <span key={skill} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
