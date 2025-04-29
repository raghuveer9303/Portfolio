import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Download, ExternalLink, Github, Linkedin, Mail } from "lucide-react";
import SkillProgress from "@/components/SkillProgress";
import ProjectCard from "@/components/ProjectCard";
import BlogPostCard from "@/components/BlogPostCard";

const RESUME_URL = "https://drive.google.com/file/d/1lq3EGCWc5GejTYHtBsz1h1ZeQCJSwllU/view?usp=drive_link";

const Home = () => {
  // Sample data for mock projects
  const projects = [
    {
      title: "Sentiment Analysis Pipeline",
      description: "A Python-based sentiment analysis pipeline that scraped Amazon & Peloton reviews using BeautifulSoup and PySpark.",
      image: "/placeholder.svg",
      imageAlt: "Sentiment Analysis Project",
      technologies: ["Python", "PySpark", "BeautifulSoup", "PostgreSQL", "Streamlit"],
      github: "https://github.com/raghuveer9303/Web-Scraper",
      live: "",
    },
    {
      title: "FIFA Striker Market Value Predictor",
      description: "A regression model leveraging player performance, physical attributes, and stats to forecast football strikers' market value.",
      image: "/placeholder.svg",
      imageAlt: "FIFA Striker Value Predictor",
      technologies: ["R", "Statistics", "Regression", "Data Analysis"],
      github: "",
      live: "https://rpubs.com/Raghuveer_Venkatesh/1255695",
    },
  ];

  // Sample data for mock blog posts
  const blogPosts = [
    {
      title: "The Future of Data Automation",
      excerpt: "Exploring how AI and machine learning are transforming data automation processes in modern enterprises.",
      date: "April 1, 2025",
      image: "/placeholder.svg",
      readingTime: "5 min read",
      slug: "future-data-automation",
      categories: ["Data", "Automation", "AI"],
    },
    {
      title: "Building Efficient ETL Pipelines",
      excerpt: "Best practices and tools for creating scalable and maintainable ETL pipelines for big data processing.",
      date: "March 25, 2025",
      image: "/placeholder.svg",
      readingTime: "8 min read",
      slug: "efficient-etl-pipelines",
      categories: ["ETL", "Data Engineering", "Python"],
    },
    {
      title: "Data Migration Strategies",
      excerpt: "Key considerations and approaches for successful data migration projects across distributed systems.",
      date: "March 10, 2025",
      image: "/placeholder.svg",
      readingTime: "6 min read",
      slug: "data-migration-strategies",
      categories: ["Data Migration", "Best Practices"],
    },
  ];

  // Mock skills data
  const programmingSkills = [
    { name: "Python", percentage: 95 },
    { name: "SQL", percentage: 90 },
    { name: "R", percentage: 85 },
    { name: "JavaScript", percentage: 75 },
    { name: "PowerShell", percentage: 80 },
  ];

  const toolsSkills = [
    { name: "Azure DevOps", percentage: 90 },
    { name: "Docker", percentage: 85 },
    { name: "Git", percentage: 92 },
    { name: "Power BI", percentage: 88 },
    { name: "Azure Data Factory", percentage: 85 },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary to-secondary py-20 md:py-32 overflow-hidden">
        {/* Background grid pattern with reduced opacity */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        
        {/* Hero image */}
        <div className="absolute right-0 top-0 h-full w-full md:w-1/2 overflow-hidden opacity-50">
          <div className="relative w-full h-[120%] transform scale-80">
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary mix-blend-color opacity-10"></div>
            <img 
              src="/lovable-uploads/862c0c1b-9e1a-4acd-bebe-0b8925a7ca8e.png" 
              alt=""
              className="w-full h-full object-cover object-top filter contrast-150 brightness-110 saturate-90 mix-blend-screen"
              aria-hidden="true"
            />
          </div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="w-full md:w-3/5 text-white mb-10 md:mb-0 animate-fade-in">
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-shadow-sm">
              Hi, I'm Raghuveer Venkatesh
            </h1>
            <p className="text-xl md:text-2xl mb-6 text-white font-medium">
              Data Professional & Software Engineer
            </p>
            <p className="text-lg mb-8 max-w-md text-white">
              Specializing in data automation and building scalable software solutions.
              Currently pursuing a Master's in Applied Data Science at Indiana University.
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
                I'm a passionate data professional with a background in software engineering
                and data automation. With over 6 years of experience in designing and 
                implementing scalable data pipelines, ETL processes, and software solutions,
                I specialize in turning complex data challenges into valuable insights.
              </p>
              <p className="mb-4">
                Currently, I'm pursuing a Master's in Applied Data Science at Indiana 
                University, Indianapolis, where I'm expanding my expertise in advanced 
                statistical methods, machine learning, and big data technologies.
              </p>
              <p className="mb-6">
                Previously, I worked as a Senior Software Engineer at Eurofins IT, where I led
                data automation initiatives and developed solutions that dramatically improved
                operational efficiency.
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
              <div className="timeline-date text-black">July 2022 - August 2024</div>
              <h3 className="timeline-title text-black">Senior Software Engineer – Data Automation</h3>
              <div className="timeline-organization text-black">Eurofins IT, Bangalore, India</div>
              <p className="mb-3 text-black">
                Led data automation initiatives and managed complex ETL processes across multiple platforms.
              </p>
              <ul className="list-disc pl-5 mb-4 text-black">
                <li>Designed and implemented data pipelines for 38 Azure tenants</li>
                <li>Led a team of six engineers in data migration projects</li>
                <li>Developed PowerApps solutions for internal data tracking</li>
              </ul>
            </div>
            
            <div className="timeline-item animate-fade-in" style={{animationDelay: "300ms"}}>
              <div className="timeline-dot"></div>
              <div className="timeline-date text-black">June 2018 - June 2022</div>
              <h3 className="timeline-title text-black">Software Engineer</h3>
              <div className="timeline-organization text-black">Eurofins IT, Bangalore, India</div>
              <p className="mb-3 text-black">
                Developed software solutions and automated processes to improve operational efficiency.
              </p>
              <ul className="list-disc pl-5 mb-4 text-black">
                <li>Created scheduled jobs using Azure DevOps for log consolidation</li>
                <li>Developed Eurofins travel request portal to streamline processes</li>
                <li>Built dynamic email distribution systems for 60k+ users</li>
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

      {/* Blog Section */}
      <section className="bg-secondary py-20">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="section-title text-center mb-12">From the Blog</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <BlogPostCard
                key={post.slug}
                {...post}
                delay={index * 200}
              />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button asChild>
              <Link to="/blog">Read More Articles</Link>
            </Button>
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
