const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center section-padding relative overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1.5s" }} />
      </div>
      
      <div className="relative z-10 text-center space-y-6 animate-fade-up">
        <div className="space-y-2">
          <h2 className="text-2xl md:text-3xl text-muted-foreground font-light">Hello, I'm</h2>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-gradient">
            Akasmit Bachhav
          </h1>
        </div>
        
        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
          Full Stack Developer & Creative Technologist
        </p>
        
        <div className="flex gap-4 justify-center pt-8">
          <a 
            href="#projects" 
            className="px-8 py-3 bg-primary text-primary-foreground rounded-full font-semibold hover-glow transition-all"
          >
            View My Work
          </a>
          <a 
            href="#contact" 
            className="px-8 py-3 border-2 border-primary text-primary rounded-full font-semibold hover:bg-primary hover:text-primary-foreground transition-all"
          >
            Get In Touch
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <svg 
          className="w-6 h-6 text-primary" 
          fill="none" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth="2" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
