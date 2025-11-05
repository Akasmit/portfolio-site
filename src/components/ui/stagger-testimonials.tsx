"use client"

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const SQRT_5000 = Math.sqrt(5000);

const testimonials = [
  {
    tempId: 0,
    testimonial: "Akasmit delivered an exceptional product that exceeded our expectations. His technical skills are outstanding.",
    by: "Riya Jain, Product Manager at OOEF",
  imgSrc: import.meta.env.BASE_URL + "Riya.png"
  },
  {
    tempId: 1,
    testimonial: "Professional, responsive, and incredibly talented. Akasmit turned our vision into reality with elegant code and beautiful design.",
    by: "Preetam Saini, Director at OOEF",
  imgSrc: import.meta.env.BASE_URL + "Preetam.png"
  },
  {
    tempId: 2,
    testimonial: "Akasmit's expertise in modern web technologies helped us transform our platform. Highly recommended for complex projects.",
    by: "Tyler Lubben, Founder of Vizual Intelligence",
  imgSrc: import.meta.env.BASE_URL + "Tyler.png"
  },
  {
    tempId: 3,
    testimonial: "Working with Akasmit was a pleasure. He's not just a developer, but a problem solver who truly understands business needs.",
    by: "Ramashish, Director at OOEF",
  imgSrc: import.meta.env.BASE_URL + "Shish.png"
  },
  {
    tempId: 4,
    testimonial: "Akasmit seamlessly bridges the gap between design and development. His work is pixel-perfect and performant.",
    by: "Lisa Anderson, Design Lead at Creative Labs",
    imgSrc: "https://i.pravatar.cc/150?img=5"
  },
  {
    tempId: 5,
    testimonial: "The best developer I've worked with. Akasmit's attention to detail and code quality is exceptional.",
    by: "James Wilson, CTO at TechVentures",
    imgSrc: "https://i.pravatar.cc/150?img=9"
  },
  // {
  //   tempId: 6,
  //   testimonial: "Akasmit's full-stack expertise saved us months of development time. Absolutely worth every penny.",
  //   by: "Rachel Green, Founder at StartupLabs",
  //   imgSrc: "https://i.pravatar.cc/150?img=7"
  // },
  // {
  //   tempId: 7,
  //   testimonial: "I would be lost without Akasmit's solutions. The ROI is easily 100X for us.",
  //   by: "Daniel Martinez, CEO at ScaleUp",
  //   imgSrc: "https://i.pravatar.cc/150?img=8"
  // },
  // {
  //   tempId: 8,
  //   testimonial: "Simply the best web developer. Period.",
  //   by: "Fernando Santos, UX Designer at DesignFirst",
  //   imgSrc: "https://i.pravatar.cc/150?img=9"
  // },
  // {
  //   tempId: 9,
  //   testimonial: "I hired Akasmit 2 years ago and never looked back. Outstanding quality every single time.",
  //   by: "Andy Lee, DevOps Lead at CloudSystems",
  //   imgSrc: "https://i.pravatar.cc/150?img=10"
  // },
  // {
  //   tempId: 10,
  //   testimonial: "I've been searching for a developer like Akasmit for YEARS. So glad I finally found him!",
  //   by: "Pete Thompson, Sales Director at GrowthCo",
  //   imgSrc: "https://i.pravatar.cc/150?img=11"
  // },
  // {
  //   tempId: 11,
  //   testimonial: "Akasmit's solutions are so intuitive, we got the team up to speed in 10 minutes.",
  //   by: "Marina Costa, Product Owner at TechFlow",
  //   imgSrc: "https://i.pravatar.cc/150?img=12"
  // },
  // {
  //   tempId: 12,
  //   testimonial: "Akasmit's support is unparalleled. Always available and ready to help with any challenge.",
  //   by: "Olivia Brown, Project Manager at BuildRight",
  //   imgSrc: "https://i.pravatar.cc/150?img=13"
  // },
  // {
  //   tempId: 13,
  //   testimonial: "The efficiency gains we've seen since working with Akasmit are off the charts!",
  //   by: "Raj Patel, Operations Director at StreamlineTech",
  //   imgSrc: "https://i.pravatar.cc/150?img=14"
  // },
  // {
  //   tempId: 14,
  //   testimonial: "Akasmit has revolutionized our workflow. It's a complete game-changer!",
  //   by: "Lila Zhang, Tech Lead at InnovateNow",
  //   imgSrc: "https://i.pravatar.cc/150?img=15"
  // },
  // {
  //   tempId: 15,
  //   testimonial: "Akasmit's solutions scale beautifully. They grow with our business seamlessly.",
  //   by: "Trevor Moore, CTO at GrowthEngine",
  //   imgSrc: "https://i.pravatar.cc/150?img=16"
  // },
  // {
  //   tempId: 16,
  //   testimonial: "I appreciate how Akasmit stays ahead of the curve with the latest technologies.",
  //   by: "Naomi Kim, Innovation Lead at FutureLab",
  //   imgSrc: "https://i.pravatar.cc/150?img=17"
  // },
  // {
  //   tempId: 17,
  //   testimonial: "The ROI from working with Akasmit is incredible. Best investment we've made.",
  //   by: "Victor Chang, Finance Director at ProfitMax",
  //   imgSrc: "https://i.pravatar.cc/150?img=18"
  // },
  // {
  //   tempId: 18,
  //   testimonial: "Akasmit's work is robust yet elegant. Perfect balance of form and function.",
  //   by: "Yuki Tanaka, Tech Architect at SystemsPro",
  //   imgSrc: "https://i.pravatar.cc/150?img=19"
  // },
  // {
  //   tempId: 19,
  //   testimonial: "We've tried many developers, but Akasmit stands out in reliability and performance.",
  //   by: "Zoe Williams, Engineering Manager at ReliableTech",
  //   imgSrc: "https://i.pravatar.cc/150?img=20"
  // }
];

