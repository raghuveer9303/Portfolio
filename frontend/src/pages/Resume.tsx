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
            <p className="text-xl text-muted-foreground">
              My professional background and qualifications
            </p>
          </div>
          <Button asChild className="mt-4 md:mt-0" size="lg">
            <a href={RESUME_URL} target="_blank" rel="noopener noreferrer">
              <Download className="mr-2 h-5 w-5" />
              Download PDF
            </a>
          </Button>
        </div>

        <div className="bg-card rounded-lg shadow-sm p-8 md:p-10 mb-10 animate-fade-in">
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-2">Raghuveer Venkatesh</h2>
            <p className="text-lg mb-4">Data Professional & Software Engineer</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-muted-foreground">
              <div>
                <p>Indianapolis, Indiana</p>
                <p>(317)-417-8807</p>
              </div>
              <div>
                <p>raghuveervenkatesh7@gmail.com</p>
                <div className="flex space-x-4">
                  <a 
                    href="https://www.linkedin.com/in/raghuveer-venkatesh"
                    className="text-data-blue hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </a>
                  <a 
                    href="https://github.com/raghuveer9303"
                    className="text-data-blue hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-border pt-8 mb-8">
            <h2 className="text-2xl font-bold mb-6">Education</h2>
            
            <div className="mb-6">
              <h3 className="text-xl font-bold">Indiana University Indianapolis, U.S</h3>
              <p className="text-data-blue">Master of Science, Applied Data Science</p>
              <p className="text-muted-foreground mb-2">Expected Dec 2025 - GPA 4.00/4.00</p>
              <p><span className="font-medium">Relevant Coursework:</span> Python programming, Statistics in R, Database Design</p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold">CMR Institute of Technology Bangalore, India</h3>
              <p className="text-data-blue">Bachelor of Engineering, Electronics and Computer Engineering</p>
              <p className="text-muted-foreground">Graduated Jan 2018</p>
            </div>
          </div>

          <div className="border-t border-border pt-8 mb-8">
            <h2 className="text-2xl font-bold mb-6">Skills</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h3 className="font-bold mb-2">Programming Languages</h3>
                <p className="text-muted-foreground">
                  Python, SQL, R, PowerShell, HTML, CSS, JavaScript, C#
                </p>
              </div>
              
              <div>
                <h3 className="font-bold mb-2">Tools & Platforms</h3>
                <p className="text-muted-foreground">
                  Azure DevOps, Docker, Git, Visual Studio, Power BI, PowerApps, SharePoint, Azure Data Factory, Linux
                </p>
              </div>
              
              <div>
                <h3 className="font-bold mb-2">Core Competencies</h3>
                <p className="text-muted-foreground">
                  ETL, Automation, Database Management, Azure Cloud Services, Web Development, Parallel Programming, IT Project Management, Data Visualization, REST APIs, Pandas, PySpark
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-border pt-8 mb-8">
            <h2 className="text-2xl font-bold mb-6">Professional Experience</h2>
            
            <div className="mb-8">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                <h3 className="text-xl font-bold">Senior Software Engineer – Data Automation</h3>
                <p className="text-muted-foreground">July 2022 – August 2024</p>
              </div>
              <p className="text-data-blue mb-4">Eurofins IT, Bangalore, India</p>
              
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                <li>Designed and implemented a scalable data pipeline to collect, transform, and load (ETL) tenant data from 38 Azure tenants into a centralized repository, enabling efficient integration, processing, and compliance reporting using Python, Azure Data Factory, and Power BI.</li>
                <li>Led a team of six engineers in a data migration project as a Scrum Master, coordinating across multiple countries to migrate SharePoint data, while implementing best practices for data validation, monitoring, and reporting, delivering the project ahead of schedule.</li>
                <li>Developed a PowerApps-based app integrated with SQL Stored Procedures for internal data tracking, which automated data entry across 146 office locations, reducing manual input and improving data consistency.</li>
                <li>Created a data pipeline to automate the migration of 6TB of unstructured data, including documents and SharePoint list items, from multiple on-premises SharePoint servers to Azure Blob Storage and SharePoint Online, ensuring seamless data flow and scalability.</li>
                <li>Built data ingestion and processing pipelines for Microsoft 365 (M365) activity logs, which decreased audit time by 70% by automating data validation, transformation, and loading processes, ensuring timely and accurate reporting for improved data governance.</li>
              </ul>
            </div>
            
            <div>
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                <h3 className="text-xl font-bold">Software Engineer</h3>
                <p className="text-muted-foreground">June 2018 – June 2022</p>
              </div>
              <p className="text-data-blue mb-4">Eurofins IT, Bangalore, India</p>
              
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                <li>Created and deployed scheduled jobs using Azure DevOps to consolidate application logs for a distributed application (hosted in 18 servers across 3 environments) into a unified database so that it could be further processed by "Eurofins Data" team.</li>
                <li>Developed Eurofins travel request portal which simplified filling, approval and tracking of travel request form. The system reduced travel request processing time from 10 days to 3 days, while providing real-time access to historical data using PowerBI for reporting and cost analysis.</li>
                <li>Made dynamic email distribution lists (1600 entries) easily accessible to 60k+ users by creating a webapp and automated loading the data using C# into a SharePoint List.</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border pt-8 mb-8">
            <h2 className="text-2xl font-bold mb-6">Projects</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold mb-2">Sentiment Analysis Pipeline</h3>
                <p className="text-muted-foreground mb-1">
                  Engineered a Python-based sentiment analysis pipeline that scraped Amazon & Peloton reviews using BeautifulSoup and PySpark, ingested data into PostgreSQL, and delivered interactive insights via a Streamlit dashboard.
                </p>
                <p>
                  <a 
                    href="https://github.com/raghuveer9303/Web-Scraper" 
                    className="text-data-blue hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Github: https://github.com/raghuveer9303/Web-Scraper
                  </a>
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-2">FIFA Striker Market Value Predictor</h3>
                <p className="text-muted-foreground mb-1">
                  Developed a regression model leveraging player performance, physical attributes, and stats to forecast football strikers' market value, empowering smarter scouting and investment decisions.
                </p>
                <p>
                  <a 
                    href="https://rpubs.com/Raghuveer_Venkatesh/1255695" 
                    className="text-data-blue hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Link: https://rpubs.com/Raghuveer_Venkatesh/1255695
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-border pt-8 mb-8">
            <h2 className="text-2xl font-bold mb-6">Certifications</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="font-medium">Microsoft - AZ900 - Azure Fundamentals</p>
              </div>
              <div>
                <p className="font-medium">Scrum Alliance - Certified ScrumMaster CSM®</p>
              </div>
              <div>
                <p className="font-medium">Kaggle – Python certificate, Pandas certificate</p>
              </div>
              <div>
                <p className="font-medium">Hacker Rank - Python 4* Badge, SQL 2* Badge</p>
              </div>
              <div className="md:col-span-2">
                <p className="font-medium">IBM Certified Data Engineer Professional Certs</p>
                <ul className="list-disc pl-5 text-muted-foreground">
                  <li>Introduction to Data Engineering</li>
                  <li>Python Project for Data Engineering</li>
                  <li>Linux Commands and Shell Scripting</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="border-t border-border pt-8">
            <h2 className="text-2xl font-bold mb-6">Awards</h2>
            
            <p className="text-muted-foreground">
              Eurofins Star Performer Award – Q3-2019, Q3-2021, Q1-2023 for streamlining operations and completing critical projects.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
