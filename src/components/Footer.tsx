const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const quickLinks = [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" }
  ];

  const handleLinkClick = (href: string) => {
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="py-12 bg-muted/30 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-primary mb-4">
                Shabarish
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Python Backend Developer passionate about building scalable 
                systems with modern cloud, backend, and automation technologies.
              </p>
            </div>
            {/* add empty div */}
            
            <div className="hidden md:block"></div>

            <div>
              <h4 className="font-medium text-primary mb-4">Quick Links</h4>
              <nav className="space-y-2">
                {quickLinks.map((link) => (
                  <button
                    key={link.label}
                    onClick={() => handleLinkClick(link.href)}
                    className="block text-left text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </button>
                ))}
              </nav>
            </div>
            
            {/* <div>
              <h4 className="font-medium text-primary mb-4">Built With</h4>
              <div className="flex flex-wrap gap-2">
                <span className="skill-tag text-xs">React</span>
                <span className="skill-tag text-xs">TypeScript</span>
                <span className="skill-tag text-xs">Tailwind CSS</span>
                <span className="skill-tag text-xs">Vite</span>
              </div>
            </div> */}
            
          </div>
          
          <div className="border-t border-border mt-8 pt-8 text-center">
            <p className="text-muted-foreground">
              © {currentYear} Shabarish. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;