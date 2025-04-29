import { useState } from "react";
import { Button } from "@/components/ui/button";
import ProjectCard from "@/components/ProjectCard";

const Projects = () => {
  // Filter categories
  const categories = ["All", "Data Engineering", "Machine Learning", "Web Development", "Automation"];
  const [activeFilter, setActiveFilter] = useState("All");

  // Sample projects data
  const projects = [
    {
      title: "Sentiment Analysis Pipeline",
      description: "Engineered a Python-based sentiment analysis pipeline that scraped Amazon & Peloton reviews using BeautifulSoup and PySpark, ingested data into PostgreSQL, and delivered interactive insights via a Streamlit dashboard.",
      image: "/placeholder.svg",
      imageAlt: "Sentiment Analysis Project",
      technologies: ["Python", "PySpark", "BeautifulSoup", "PostgreSQL", "Streamlit"],
      github: "https://github.com/raghuveer9303/Web-Scraper",
      live: "",
      category: "Data Engineering",
    },
    {
      title: "FIFA Striker Market Value Predictor",
      description: "Developed a regression model leveraging player performance, physical attributes, and stats to forecast football strikers' market value, empowering smarter scouting and investment decisions.",
      image: "/placeholder.svg",
      imageAlt: "FIFA Striker Value Predictor",
      technologies: ["R", "Statistics", "Regression", "Data Analysis"],
      github: "",
      live: "https://rpubs.com/Raghuveer_Venkatesh/1255695",
      category: "Machine Learning",
    },
    {
      title: "Travel Request Portal",
      description: "Developed Eurofins travel request portal which simplified filling, approval and tracking of travel request form. The system reduced travel request processing time from 10 days to 3 days.",
      image: "/placeholder.svg",
      imageAlt: "Travel Request Portal",
      technologies: ["C#", "SharePoint", "PowerBI", "SQL"],
      github: "",
      live: "",
      category: "Web Development",
    },
    {
      title: "Azure ETL Pipeline",
      description: "Designed and implemented a scalable data pipeline to collect, transform, and load tenant data from 38 Azure tenants into a centralized repository, enabling efficient integration and compliance reporting.",
      image: "/placeholder.svg",
      imageAlt: "Azure ETL Pipeline",
      technologies: ["Python", "Azure Data Factory", "Power BI", "SQL"],
      github: "",
      live: "",
      category: "Data Engineering",
    },
    {
      title: "Email Distribution System",
      description: "Made dynamic email distribution lists (1600 entries) easily accessible to 60k+ users by creating a webapp and automated loading the data using C# into a SharePoint List.",
      image: "/placeholder.svg",
      imageAlt: "Email Distribution System",
      technologies: ["C#", "SharePoint", "Azure DevOps", "Automation"],
      github: "",
      live: "",
      category: "Automation",
    },
    {
      title: "Log Consolidation System",
      description: "Created and deployed scheduled jobs using Azure DevOps to consolidate application logs for a distributed application (hosted in 18 servers across 3 environments) into a unified database.",
      image: "/placeholder.svg",
      imageAlt: "Log Consolidation System",
      technologies: ["Azure DevOps", "PowerShell", "SQL", "C#"],
      github: "",
      live: "",
      category: "Automation",
    },
  ];

  // Filter projects based on active category
  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">Projects</h1>
      <p className="text-lg text-black text-center mb-12 max-w-2xl mx-auto">
        A collection of my work across data automation, software engineering, and machine learning.
      </p>

      {/* Filter buttons */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {categories.map((category) => (
          <Button
            key={category}
            variant={activeFilter === category ? "default" : "outline"}
            onClick={() => setActiveFilter(category)}
            className="mb-2"
          >
            {category}
          </Button>
        ))}
      </div>

      {/* Projects grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, index) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            image={project.image}
            imageAlt={project.imageAlt}
            technologies={project.technologies}
            github={project.github}
            live={project.live}
            delay={index * 100}
            className="animate-fade-in"
          />
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="text-center py-12">
          <p className="text-xl text-muted-foreground">
            No projects found in this category. Please check back later!
          </p>
        </div>
      )}
    </div>
  );
};

export default Projects;
