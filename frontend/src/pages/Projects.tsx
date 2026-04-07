import { useState } from "react";
import { Button } from "@/components/ui/button";
import ProjectCard from "@/components/ProjectCard";

const Projects = () => {
  // Filter categories
  const categories = ["All", "AI Agents", "Applied ML", "Data Engineering", "Data Analytics"];
  const [activeFilter, setActiveFilter] = useState("All");

  // Sample projects data
  const projects = [
    {
      title: "Chicago Crime Safe City Platform",
      description: "End-to-end data infra & platform turning 20 years of crime data into predictive risk models & a Graph RAG assistant.",
      image: "/placeholder.svg",
      imageAlt: "Chicago Crime Dashboard",
      technologies: ["BigQuery", "Airflow", "Neo4j", "LangGraph", "React"],
      github: "https://github.com/raghuveer9303",
      live: "https://chicagocrimeproject.raghuveervenkatesh.us",
      category: "AI Agents",
    },
    {
      title: "NYC Metropulse GBFS",
      description: "Real-time predictive analytics platform preventing empty docks and full stations across NYC bikeshare.",
      image: "/placeholder.svg",
      imageAlt: "NYC Metropulse GBFS Dashboard",
      technologies: ["Spark Streaming", "Kafka", "Airflow", "LSTM", "PostGIS"],
      github: "https://github.com/raghuveer9303",
      live: "https://citibikeproject.raghuveervenkatesh.us",
      category: "Data Engineering",
    },
    {
      title: "DentaVision",
      description: "Real-time AI-based dental condition classification from uploaded oral images using Vision Transformers.",
      image: "/placeholder.svg",
      imageAlt: "DentaVision App",
      technologies: ["PyTorch", "ViT", "FastAPI", "React"],
      github: "https://github.com/raghuveer9303",
      live: "https://dentalvision.onrender.com/",
      category: "Applied ML",
    },
    {
      title: "TaxiPulse",
      description: "Geospatial analytics dashboard optimizing profitable routes and time windows for NYC taxi drivers.",
      image: "/placeholder.svg",
      imageAlt: "TaxiPulse Dashboard",
      technologies: ["Dash", "Plotly", "GeoPandas", "Docker"],
      github: "https://github.com/raghuveer9303",
      live: "https://taxipulse.onrender.com",
      category: "Data Analytics",
    },
    {
      title: "Lloyd Banking Churn Prediction",
      description: "Two-stage ML risk scoring workflow modeling customer behavior, transactions, and demographics.",
      image: "/placeholder.svg",
      imageAlt: "Churn Prediction",
      technologies: ["Python", "Scikit-learn", "Random Forest", "Pandas"],
      github: "https://github.com/raghuveer9303/LLoyd-Banking-Churn-Project",
      live: "",
      category: "Applied ML",
    },
    {
      title: "Striker Worth Analytics",
      description: "Unified athlete performance data model and dashboards for coaching staff and conference administrators.",
      image: "/placeholder.svg",
      imageAlt: "Striker Worth Analytics",
      technologies: ["SQL", "PowerBI", "Tableau"],
      github: "https://github.com/raghuveer9303",
      live: "https://sii-sports-data-solutions-lab.github.io/home/#/projects/striker-worth",
      category: "Data Analytics",
    },
    {
      title: "Statistical Analysis Reports",
      description: "Published data analysis and exploratory visualization documents.",
      image: "/placeholder.svg",
      imageAlt: "Analysis Reports",
      technologies: ["R", "Statistical Modeling"],
      github: "https://github.com/raghuveer9303",
      live: "https://rpubs.com/Raghuveer_Venkatesh/1255695",
      category: "Data Analytics",
    },
    {
      title: "ADA Accessibility AI Pipeline",
      description: "Fine-tuned GPT-4o pipeline automating WCAG accessibility remediation across 1,400+ documents.",
      image: "/placeholder.svg",
      imageAlt: "ADA AI Pipeline",
      technologies: ["GPT-4o", "Pydantic", "Python", "FastAPI"],
      github: "",
      live: "",
      category: "AI Agents",
    },
    {
      title: "Insider Threat ML System",
      description: "Scalable nightly batch anomaly detection pipeline processing ~300M backend audit events/month.",
      image: "/placeholder.svg",
      imageAlt: "Insider Threat ML",
      technologies: ["Azure Data Factory", "PySpark", "Isolation Forest"],
      github: "",
      live: "",
      category: "Data Engineering",
    },
  ];

  // Filter projects based on active category
  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">Portfolio Projects</h1>
      <p className="text-lg text-black text-center mb-12 max-w-2xl mx-auto">
        A collection of my mission-critical work across Applied ML, AI Agents, and robust Data Engineering pipelines.
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
