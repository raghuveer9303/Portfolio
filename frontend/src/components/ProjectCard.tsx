
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Github, Link as LinkIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  technologies: string[];
  github?: string;
  live?: string;
  className?: string;
  delay?: number;
}

const ProjectCard = ({
  title,
  description,
  image,
  imageAlt,
  technologies,
  github,
  live,
  className,
  delay = 0
}: ProjectCardProps) => {
  return (
    <Card className={cn("overflow-hidden card-hover", className)} 
          style={{animationDelay: `${delay}ms`}}>
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={imageAlt}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
      <CardHeader>
        <h3 className="text-xl font-bold">{title}</h3>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="bg-secondary text-xs font-medium px-2.5 py-0.5 rounded"
            >
              {tech}
            </span>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <div className="flex space-x-4">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-data-blue transition-colors"
              aria-label="View source code on GitHub"
            >
              <Github size={20} />
            </a>
          )}
          {live && (
            <a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-data-blue transition-colors"
              aria-label="View live project"
            >
              <LinkIcon size={20} />
            </a>
          )}
        </div>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
