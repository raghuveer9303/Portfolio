
import { Github, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Raghuveer Venkatesh</h3>
            <p className="text-muted-foreground mb-4">
              Data Professional & Software Engineer
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/raghuveer9303"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-data-blue transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/raghuveer-venkatesh"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-data-blue transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:raghuveervenkatesh7@gmail.com"
                className="text-muted-foreground hover:text-data-blue transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-data-blue transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-muted-foreground hover:text-data-blue transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-muted-foreground hover:text-data-blue transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/resume" className="text-muted-foreground hover:text-data-blue transition-colors">
                  Resume
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-data-blue transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <p className="text-muted-foreground mb-2">
              Indianapolis, Indiana
            </p>
            <p className="text-muted-foreground mb-2">
              (317)-417-8807
            </p>
            <p className="text-muted-foreground">
              raghuveervenkatesh7@gmail.com
            </p>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>© {currentYear} Raghuveer Venkatesh. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
