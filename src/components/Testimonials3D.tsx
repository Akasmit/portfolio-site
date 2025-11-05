import { StaggerTestimonials } from "@/components/ui/stagger-testimonials";

const Testimonials3D = () => {
  return (
    <section id="testimonials" className="min-h-screen flex items-center justify-center section-padding overflow-hidden">
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-12 animate-fade-up">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            Client <span className="text-gradient">Testimonials</span>
          </h2>
          <p className="text-xl text-muted-foreground">What people say about working with me</p>
        </div>

        <StaggerTestimonials />
      </div>
    </section>
  );
};

export default Testimonials3D;
