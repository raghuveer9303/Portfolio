import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Download, ExternalLink, Github, Linkedin, Mail } from "lucide-react";
import SkillProgress from "@/components/SkillProgress";
import ProjectCard from "@/components/ProjectCard";

const RESUME_URL = "https://drive.google.com/file/d/1lq3EGCWc5GejTYHtBsz1h1ZeQCJSwllU/view?usp=drive_link";

const Home = () => {
  // Featured Projects - showing the top 4 stories
  const projects = [
    {
      title: "Chicago Crime Safe City Platform",
      description: "A 20-year crime dataset transformed into predictive risk models. Includes an analytical data warehouse, ML spatial risk engines, and a Graph RAG Copilot resolving Cypher queries natively.",
      image: "/placeholder.svg",
      imageAlt: "Chicago Crime Dashboard",
      technologies: ["BigQuery", "Airflow", "PySpark", "Neo4j", "LangGraph", "React"],
      github: "https://github.com/raghuveer9303/Chicago-Crime-Safe-City",
      live: "https://chicagocrimeproject.raghuveervenkatesh.us",
    },
    {
      title: "NYC Metropulse GBFS",
      description: "Real-time predictive analytics platform preventing empty docks and full stations across NYC. Ingests live GBFS endpoints and batch trains deep learning LSTMs.",
      image: "/placeholder.svg",
      imageAlt: "NYC Metropulse GBFS Dashboard",
      technologies: ["React", "FastAPI", "Spark Streaming", "Kafka", "Airflow", "LSTM"],
      github: "https://github.com/raghuveer9303/nyc-metropulse",
      live: "https://citibikeproject.raghuveervenkatesh.us",
    },
    {
      title: "DentaVision",
      description: "Overcame standard CNN accuracy by 8.1% (reaching 92.4%). Real-time AI-based dental condition classification utilizing heavy deterministic preprocessing and optimized local model loading.",
      image: "/placeholder.svg",
      imageAlt: "DentaVision App",
      technologies: ["PyTorch", "ViT (Vision Transformer)", "FastAPI", "React", "Docker"],
      github: "https://github.com/raghuveer9303/DentaVision",
      live: "https://dentalvision.onrender.com/",
    },
    {
      title: "ADA Accessibility AI Tool",
      description: "Reduced manual WCAG remediation time by 93% across 1,400+ documents and 6 institutional departments using semantic processing.",
      image: "/placeholder.svg",
      imageAlt: "ADA AI Pipeline",
      technologies: ["GPT-4o", "Pydantic", "Python"],
      github: "",
      live: "",
    },
  ];

  // Updated Skills based on Master Profile
  const machineLearningSkills = [
    { name: "Scikit-learn / XGBoost", percentage: 95 },
    { name: "LightGBM / Gradient Boosting", percentage: 92 },
    { name: "ARIMA / Regression", percentage: 88 },
  ];

  const dpAndNlpSkills = [
    { name: "PyTorch / Hugging Face", percentage: 90 },
    { name: "BERT / ViT (Vision Transformer)", percentage: 88 },
    { name: "EfficientNet / CNN / spaCy", percentage: 85 },
  ];

  const aiAgentsSkills = [
    { name: "LangGraph / Qdrant / Neo4j", percentage: 92 },
    { name: "Prompt Engineering / GPT-4o", percentage: 90 },
  ];

  const mlopsAndDataEngSkills = [
    { name: "Airflow / MLflow / Docker", percentage: 88 },
    { name: "SQL / PySpark / Kafka", percentage: 95 },
    { name: "Azure / GCP", percentage: 85 },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary to-secondary py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        
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
              I build pipelines that make AI possible.
            </h1>
            <p className="text-xl md:text-2xl mb-6 text-white font-medium">
              Raghuveer Venkatesh — AI Engineer & ML Engineer
            </p>
            <p className="text-lg mb-8 max-w-md text-white">
              Bridging the crucial gap between robust data architecture and intelligent ML models.
              I specialize in scalable ETL, AI Agents, MLOps, and bringing predictive intelligence to production.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 shadow-card hover:shadow-hover">
                <Link to="/contact">Get in Touch</Link>
              </Button>
              <Button asChild size="lg" className="bg-transparent border-2 border-white text-white hover:bg-white/10">
                <Link to="/resume">Read My Story</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* The Journey Section */}
      <section className="section-container bg-background" id="about">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="animate-fade-in space-y-6">
            <h2 className="section-title text-left">The Philosophy</h2>
            <div className="prose prose-lg text-black">
              <p className="mb-4">
                In modern AI, models are only as good as the data pipelines supporting them. My journey didn't start with algorithms—it started in the engine room. For years, as a Senior Data Automation Engineer processing <strong>over 300 million backend events per month</strong>, I learned the importance of stability, scaling, and robust architecture.
              </p>
              <p className="mb-4">
                Today, as an <strong>AI Engineer & Data Scientist</strong>, I use that foundation to build more than just standard machine learning models. I architect mission-critical end-to-end systems. Whether it's processing real-time telemetry into a predictive LSTM, integrating Graph RAG to resolve complex queries instantly, or optimizing vision transformers to avoid latency—my focus is on actual production impact.
              </p>
              <p className="mb-6">
                From reducing manual WCAG remediation time by 93% for universities to automating anomaly detection for insider threats, my passion is creating full-stack AI logic powered by unshakeable data infrastructure.
              </p>
            </div>
            <div className="flex space-x-4 text-black hover:text-primary transition-colors">
              <a href="https://github.com/raghuveer9303" target="_blank" rel="noopener noreferrer" className="text-data-gray hover:text-data-blue transition-colors" aria-label="GitHub">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/raghuveer-venkatesh" target="_blank" rel="noopener noreferrer" className="text-data-gray hover:text-data-blue transition-colors" aria-label="LinkedIn">
                <Linkedin size={24} />
              </a>
              <a href="mailto:raghuveervenkatesh7@gmail.com" className="text-data-gray hover:text-data-blue transition-colors" aria-label="Email">
                <Mail size={24} />
              </a>
            </div>
          </div>
          <div className="animate-slide-in-bottom">
            <h3 className="text-2xl font-bold mb-6 text-black">The Arsenal</h3>
            
            <h4 className="font-bold mb-3 text-black">Machine Learning</h4>
            <div className="mb-6">
              {machineLearningSkills.map((skill, index) => (
                <SkillProgress key={skill.name} name={skill.name} percentage={skill.percentage} delay={index * 100} />
              ))}
            </div>

            <h4 className="font-bold mb-3 text-black">Deep Learning & NLP</h4>
            <div className="mb-6">
              {dpAndNlpSkills.map((skill, index) => (
                <SkillProgress key={skill.name} name={skill.name} percentage={skill.percentage} color="data-accent" delay={index * 100} />
              ))}
            </div>

            <h4 className="font-bold mb-3 text-black">AI Agents, LLMs & Graph AI</h4>
            <div className="mb-6">
              {aiAgentsSkills.map((skill, index) => (
                <SkillProgress key={skill.name} name={skill.name} percentage={skill.percentage} delay={index * 100} />
              ))}
            </div>

            <h4 className="font-bold mb-3 text-black">MLOps & Data Engineering</h4>
            <div>
              {mlopsAndDataEngSkills.map((skill, index) => (
                <SkillProgress key={skill.name} name={skill.name} percentage={skill.percentage} color="data-accent" delay={index * 100} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Proof Section */}
      <section className="section-container bg-secondary" id="projects">
        <h2 className="section-title text-center mb-12">The Proof (Key Impact)</h2>
        
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

      {/* Experience Timeline Section */}
      <section className="bg-background py-20">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="section-title text-center mb-16">The Journey</h2>
          
          <div className="max-w-3xl mx-auto">
            <div className="timeline-item animate-fade-in">
              <div className="timeline-dot"></div>
              <div className="timeline-date text-black">Sep 2025 - Dec 2025</div>
              <h3 className="timeline-title text-black">AI Engineer</h3>
              <div className="timeline-organization text-black">The Polis Center</div>
              <p className="mb-3 text-black">
                Architecting intelligent ML platforms bridging civic data and AI tooling.
              </p>
              <ul className="list-disc pl-5 mb-4 text-black">
                <li>Leveraged Hugging Face products, Transformers, and core AI engineering concepts.</li>
              </ul>
            </div>

            <div className="timeline-item animate-fade-in">
              <div className="timeline-dot"></div>
              <div className="timeline-date text-black">May 2025 - Dec 2025</div>
              <h3 className="timeline-title text-black">AI Data Engineer Intern</h3>
              <div className="timeline-organization text-black">Horizon League</div>
              <ul className="list-disc pl-5 mb-4 text-black">
                <li>Built an end-to-end Deal Analytics app and developed semantic sentence segmentation using LLMs.</li>
                <li>Replaced 3-4 days of manual spreadsheet work per reporting cycle with unified SQL models and near-real-time BI dashboards.</li>
              </ul>
            </div>

            <div className="timeline-item animate-fade-in">
              <div className="timeline-dot"></div>
              <div className="timeline-date text-black">Aug 2024 - Dec 2025</div>
              <h3 className="timeline-title text-black">Lead AI Engineer</h3>
              <div className="timeline-organization text-black">COMET LAB IU</div>
              <ul className="list-disc pl-5 mb-4 text-black">
                <li>Engineered a GPT-4o-powered accessibility pipeline with Pydantic validation.</li>
                <li>Reduced manual WCAG remediation time by 93% across 1,400+ documents and 6 institutional departments.</li>
              </ul>
            </div>

            <div className="timeline-item animate-fade-in">
              <div className="timeline-dot"></div>
              <div className="timeline-date text-black">Jul 2020 - Aug 2024</div>
              <h3 className="timeline-title text-black">Senior Software Engineer - Data Automation</h3>
              <div className="timeline-organization text-black">Eurofins IT, Bangalore, India</div>
              <ul className="list-disc pl-5 mb-4 text-black">
                <li>Designed a scalable nightly batch anomaly detection pipeline processing ~300M events/month.</li>
                <li>Managed cross-functional teams, overseeing multi-country SharePoint migrations (6TB of docs to Azure).</li>
                <li>Architected a hybrid SARIMA-XGBoost pipeline for 18-server SharePoint farms achieving 4.8% MAPE.</li>
              </ul>
            </div>
            
            <div className="timeline-item animate-fade-in">
              <div className="timeline-dot"></div>
              <div className="timeline-date text-black">Jun 2018 - Jun 2020</div>
              <h3 className="timeline-title text-black">Software Engineer</h3>
              <div className="timeline-organization text-black">Eurofins IT, Bangalore, India</div>
              <ul className="list-disc pl-5 mb-4 text-black">
                <li>Automated user support request solutions, reducing volume by 32%.</li>
                <li>Built a travel request portal and automated Azure DevOps CI/CD pipelines.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Preview Section */}
      <section className="section-container bg-secondary">
        <h2 className="section-title text-center mb-12">Certifications Spotlight</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-card rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow animate-fade-in">
            <h3 className="text-lg font-bold mb-2">Graph Data Science Certification</h3>
            <p className="text-black font-semibold">Neo4j (Mar 2026)</p>
          </div>
          
          <div className="bg-card rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow animate-fade-in" style={{animationDelay: "200ms"}}>
            <h3 className="text-lg font-bold mb-2">AI Agents Fundamentals</h3>
            <p className="text-black font-semibold">Hugging Face (Mar 2026)</p>
          </div>
          
          <div className="bg-card rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow animate-fade-in" style={{animationDelay: "400ms"}}>
            <h3 className="text-lg font-bold mb-2">Data Engineering Foundations</h3>
            <p className="text-black font-semibold">IBM Specialization</p>
          </div>
        </div>
        
        <div className="text-center mt-8">
          <Button asChild variant="outline">
            <Link to="/resume">View Full Background</Link>
          </Button>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="section-container bg-background">
        <div className="bg-data-blue text-white rounded-xl p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Build?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            From deploying scalable ETL and Spark clusters to optimizing PyTorch endpoints and AI Agents. Let's discuss your next massive data challenge.
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
