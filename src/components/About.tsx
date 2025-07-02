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
                Hello! I'm Shabarish Meda, a backend developer with nearly 2
                years of experience in building scalable, cloud-native
                applications. I hold a Bachelor's degree in Computer
                Science and Engineering, which I completed in 2023 from
                Santhiram Engineering College. Since then, I've been working at
                Tenzai Systems, contributing to real-world systems across
                traffic enforcement, healthcare, and AI domains using Python and
                modern backend tools.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                I specialize in backend development, containerization, and cloud-native architectures
                with a strong focus on scalability and automation.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I hold a Kubernetes and Cloud Native Associate certification and
                continuously stay updated with the latest in cloud technologies,
                automation, and system architecture.
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
