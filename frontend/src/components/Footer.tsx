import { Link } from "react-router-dom";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navigation = {
    main: [
      { name: "Home", href: "/" },
      { name: "Projects", href: "/projects" },
      { name: "Blog", href: "/blog" },
      { name: "Resume", href: "/resume" },
      { name: "Contact", href: "/contact" },
    ],
    social: [
      {
        name: "GitHub",
        href: "https://github.com/raghuveer9303",
        icon: Github,
      },
      {
        name: "LinkedIn",
        href: "https://www.linkedin.com/in/raghuveer-venkatesh",
        icon: Linkedin,
      },
      {
        name: "Email",
        href: "mailto:raghuveervenkatesh7@gmail.com",
        icon: Mail,
      },
    ],
  };

  return (
    <footer className="bg-card mt-auto">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link to="/" className="text-2xl font-heading font-bold text-foreground hover:text-primary transition-colors">
              RV
            </Link>
            <p className="text-black max-w-xs">
              Data Professional & Software Engineer specializing in data automation and scalable solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-foreground font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-black hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Section */}
          <div>
            <h3 className="text-foreground font-bold mb-4">Connect</h3>
            <div className="flex space-x-4">
              {navigation.social.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-black hover:text-primary transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.name}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-black text-sm">
              © {currentYear} Raghuveer Venkatesh. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-black">
              <a href="#" className="hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
