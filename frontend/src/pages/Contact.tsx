import { Github, Linkedin, Mail, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">Get in Touch</h1>
      <p className="text-lg text-black text-center mb-12 max-w-2xl mx-auto">
        Have a question or want to discuss a potential project? I'd love to hear from you.
      </p>

      <div className="max-w-xl mx-auto space-y-8 bg-card p-8 rounded-lg shadow-sm border border-border">
        <div>
          <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
          <div className="space-y-4">
            <p className="flex items-center text-black">
              <Mail className="mr-2 h-5 w-5" />
              raghuveervenkatesh7@gmail.com
            </p>
            <p className="flex items-center text-black">
              <MapPin className="mr-2 h-5 w-5" />
              Indianapolis, Indiana
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-6">Connect</h2>
          <div className="flex space-x-4">
            <a
              href="https://github.com/raghuveer9303"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-primary transition-colors hover:-translate-y-1 transform duration-200"
              aria-label="GitHub"
            >
              <Github size={28} />
            </a>
            <a
              href="https://www.linkedin.com/in/raghuveer-venkatesh"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-primary transition-colors hover:-translate-y-1 transform duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin size={28} />
            </a>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-6">Office Hours</h2>
          <p className="text-black">
            Monday - Friday: 9:00 AM - 5:00 PM EST
          </p>
          <p className="text-black mt-2">
            I typically respond to messages within 24 hours.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
