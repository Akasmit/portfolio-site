const About = () => {
  return (
    <section id="about" className="min-h-screen flex items-center section-padding">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 animate-fade-up">
          <h2 className="text-5xl md:text-6xl font-bold">
            About <span className="text-gradient">Me</span>
          </h2>
          
          <div className="space-y-4 text-lg text-muted-foreground">
            <p>
              I'm a passionate full-stack developer with over 2 years of experience building 
              modern web applications that combine beautiful design with powerful functionality.
            </p>
            
            <p>
              My expertise spans across React, Node.js, TypeScript, and cloud technologies. 
              I love creating seamless user experiences and solving complex technical challenges.
            </p>
            
            <p>
              When I'm not coding, you'll find me exploring new technologies, contributing to 
              projects, or sharing knowledge with the developer community.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 pt-4">
            {["React", "TypeScript", "Node.js", "Next.js", "Tailwind CSS", "Python"].map((skill) => (
              <span 
                key={skill}
                className="px-4 py-2 bg-card border border-border rounded-lg text-sm font-medium hover-glow"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="relative animate-scale-in">
          <div className="aspect-square rounded-2xl overflow-hidden border-2 border-primary/30 hover-glow">
            <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="text-6xl">🧑🏻‍💻</div>
                <p className="text-2xl font-bold text-gradient">Crafting Digital Experiences</p>
              </div>
            </div>
          </div>
          
          <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-primary/10 rounded-full blur-2xl -z-10" />
          <div className="absolute -top-6 -left-6 w-40 h-40 bg-secondary/10 rounded-full blur-2xl -z-10" />
        </div>
      </div>
    </section>
  );
};

export default About;
