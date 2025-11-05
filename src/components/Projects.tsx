const Projects = () => {
  const projects = [
    {
      title: "OOEF Frontend",
      description: "Modern frontend for the OOEF platform with authentication, dashboards, and responsive UI.",
      tags: ["React", "TypeScript", "Vite", "Tailwind CSS"],
      gradient: "from-primary to-secondary/60",
      link: "https://github.com/Akasmit/ooefFrontend",
      github: "https://github.com/Akasmit/ooefFrontend"
    },
    {
      title: "OOEF LMS",
      description: "Learning Management System with courses, quizzes, progress tracking, and role-based access.",
      tags: ["React", "Node.js", "Express", "MongoDB"],
      gradient: "from-secondary to-primary/60",
      link: "https://github.com/Akasmit/ooef-LMS",
      github: "https://github.com/Akasmit/ooef-LMS"
    },
    {
      title: "OOEF Web Admin",
      description: "Administrative dashboard for OOEF with analytics, user management, and content workflows.",
      tags: ["React", "TypeScript", "Redux", "Chart.js"],
      gradient: "from-primary to-primary/50",
      link: "https://github.com/Akasmit/ooefWeb-Admin",
      github: "https://github.com/Akasmit/ooefWeb-Admin"
    },
    {
      title: "Movie Recommender",
      description: "Machine learning–based movie recommendation system using collaborative filtering and content features.",
      tags: ["Python", "scikit-learn", "Pandas", "Flask"],
      gradient: "from-secondary to-secondary/50",
      link: "https://github.com/Akasmit/Movie-Recomender",
      github: "https://github.com/Akasmit/Movie-Recomender"
    },
    {
      title: "DALL·E Image Generator",
      description: "Full‑stack app to generate images from text prompts using the OpenAI API, with gallery and sharing.",
      tags: ["React", "Node.js", "OpenAI API", "Cloudinary"],
      gradient: "from-primary to-secondary",
      link: "https://github.com/Akasmit/Dall-E",
      github: "https://github.com/Akasmit/Dall-E"
    },
    {
      title: "Driver Drowsiness Monitoring",
      description: "Computer vision system that detects driver fatigue in real time using eye/face landmarks and alerts.",
      tags: ["Python", "OpenCV", "Dlib", "Deep Learning"],
      gradient: "from-secondary to-primary",
      link: "https://github.com/Akasmit/Driver-Drowsiness-Monitoring-System",
      github: "https://github.com/Akasmit/Driver-Drowsiness-Monitoring-System"
    }
  ];

  return (
    <section id="projects" className="min-h-screen flex items-center section-padding">
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground">Some of my recent work</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-card border border-border rounded-2xl p-8 hover-glow transition-all animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity`} />
              
              <div className="relative space-y-4">
                <h3 className="text-2xl font-bold group-hover:text-gradient transition-all">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-3 py-1 bg-muted rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 pt-4">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 font-semibold transition-colors"
                  >
                    View Project →
                  </a>
                  {/* <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground font-semibold transition-colors"
                  >
                    GitHub →
                  </a> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
