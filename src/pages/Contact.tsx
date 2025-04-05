
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Mock form submission
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "There was an error sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4 md:px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">Contact Me</h1>
        <p className="text-xl text-muted-foreground mb-12 text-center max-w-2xl mx-auto">
          Have a question or want to work together? Feel free to reach out.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="animate-fade-in">
            <h2 className="text-2xl font-bold mb-6">Let's Connect</h2>
            <p className="text-muted-foreground mb-8">
              I'm currently available for freelance work, full-time positions, and interesting projects.
              If you have any questions or just want to say hello, don't hesitate to reach out!
            </p>

            <div className="space-y-6">
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

          {/* Contact Form */}
          <div className="bg-card rounded-lg shadow-sm p-8 animate-slide-in-bottom">
            <h2 className="text-2xl font-bold mb-6">Send Me a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2 font-medium">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block mb-2 font-medium">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Your email address"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block mb-2 font-medium">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="Subject of your message"
                />
              </div>

              <div>
                <label htmlFor="message" className="block mb-2 font-medium">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Your message"
                  rows={5}
                />
              </div>

              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
