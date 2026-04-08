import { useState } from "react";
import { Button } from "@/components/ui/button";
import ProjectCard from "@/components/ProjectCard";

const Projects = () => {
  // Updated Filter categories
  const categories = ["All", "AI Agents & LLMs", "Applied ML & Computer Vision", "Data Engineering & MLOps", "Geospatial & Analytics"];
  const [activeFilter, setActiveFilter] = useState("All");

  // Comprehensive 8-item array based on Master Profile
  const projects = [
    {
      title: "Chicago Crime Safe City Platform",
      description: "End-to-end ML, data infrastructure, and full-stack platform transforming 20 years of Chicago crime datasets into predictive geographic risk models. Includes an analytical data warehouse, ML spatial risk engines, and a Graph RAG Copilot resolving Cypher queries natively.",
      image: "/placeholder.svg",
      imageAlt: "Chicago Crime Dashboard",
      technologies: ["BigQuery", "Airflow", "PySpark", "LightGBM", "MLflow", "Neo4j", "LangGraph", "React"],
      github: "https://github.com/raghuveer9303/Chicago-Crime-Safe-City",
      live: "https://chicagocrimeproject.raghuveervenkatesh.us",
      category: "AI Agents & LLMs",
    },
    {
      title: "NYC Metropulse GBFS - Citi Bike",
      description: "Real-time predictive analytics platform preventing empty docks and full stations across NYC. Ingests live GBFS HTTP endpoints, batch trains deep learning LSTMs, and provides high-certainty geospatial bounding-box queries via mobile-responsive UI.",
      image: "/placeholder.svg",
      imageAlt: "NYC Metropulse GBFS Dashboard",
      technologies: ["React", "FastAPI", "Spark Streaming", "Kafka", "Airflow", "LSTM", "MLflow", "PostGIS"],
      github: "https://github.com/raghuveer9303/nyc-metropulse",
      live: "https://citibikeproject.raghuveervenkatesh.us",
      category: "Data Engineering & MLOps",
    },
    {
      title: "DentaVision",
      description: "Real-time AI-based dental condition classification from uploaded oral images. Overcame standard CNN accuracy by 8.1% (reaching 92.4%). Utilizes heavy deterministic preprocessing and optimized local model loading explicitly avoiding 3.9s request delays.",
      image: "/placeholder.svg",
      imageAlt: "DentaVision App",
      technologies: ["PyTorch", "ViT (Vision Transformer)", "FastAPI", "React", "Docker"],
      github: "https://github.com/raghuveer9303/DentaVision",
      live: "https://dentalvision.onrender.com/",
      category: "Applied ML & Computer Vision",
    },
    {
      title: "ADA Accessibility AI Tool",
      description: "Pipeline mapping 1,400+ internal documents against WCAG remediation requirements using semantic processing. Achieved a 93% time reduction (45m to <3m) for manual remediation efforts.",
      image: "/placeholder.svg",
      imageAlt: "ADA AI Pipeline",
      technologies: ["GPT-4o", "Pydantic", "Python"],
      github: "",
      live: "",
      category: "AI Agents & LLMs",
    },
    {
      title: "Insider Threat Anomaly Detection",
      description: "ML security system detecting behavioral anomalies across 300 million Microsoft 365 events per month. Actively flagged 15+ validated high-risk security incidents out of millions of safe logs.",
      image: "/placeholder.svg",
      imageAlt: "Insider Threat ML",
      technologies: ["Azure Data Factory", "Isolation Forest", "Z-score modeling", "SQL"],
      github: "",
      live: "",
      category: "Data Engineering & MLOps",
    },
    {
      title: "TaxiPulse",
      description: "Geospatial analytics dashboard for NYC Yellow Taxi trip data mapping routes, hotspots, and trip revenues to optimize driver routing. Handles rapid geospatial joins linking raw trajectories to taxi zone geometries.",
      image: "/placeholder.svg",
      imageAlt: "TaxiPulse Dashboard",
      technologies: ["Dash", "Flask", "Plotly", "Folium", "GeoPandas", "Docker"],
      github: "https://github.com/raghuveer9303/TaxiPulse",
      live: "https://taxipulse.onrender.com/",
      category: "Geospatial & Analytics",
    },
    {
      title: "Lloyd Banking Churn Prediction",
      description: "Two-stage ML risk scoring workflow modeling customer behavior, transactions, and demographics to identify high-value churn risks. Explicit management of class imbalances and heavy missingness signals.",
      image: "/placeholder.svg",
      imageAlt: "Churn Prediction",
      technologies: ["Python", "Scikit-learn", "Random Forest", "Jupyter", "Pandas"],
      github: "https://github.com/raghuveer9303/LLoyd-Banking-Churn-Project",
      live: "",
      category: "Applied ML & Computer Vision",
    },
    {
      title: "Striker Worth / Sports Analytics Suite",
      description: "Unified SQL data models and dashboard interfaces migrating 4 years of athlete recruiting and performance data off Excel spreadsheets. Integrated decision-making dashboards impacting athletic director workflows.",
      image: "/placeholder.svg",
      imageAlt: "Striker Worth Analytics",
      technologies: ["SQL", "Power BI", "Tableau"],
      github: "",
      live: "https://sii-sports-data-solutions-lab.github.io/home/#/projects/striker-worth",
      category: "Geospatial & Analytics",
    },
  ];

  // Filter projects based on active category
  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">Engineering The Solutions</h1>
      <p className="text-lg text-black text-center mb-12 max-w-2xl mx-auto">
        A collection of my mission-critical work across scalable Data Engineering, AI Agents, and full-stack MLOps architectures. Each project aims to solve complex problems with efficient, deployable solutions.
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
