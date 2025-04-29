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
      className="group rounded-xl bg-card shadow-card hover:shadow-hover transition-all duration-300 overflow-hidden"
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
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-black mb-4">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="text-xs px-3 py-1 rounded-full bg-primary/10 text-black"
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
              className="flex items-center gap-2 hover:bg-primary hover:text-primary-foreground"
            >
              <a href={github} target="_blank" rel="noopener noreferrer" className="text-black">
                <Github className="w-4 h-4" />
                Code
              </a>
            </Button>
          )}
          {live && (
            <Button
              asChild
              size="sm"
              className="flex items-center gap-2 bg-primary hover:bg-primary-hover"
            >
              <a href={live} target="_blank" rel="noopener noreferrer" className="text-black">
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
