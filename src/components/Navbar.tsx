
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ThemeToggle } from "./ThemeToggle";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-sm shadow-sm py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold flex items-center">
          <span className="text-data-blue">Raghuveer</span>
          <span className="text-data-accent">.dev</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1">
          <Link
            to="/"
            className={`nav-link ${isActive("/") ? "active" : ""}`}
          >
            Home
          </Link>
          <Link
            to="/projects"
            className={`nav-link ${isActive("/projects") ? "active" : ""}`}
          >
            Projects
          </Link>
          <Link
            to="/blog"
            className={`nav-link ${isActive("/blog") ? "active" : ""}`}
          >
            Blog
          </Link>
          <Link
            to="/resume"
            className={`nav-link ${isActive("/resume") ? "active" : ""}`}
          >
            Resume
          </Link>
          <Link
            to="/contact"
            className={`nav-link ${isActive("/contact") ? "active" : ""}`}
          >
            Contact
          </Link>
          <ThemeToggle />
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden">
          <ThemeToggle />
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleMenu}
            className="ml-2"
            aria-label="Menu toggle"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-sm shadow-sm border-t">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-3">
            <Link
              to="/"
              className={`nav-link ${isActive("/") ? "active" : ""}`}
              onClick={closeMenu}
            >
              Home
            </Link>
            <Link
              to="/projects"
              className={`nav-link ${isActive("/projects") ? "active" : ""}`}
              onClick={closeMenu}
            >
              Projects
            </Link>
            <Link
              to="/blog"
              className={`nav-link ${isActive("/blog") ? "active" : ""}`}
              onClick={closeMenu}
            >
              Blog
            </Link>
            <Link
              to="/resume"
              className={`nav-link ${isActive("/resume") ? "active" : ""}`}
              onClick={closeMenu}
            >
              Resume
            </Link>
            <Link
              to="/contact"
              className={`nav-link ${isActive("/contact") ? "active" : ""}`}
              onClick={closeMenu}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
