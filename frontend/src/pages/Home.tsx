import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Download, ExternalLink, Github, Linkedin, Mail } from "lucide-react";
import SkillProgress from "@/components/SkillProgress";
import ProjectCard from "@/components/ProjectCard";

const RESUME_URL = "https://drive.google.com/file/d/1lq3EGCWc5GejTYHtBsz1h1ZeQCJSwllU/view?usp=drive_link";

const Home = () => {
  // Featured Projects
  const projects = [
    {
      title: "Chicago Crime Safe City Platform",
      description: "End-to-end data infra & platform turning 20 years of crime data into predictive risk models & a Graph RAG assistant.",
      image: "/placeholder.svg",
      imageAlt: "Chicago Crime Dashboard",
      technologies: ["BigQuery", "Airflow", "Neo4j", "LangGraph", "React"],
      github: "https://github.com/raghuveer9303/Chicago-Crime-Safe-City",
      live: "https://chicagocrimeproject.raghuveervenkatesh.us",
    },
    {
      title: "NYC Metropulse GBFS",
      description: "Real-time predictive analytics platform preventing empty docks and full stations across NYC bikeshare.",
      image: "/placeholder.svg",
      imageAlt: "NYC Metropulse GBFS Dashboard",
      technologies: ["Spark Streaming", "Kafka", "Airflow", "LSTM", "PostGIS"],
      github: "https://github.com/raghuveer9303/nyc-metropulse",
      live: "https://citibikeproject.raghuveervenkatesh.us",
    },
    {
      title: "DentaVision",
      description: "Real-time AI-based dental condition classification from uploaded oral images using Vision Transformers.",
      image: "/placeholder.svg",
      imageAlt: "DentaVision App",
      technologies: ["PyTorch", "ViT", "FastAPI", "React"],
      github: "https://github.com/raghuveer9303/DentaVision",
      live: "https://dentalvision.onrender.com/",
    },
    {
      title: "TaxiPulse",
      description: "Geospatial analytics dashboard optimizing profitable routes and time windows for NYC taxi drivers.",
      image: "/placeholder.svg",
      imageAlt: "TaxiPulse Dashboard",
      technologies: ["Dash", "Plotly", "GeoPandas", "Folium", "Docker"],
      github: "https://github.com/raghuveer9303/TaxiPulse",
      live: "https://taxipulse.onrender.com",
    },
  ];



  // Mock skills data
  const programmingSkills = [
    { name: "Python / PySpark", percentage: 95 },
    { name: "SQL / PostgreSQL / BigQuery", percentage: 92 },
    { name: "R", percentage: 85 },
    { name: "JavaScript / TypeScript", percentage: 80 },
    { name: "Kafka / Spark Streaming", percentage: 85 },
  ];

  const toolsSkills = [
    { name: "PyTorch / Scikit-learn", percentage: 90 },
    { name: "Airflow / Docker / Azure", percentage: 88 },
    { name: "Neo4j / LangGraph", percentage: 85 },
    { name: "FastAPI / React", percentage: 85 },
    { name: "Power BI / Tableau", percentage: 85 },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary to-secondary py-20 md:py-32 overflow-hidden">
        {/* Background grid pattern with reduced opacity */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        
        {/* Hero image */}
        <div className="absolute right-0 top-0 h-full w-full lg:w-1/2 overflow-hidden hidden sm:block flex items-center justify-center">
          <div className="relative w-full h-full flex items-center justify-center">
            <img 
              src="/lovable-uploads/862c0c1b-9e1a-4acd-bebe-0b8925a7ca8e-Photoroom.png" 
              alt="Raghuveer Venkatesh"
              className="w-full h-full object-contain object-top mx-auto scale-125 transition-transform duration-500 hover:scale-135 motion-safe:hover:scale-135"
              loading="eager"
            />
          </div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="w-full md:w-3/5 text-white mb-10 md:mb-0 animate-fade-in">
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-shadow-sm">
              Hi, I'm Raghuveer Venkatesh
            </h1>
            <p className="text-xl md:text-2xl mb-6 text-white font-medium">
              AI Engineer & Staff Data Scientist
            </p>
            <p className="text-lg mb-8 max-w-md text-white">
              Bridging the gap between robust data engineering platforms and intelligent ML logic.
              Specializing in scalable ETL, AI Agents, and full-stack MLOps architectures.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 shadow-card hover:shadow-hover">
                <Link to="/contact">Get in Touch</Link>
              </Button>
              <Button asChild size="lg" className="bg-transparent border-2 border-white text-white hover:bg-white/10">
                <Link to="/resume">View Resume</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="section-container bg-background" id="about">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="animate-fade-in space-y-6">
            <h2 className="section-title text-left">About Me</h2>
            <div className="prose prose-lg text-black">
              <p className="mb-4">
                I am an <strong>AI Engineer & Data Scientist</strong> with over 6 years of industry experience across machine learning development and robust data architecture. Finishing my MS in Applied Data Science (3.95 GPA) at Indiana University, my work bridges the gap between deep data engineering platforms and intelligent algorithmic logic.
              </p>
              <p className="mb-4">
                I specialize in building mission-critical ML pipelines, semantic LLM applications, and robust end-to-end data systems. My technological expertise spans AI Agents, Knowledge Graphs (Neo4j, LangGraph), Applied ML (PyTorch, LightGBM, LSTM), and scalable MLOps architectures.
              </p>
              <p className="mb-6">
                With a track record as an AI Engineer at The Polis Center, AI Data Engineer Intern at Horizon League, and Senior Data Automation Engineer at Eurofins IT, I am passionate about bringing predictive intelligence to production.
              </p>
            </div>
            <div className="flex space-x-4 text-black hover:text-primary transition-colors">
              <a
                href="https://github.com/raghuveer9303"
                target="_blank"
                rel="noopener noreferrer"
                className="text-data-gray hover:text-data-blue transition-colors"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/raghuveer-venkatesh"
                target="_blank"
                rel="noopener noreferrer"
                className="text-data-gray hover:text-data-blue transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:raghuveervenkatesh7@gmail.com"
                className="text-data-gray hover:text-data-blue transition-colors"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
          <div className="animate-slide-in-bottom">
            <h3 className="text-2xl font-bold mb-6 text-black">Skills</h3>
            
            <h4 className="font-bold mb-3 text-black">Programming Languages</h4>
            <div className="mb-6">
              {programmingSkills.map((skill, index) => (
                <SkillProgress
                  key={skill.name}
                  name={skill.name}
                  percentage={skill.percentage}
                  delay={index * 200}
                />
              ))}
            </div>
            
            <h4 className="font-bold mb-3 text-black">Tools & Platforms</h4>
            <div>
              {toolsSkills.map((skill, index) => (
                <SkillProgress
                  key={skill.name}
                  name={skill.name}
                  percentage={skill.percentage}
                  color="data-accent"
                  delay={1000 + index * 200}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Timeline Section */}
      <section className="bg-secondary py-20">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="section-title text-center mb-16">Work Experience</h2>
          
          <div className="max-w-3xl mx-auto">
            <div className="timeline-item animate-fade-in">
              <div className="timeline-dot"></div>
              <div className="timeline-date text-black">August 2024 - Present</div>
              <h3 className="timeline-title text-black">AI Engineer & Data Scientist</h3>
              <div className="timeline-organization text-black">The Polis Center / Independent Projects</div>
              <p className="mb-3 text-black">
                Architecting intelligent ML platforms and deploying full-stack analytical applications.
              </p>
              <ul className="list-disc pl-5 mb-4 text-black">
                <li>Developed the Chicago Crime Safe City Platform with Graph RAG and predictive models</li>
                <li>Engineered NYC Metropulse, a real-time streaming analytics application using Spark and Kafka</li>
                <li>Built and deployed multiple AI vision and predictive dashboard applications</li>
              </ul>
            </div>
            
            <div className="timeline-item animate-fade-in" style={{animationDelay: "300ms"}}>
              <div className="timeline-dot"></div>
              <div className="timeline-date text-black">July 2022 - August 2024</div>
              <h3 className="timeline-title text-black">Senior Data Automation Engineer</h3>
              <div className="timeline-organization text-black">Eurofins IT, Bangalore, India</div>
              <p className="mb-3 text-black">
                Led data automation initiatives and managed complex ETL processes across multiple platforms.
              </p>
              <ul className="list-disc pl-5 mb-4 text-black">
                <li>Designed scalable ETL workflows and orchestrated cloud operations using Azure</li>
                <li>Developed ML systems processing over 300M backend audit events per month</li>
                <li>Led automation pipeline modernization across the enterprise architecture</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="section-container" id="projects">
        <h2 className="section-title text-center mb-12">Featured Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              {...project}
              delay={index * 200}
              className="animate-fade-in"
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button asChild>
            <Link to="/projects">View All Projects</Link>
          </Button>
        </div>
      </section>

      {/* Education Section */}
      <section className="bg-secondary py-20">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="section-title text-center mb-16">Education</h2>
          
          <div className="max-w-3xl mx-auto space-y-12">
            <div className="bg-card rounded-lg p-6 shadow-sm animate-fade-in">
              <h3 className="text-xl font-bold mb-2">Master of Science, Applied Data Science</h3>
              <p className="text-black font-semibold">Indiana University Indianapolis, U.S.</p>
              <p className="text-black mb-4">Expected Dec 2025 - GPA 4.00/4.00</p>
              <p className="font-medium text-black">Relevant Coursework:</p>
              <p className="text-black">Python programming, Statistics in R, Database Design</p>
            </div>
            
            <div className="bg-card rounded-lg p-6 shadow-sm animate-fade-in" style={{animationDelay: "300ms"}}>
              <h3 className="text-xl font-bold mb-2">Bachelor of Engineering, Electronics and Computer Engineering</h3>
              <p className="text-black font-semibold">CMR Institute of Technology, Bangalore, India</p>
              <p className="text-black">Graduated Jan 2018</p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="section-container">
        <h2 className="section-title text-center mb-12">Certifications</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-card rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow animate-fade-in">
            <h3 className="text-lg font-bold mb-2">Azure Fundamentals</h3>
            <p className="text-black font-semibold">Microsoft - AZ900</p>
          </div>
          
          <div className="bg-card rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow animate-fade-in" style={{animationDelay: "200ms"}}>
            <h3 className="text-lg font-bold mb-2">Certified ScrumMaster CSM®</h3>
            <p className="text-black font-semibold">Scrum Alliance</p>
          </div>
          
          <div className="bg-card rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow animate-fade-in" style={{animationDelay: "400ms"}}>
            <h3 className="text-lg font-bold mb-2">Python & Pandas Certificates</h3>
            <p className="text-black font-semibold">Kaggle</p>
          </div>
          
          <div className="bg-card rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow animate-fade-in" style={{animationDelay: "600ms"}}>
            <h3 className="text-lg font-bold mb-2">Python 4* & SQL 2* Badges</h3>
            <p className="text-black font-semibold">HackerRank</p>
          </div>
          
          <div className="bg-card rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow animate-fade-in" style={{animationDelay: "800ms"}}>
            <h3 className="text-lg font-bold mb-2">IBM Data Engineering Professional Certificates</h3>
            <p className="text-black font-semibold">Introduction to Data Engineering</p>
            <p className="text-black">Python Project for Data Engineering</p>
            <p className="text-black">Linux Commands and Shell Scripting</p>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="section-container">
        <div className="bg-data-blue text-white rounded-xl p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Work Together</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Have a project in mind or want to discuss potential opportunities?
            I'm always open to new challenges and collaborations.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="border-white text-white hover:bg-white/10">
              <Link to="/contact">Get in Touch</Link>
            </Button>
            <Button asChild size="lg" className="border-white text-white hover:bg-white/10">
              <a href={RESUME_URL} target="_blank" rel="noopener noreferrer">
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
