import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const RESUME_URL = "https://drive.google.com/file/d/1lq3EGCWc5GejTYHtBsz1h1ZeQCJSwllU/view?usp=drive_link";

const Resume = () => {
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-2">Resume</h1>
            <p className="text-base text-muted-foreground">
              Comprehensive overview of my professional experience, skills, and qualifications.
            </p>
          </div>
          <Button asChild className="mt-4 md:mt-0 shadow-sm hover:shadow-md" size="lg">
            <a href={RESUME_URL} target="_blank" rel="noopener noreferrer">
              <Download className="mr-2 h-5 w-5" />
              Download PDF
            </a>
          </Button>
        </div>

        <div className="bg-card rounded-lg shadow-sm p-8 md:p-10 mb-10 animate-fade-in">
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-1">Raghuveer Venkatesh</h2>
            <p className="text-base mb-4 text-primary font-semibold">AI Engineer, ML Engineer & Data Scientist</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-muted-foreground text-sm">
              <div>
                <p>Location: Indianapolis, IN</p>
                <a 
                  href="mailto:raghuveervenkatesh7@gmail.com" 
                  className="hover:text-primary transition-colors"
                >
                  raghuveervenkatesh7@gmail.com
                </a>
              </div>
              <div className="flex space-x-4">
                <a 
                  href="https://www.linkedin.com/in/raghuveervenkatesh"
                  className="text-primary hover:underline font-medium"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
                <a 
                  href="https://github.com/raghuveer9303"
                  className="text-primary hover:underline font-medium"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-border pt-8 mb-8">
            <h2 className="text-2xl font-bold mb-6">Education</h2>
            
            <div className="mb-6">
              <h3 className="text-xl font-bold">Indiana University, Indianapolis, US</h3>
              <p className="text-primary font-semibold">Master of Science (MS) in Applied Data Science</p>
              <div className="flex justify-between items-center text-muted-foreground mb-2 text-sm">
                <p>Expected Completion: January 2026</p>
                <p className="font-semibold">GPA: 3.95 (3.97/4.00)</p>
              </div>
              <p className="text-muted-foreground text-sm"><span className="font-semibold text-foreground">Focus:</span> Applied ML, NLP, Statistics in R, Big Data Engineering, Database Design.</p>
              <p className="text-muted-foreground text-sm"><span className="font-semibold text-foreground">Activities:</span> Computer Science Club</p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold">CMR Institute of Technology, Bangalore, India</h3>
              <p className="text-primary font-semibold">Bachelor of Engineering (B.E.), Electronics and Communication Engineering</p>
              <div className="flex justify-between items-center text-muted-foreground mb-2 text-sm">
                <p>Graduated: January 2018</p>
                <p className="font-semibold">GPA: 3.5</p>
              </div>
              <p className="text-muted-foreground text-sm"><span className="font-semibold text-foreground">Activities:</span> Conducted Workshops, Entrepreneurship & Leadership Programs, Tech Mentor, Chemistry TA.</p>
            </div>
          </div>

          <div className="border-t border-border pt-8 mb-8">
            <h2 className="text-2xl font-bold mb-6">Technical Skills</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div>
                <h3 className="font-bold mb-2">Machine Learning & Modelling</h3>
                <p className="text-muted-foreground text-sm">
                  Scikit-learn, Random Forest, Regression, ARIMA, XGBoost, LightGBM, Gradient Boosting
                </p>
              </div>
              
              <div>
                <h3 className="font-bold mb-2">Deep Learning & NLP</h3>
                <p className="text-muted-foreground text-sm">
                  BERT (fine-tuning), LDA, CNN, EfficientNet, ViT (Vision Transformer), spaCy, Hugging Face, PyTorch
                </p>
              </div>
              
              <div>
                <h3 className="font-bold mb-2">AI Agents, LLM & RAG</h3>
                <p className="text-muted-foreground text-sm">
                  LangGraph, Langfuse, Qdrant, GPT-4o, Neo4j, Prompt Engineering
                </p>
              </div>

              <div>
                <h3 className="font-bold mb-2">MLOps & Serving</h3>
                <p className="text-muted-foreground text-sm">
                  Apache Airflow, FastAPI, Champion-Challenger, PSI/KS Drift Detection, Docker, MLflow
                </p>
              </div>

              <div>
                <h3 className="font-bold mb-2">Data Engineering & Cloud</h3>
                <p className="text-muted-foreground text-sm">
                  SQL, PySpark, Kafka, R, Azure (ADF, Blob, DevOps), PostgreSQL (PostGIS), GCP (BigQuery, CloudRun, Pub/Sub)
                </p>
              </div>

              <div>
                <h3 className="font-bold mb-2">Visualization Platforms</h3>
                <p className="text-muted-foreground text-sm">
                  PowerBI, Tableau, Streamlit, Plotly, Dash, Seaborn, Folium, React
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-border pt-8 mb-8">
            <h2 className="text-2xl font-bold mb-6">Professional Experience</h2>
            
            <div className="mb-8">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-1">
                <h3 className="text-xl font-bold">1. AI Engineer</h3>
                <p className="text-muted-foreground font-semibold text-sm">Sep 2025 – Dec 2025</p>
              </div>
              <p className="text-primary mb-3 font-semibold">The Polis Center (Indianapolis, IN - Remote)</p>
              <ul className="list-disc pl-5 space-y-1 text-muted-foreground text-sm">
                <li>Leveraged Hugging Face products, Transformers, and core AI engineering concepts to optimize workflows.</li>
              </ul>
            </div>

            <div className="mb-8">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-1">
                <h3 className="text-xl font-bold">2. AI Data Engineer Intern</h3>
                <p className="text-muted-foreground font-semibold text-sm">May 2025 – Dec 2025</p>
              </div>
              <p className="text-primary mb-3 font-semibold">Horizon League (Indianapolis, IN - Hybrid)</p>
              <ul className="list-disc pl-5 space-y-1 text-muted-foreground text-sm">
                <li>Built an end-to-end Deal Analytics application integrating data pipelines, dashboards, and automated insights.</li>
                <li>Developed semantic sentence segmentation using LLMs, enhancing natural language understanding.</li>
                <li>Replaced 3-4 days of manual spreadsheet work per reporting cycle with unified SQL models and near-real-time Power BI/Tableau dashboards.</li>
              </ul>
            </div>

            <div className="mb-8">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-1">
                <h3 className="text-xl font-bold">3. Lead AI Engineer</h3>
                <p className="text-muted-foreground font-semibold text-sm">Aug 2024 – Dec 2025</p>
              </div>
              <p className="text-primary mb-3 font-semibold">COMET LAB IU (Indianapolis, IN)</p>
              <ul className="list-disc pl-5 space-y-1 text-muted-foreground text-sm">
                <li>Engineered and deployed a GPT-4o-powered accessibility pipeline with Pydantic validation.</li>
                <li>Reduced manual WCAG remediation time by 93% (45m to &lt;3m) across 1,400+ documents and 6 institutional departments.</li>
              </ul>
            </div>

            <div className="mb-8">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-1">
                <h3 className="text-xl font-bold">4. Research Assistant</h3>
                <p className="text-muted-foreground font-semibold text-sm">Sep 2024 – May 2025</p>
              </div>
              <p className="text-primary mb-3 font-semibold">IU Indianapolis Sports Innovation Institute</p>
              <ul className="list-disc pl-5 space-y-1 text-muted-foreground text-sm">
                <li>Built a Review Scraper to automate data collection, improving research efficiency by 70%.</li>
                <li>Designed and maintained the institute website for accessibility and stakeholder engagement.</li>
                <li>Collaborated with faculty on sports analytics research.</li>
              </ul>
            </div>
            
            <div className="mb-8">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-1">
                <h3 className="text-xl font-bold">5. Senior Software Engineer - Data Automation</h3>
                <p className="text-muted-foreground font-semibold text-sm">Jul 2020 – Aug 2024</p>
              </div>
              <p className="text-primary mb-3 font-semibold">Eurofins IT (Bengaluru, India) — Total Tenure: 6.25 years</p>
              <ul className="list-disc pl-5 space-y-1 text-muted-foreground text-sm">
                <li><strong>Data Engineering:</strong> Automated M365 activity log processing, reducing audit times by 70%.</li>
                <li><strong>Insider Threat ML System:</strong> Designed a scalable nightly batch anomaly detection pipeline processing ~300M events/month. Used Azure Data Factory, SQL, and Isolation Forest/Z-Score scoring. Replaced manual routing and saved ~14 FTE hours/week.</li>
                <li><strong>Forecasting:</strong> Architected a hybrid SARIMA-XGBoost pipeline for 18-server SharePoint farms achieving 4.8% MAPE.</li>
                <li><strong>Scrum Master / Leadership:</strong> Managed cross-functional teams, overseeing multi-country SharePoint migrations (migrating 6TB of documents to Azure).</li>
                <li><strong>PowerApps:</strong> Built a Lunch Booking App with SQL integrating 146 office locations.</li>
              </ul>
            </div>

            <div className="mb-8">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-1">
                <h3 className="text-xl font-bold">6. Software Engineer</h3>
                <p className="text-muted-foreground font-semibold text-sm">Jun 2018 – Jun 2020</p>
              </div>
              <p className="text-primary mb-3 font-semibold">Eurofins IT (Bengaluru, India)</p>
              <ul className="list-disc pl-5 space-y-1 text-muted-foreground text-sm">
                <li>Automated user support request solutions, reducing volume by 32%.</li>
                <li>Built a travel request portal and automated Azure DevOps CI/CD pipelines.</li>
              </ul>
            </div>

            <div>
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-1">
                <h3 className="text-xl font-bold">7. Intern Student</h3>
                <p className="text-muted-foreground font-semibold text-sm">Dec 2017 – Jun 2018</p>
              </div>
              <p className="text-primary mb-3 font-semibold">edWisor.com (Bengaluru, India)</p>
              <ul className="list-disc pl-5 space-y-1 text-muted-foreground text-sm">
                <li>Focused on frontend stack (HTML5, CSS3, AngularJS, jQuery) and GIT version control.</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border pt-8 mb-8">
            <h2 className="text-2xl font-bold mb-6">Certifications</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-muted-foreground text-sm">
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Neo4j:</strong> Graph Data Science Certification (Mar 2026)</li>
                <li><strong>Hugging Face:</strong> AI Agents Fundamentals (Mar 2026)</li>
                <li><strong>Forage:</strong> Lloyds Banking Group Data Science Virtual Internship (Mar 2026)</li>
                <li><strong>Scrum Alliance:</strong> Certified ScrumMaster® (CSM®) (Aug 2022)</li>
                <li><strong>Microsoft:</strong> Certified Azure Fundamentals (AZ-900) (Aug 2021)</li>
                <li><strong>LinkedIn:</strong> Complete Guide to SQL for Data Engineering (Sep 2024)</li>
                <li><strong>Kaggle:</strong> Intro to Programming / Python (Dec 2023)</li>
                <li><strong>Great Learning:</strong> MySQL Basics (Dec 2023)</li>
              </ul>
              
              <div>
                <p className="font-bold mb-2">IBM Certifications:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Data Engineering Foundations Specialization (Oct 2025)</li>
                  <li>ETL and Data Pipelines with Shell, Airflow and Kafka (Oct 2024)</li>
                  <li>Hands-on Introduction to Linux Commands and Shell Scripting (May 2024)</li>
                  <li>Databases and SQL for Data Science with Python (May 2024)</li>
                  <li>Intro to Relational Databases (RDBMS) (Apr 2024)</li>
                  <li>Python Project for Data Engineering (Mar 2024)</li>
                  <li>Python for Data Science, AI & Development (Jan 2024)</li>
                  <li>Introduction to Data Engineering (Jan 2024)</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="border-t border-border pt-8">
            <h2 className="text-2xl font-bold mb-6">Awards</h2>
            
            <p className="text-muted-foreground text-sm lg:text-base">
              <strong className="text-foreground">Eurofins Star Performer Award</strong> – Q3-2019, Q3-2021, and Q1-2023. Awarded for streamlining operations, delivering high-impact data solutions, and completing critical automated workflows under deadline.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
