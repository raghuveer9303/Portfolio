import { Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  technologies: string[];
  github?: string;
  live?: string;
  delay?: number;
  className?: string;
}

const ProjectCard = ({
  title,
  description,
  image,
  imageAlt,
  technologies,
  github,
  live,
  delay = 0,
  className
}: ProjectCardProps) => {
  return (
    <div 
      className="group rounded-xl bg-card border border-border shadow-card hover:shadow-hover transition-all duration-300 overflow-hidden hover:-translate-y-0.5"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="aspect-video overflow-hidden">
        <img
          src={image}
          alt={imageAlt}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      
      <div className="p-6">
        <h3 className="text-lg font-bold mb-2 text-card-foreground">{title}</h3>
        <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{description}</p>
        
        <div className="flex flex-wrap gap-1.5 mb-4">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="text-xs px-2.5 py-0.5 rounded-full bg-primary/10 text-primary font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex gap-3">
          {github && (
            <Button
              asChild
              variant="outline"
              size="sm"
              className="flex items-center gap-2 hover:bg-primary hover:text-white hover:border-primary transition-all"
            >
              <a href={github} target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4" />
                Code
              </a>
            </Button>
          )}
          {live && (
            <Button
              asChild
              size="sm"
              className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-white"
            >
              <a href={live} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4" />
                Live Demo
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
