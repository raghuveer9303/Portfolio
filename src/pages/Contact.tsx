
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4 md:px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">Contact Me</h1>
        <p className="text-xl text-muted-foreground mb-12 text-center max-w-2xl mx-auto">
          Have a question or want to work together? Feel free to reach out.
        </p>

        <div className="max-w-3xl mx-auto">
          <div className="animate-fade-in">
            <h2 className="text-2xl font-bold mb-6">Let's Connect</h2>
            <p className="text-muted-foreground mb-8">
              I'm currently available for freelance work, full-time positions, and interesting projects.
              If you have any questions or just want to say hello, don't hesitate to contact me directly!
            </p>

            <div className="space-y-8">
              <div className="flex items-start">
                <div className="mr-4 bg-data-blue/10 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-data-blue" />
                </div>
                <div>
                  <h3 className="font-bold">Email</h3>
                  <a href="mailto:raghuveervenkatesh7@gmail.com" className="text-muted-foreground hover:text-data-blue transition-colors">
                    raghuveervenkatesh7@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mr-4 bg-data-blue/10 p-3 rounded-full">
                  <Phone className="h-6 w-6 text-data-blue" />
                </div>
                <div>
                  <h3 className="font-bold">Phone</h3>
                  <a href="tel:+13174178807" className="text-muted-foreground hover:text-data-blue transition-colors">
                    (317)-417-8807
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mr-4 bg-data-blue/10 p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-data-blue" />
                </div>
                <div>
                  <h3 className="font-bold">Location</h3>
                  <p className="text-muted-foreground">
                    Indianapolis, Indiana
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="font-bold mb-4">Connect on Social Media</h3>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/raghuveer9303"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-card p-3 rounded-full border border-border hover:border-data-blue transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="h-6 w-6" />
                </a>
                <a
                  href="https://www.linkedin.com/in/raghuveer-venkatesh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-card p-3 rounded-full border border-border hover:border-data-blue transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
                <a
                  href="mailto:raghuveervenkatesh7@gmail.com"
                  className="bg-card p-3 rounded-full border border-border hover:border-data-blue transition-colors"
                  aria-label="Email"
                >
                  <Mail className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
