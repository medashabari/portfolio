import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center hero-section overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6 animate-fade-in-up">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-gradient">
          Hi, I'm Shabarish
        </h1>
        <h2 className="text-2xl md:text-3xl font-medium text-muted-foreground mb-8">
          Python Backend Developer | DevOps Practitioner | Cloud-Native Engineer
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
          Building scalable systems with modern cloud, backend, and automation technologies.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Button 
            size="lg" 
            className="px-8 py-3 text-lg font-medium"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View Projects
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="px-8 py-3 text-lg font-medium"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Contact Me
          </Button>
          <Button 
            variant="secondary" 
            size="lg" 
            className="px-8 py-3 text-lg font-medium"
            onClick={() => {
              const link = document.createElement('a');
              link.href = '/Meda Shabarish - Resume.pdf';
              link.download = 'Meda Shabarish - Resume.pdf';
              link.click();
            }}
          >
            Download Resume
          </Button>
        </div>
        
        <div className="animate-bounce">
          <ArrowDown className="mx-auto h-6 w-6 text-muted-foreground" />
        </div>
      </div>
    </section>
  );
};

export default Hero;