interface TestimonialCardProps {
  position: number;
  testimonial: typeof testimonials[0];
  handleMove: (steps: number) => void;
  cardSize: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ 
  position, 
  testimonial, 
  handleMove, 
  cardSize 
}) => {
  const isCenter = position === 0;

  return (
    <div
      onClick={() => handleMove(position)}
      className={cn(
        "absolute left-1/2 top-1/2 cursor-pointer border-2 p-8 transition-all duration-500 ease-in-out",
        isCenter 
          ? "z-10 bg-primary text-primary-foreground border-primary" 
          : "z-0 bg-card text-card-foreground border-border hover:border-primary/50"
      )}
      style={{
        width: cardSize,
        height: cardSize,
        clipPath: `polygon(50px 0%, calc(100% - 50px) 0%, 100% 50px, 100% 100%, calc(100% - 50px) 100%, 50px 100%, 0 100%, 0 0)`,
        transform: `
          translate(-50%, -50%) 
          translateX(${(cardSize / 1.5) * position}px)
          translateY(${isCenter ? -65 : position % 2 ? 15 : -15}px)
          rotate(${isCenter ? 0 : position % 2 ? 2.5 : -2.5}deg)
        `,
        boxShadow: isCenter ? "0px 8px 0px 4px hsl(var(--border))" : "0px 0px 0px 0px transparent"
      }}
    >
      <span
        className="absolute block origin-top-right rotate-45 bg-border"
        style={{
          right: -2,
          top: 48,
          width: SQRT_5000,
          height: 2
        }}
      />
      <img
        src={testimonial.imgSrc}
        alt={`${testimonial.by.split(',')[0]}`}
        className="mb-4 h-14 w-12 bg-muted object-cover object-top"
        style={{
          boxShadow: "3px 3px 0px hsl(var(--background))"
        }}
      />
      <h3 className={cn(
        "text-base sm:text-xl font-medium",
        isCenter ? "text-primary-foreground" : "text-foreground"
      )}>
        "{testimonial.testimonial}"
      </h3>
      <p className={cn(
        "absolute bottom-8 left-8 right-8 mt-2 text-sm italic",
        isCenter ? "text-primary-foreground/80" : "text-muted-foreground"
      )}>
        - {testimonial.by}
      </p>
    </div>
  );
};

export const StaggerTestimonials: React.FC = () => {
  const [cardSize, setCardSize] = useState(365);
  const [testimonialsList, setTestimonialsList] = useState(testimonials);

  const handleMove = (steps: number) => {
    const newList = [...testimonialsList];
    if (steps > 0) {
      for (let i = steps; i > 0; i--) {
        const item = newList.shift();
        if (!item) return;
        newList.push({ ...item, tempId: Math.random() });
      }
    } else {
      for (let i = steps; i < 0; i++) {
        const item = newList.pop();
        if (!item) return;
        newList.unshift({ ...item, tempId: Math.random() });
      }
    }
    setTestimonialsList(newList);
  };

  useEffect(() => {
    const updateSize = () => {
      const { matches } = window.matchMedia("(min-width: 640px)");
      setCardSize(matches ? 365 : 290);
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <div
    // bg-muted/30
      className="relative w-full overflow-hidden"
      style={{ height: 600 }}
    >
      {testimonialsList.map((testimonial, index) => {
        const position = testimonialsList.length % 2
          ? index - (testimonialsList.length + 1) / 2
          : index - testimonialsList.length / 2;
        return (
          <TestimonialCard
            key={testimonial.tempId}
            testimonial={testimonial}
            handleMove={handleMove}
            position={position}
            cardSize={cardSize}
          />
        );
      })}
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
        <button
          onClick={() => handleMove(-1)}
          className={cn(
            "flex h-14 w-14 items-center justify-center text-2xl transition-colors",
            "bg-background border-2 border-border hover:bg-primary hover:text-primary-foreground",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          )}
          aria-label="Previous testimonial"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={() => handleMove(1)}
          className={cn(
            "flex h-14 w-14 items-center justify-center text-2xl transition-colors",
            "bg-background border-2 border-border hover:bg-primary hover:text-primary-foreground",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          )}
          aria-label="Next testimonial"
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
};
