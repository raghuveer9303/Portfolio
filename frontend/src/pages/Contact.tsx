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

    try {
      const response = await fetch('https://raghuveervenkatesh.us/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

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
    <div className="container mx-auto px-4 py-16 md:py-24">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">Get in Touch</h1>
      <p className="text-lg text-black text-center mb-12 max-w-2xl mx-auto">
        Have a question or want to discuss a potential project? I'd love to hear from you.
      </p>

      <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
        {/* Contact Form */}
        <div className="bg-card p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
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

        {/* Contact Information */}
        <div className="space-y-8">
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
                className="text-black hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/raghuveer-venkatesh"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
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
    </div>
  );
};

export default Contact;
