import React, { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Send, X, MessageSquare } from "lucide-react";

interface Message {
  text: string;
  isUser: boolean;
  timestamp: Date;
}

interface QuickQuestion {
  text: string;
  query: string;
}

const ChatBox: React.FC = () => {
  // Set isOpen to true initially so it pops up on load
  const [isOpen, setIsOpen] = useState(true);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      text: "Hi, I'm Raghuveer! Welcome to my portfolio website. How can I help you today?",
      isUser: false,
      timestamp: new Date(),
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Quick question options
  const quickQuestions: QuickQuestion[] = [
    { text: "Your experience?", query: "What is your professional experience?" },
    { text: "View projects?", query: "Show me your projects" },
    { text: "Contact you?", query: "How can I contact you?" },
  ];

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleMessageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  const processMessage = (text: string) => {
    // Add user message
    const userMessage: Message = {
      text,
      isUser: true,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMessage]);
    
    // Simulate typing
    setIsTyping(true);

    // Simulate response (you can replace this with actual API call)
    setTimeout(() => {
      let responseText = "";
      
      // Simple response logic - can be replaced with actual AI/API integration
      if (text.toLowerCase().includes("experience")) {
        responseText = "I have over 6 years of experience in software engineering and data automation. I've worked at Eurofins IT as a Senior Software Engineer, leading data automation initiatives and managing ETL processes across multiple platforms.";
      } else if (text.toLowerCase().includes("project")) {
        responseText = "My portfolio includes projects like a Sentiment Analysis Pipeline using Python and PySpark, a FIFA Striker Market Value Predictor using R, and various enterprise data automation solutions. You can check them all in the Projects section!";
      } else if (text.toLowerCase().includes("contact")) {
        responseText = "You can reach me through the Contact page, via email at raghuveervenkatesh7@gmail.com, or call me at (317)-417-8807. I'm currently based in Indianapolis, Indiana.";
      } else if (text.toLowerCase().includes("skill")) {
        responseText = "My key skills include Python, SQL, R, Azure DevOps, Docker, Git, Power BI, and data automation. I specialize in ETL processes, data pipelines, and software solutions.";
      } else if (text.toLowerCase().includes("education")) {
        responseText = "I'm pursuing a Master's in Applied Data Science at Indiana University Indianapolis (expected Dec 2025). I also hold a Bachelor's in Electronics and Computer Engineering from CMR Institute of Technology.";
      } else {
        responseText = "Thanks for your message! Is there anything specific about my background, projects, or skills you'd like to know more about?";
      }

      const botMessage: Message = {
        text: responseText,
        isUser: false,
        timestamp: new Date(),
      };
      setMessages((prevMessages) => [...prevMessages, botMessage]);
      setIsTyping(false);
    }, 1000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim() === "") return;
    
    processMessage(message);
    setMessage("");
  };

  const handleQuickQuestion = (query: string) => {
    processMessage(query);
  };

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen ? (
        <Card className="w-80 md:w-96 shadow-lg animate-fade-in-up border border-data-blue/20">
          <CardHeader className="bg-data-blue text-white p-4 flex flex-row justify-between items-center">
            <div className="flex items-center">
              <MessageSquare className="mr-2 h-5 w-5" />
              <h3 className="font-medium">Chat with Raghuveer</h3>
            </div>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleChat}
              className="h-8 w-8 rounded-full text-white hover:bg-white/20"
            >
              <X className="h-5 w-5" />
            </Button>
          </CardHeader>
          <CardContent className="p-0">
            <div className="h-80 overflow-y-auto p-4">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`mb-3 flex ${
                    msg.isUser ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[80%] rounded-lg px-4 py-2 ${
                      msg.isUser
                        ? "bg-data-blue text-white"
                        : "bg-secondary text-foreground"
                    }`}
                  >
                    <p className="text-sm">{msg.text}</p>
                    <span className="text-xs opacity-70 mt-1 block">
                      {msg.timestamp.toLocaleTimeString([], { 
                        hour: '2-digit', 
                        minute: '2-digit' 
                      })}
                    </span>
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="mb-3 flex justify-start">
                  <div className="max-w-[80%] rounded-lg px-4 py-2 bg-secondary text-foreground">
                    <div className="flex space-x-1">
                      <div className="typing-dot"></div>
                      <div className="typing-dot animation-delay-200"></div>
                      <div className="typing-dot animation-delay-400"></div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          </CardContent>
          
          {/* Quick questions buttons */}
          <div className="px-3 py-2 border-t flex flex-wrap gap-2 justify-center">
            {quickQuestions.map((q, index) => (
              <Button
                key={index}
                variant="outline"
                size="sm"
                className="text-xs bg-secondary/50 border-data-blue/20 hover:bg-data-blue/10"
                onClick={() => handleQuickQuestion(q.query)}
              >
                {q.text}
              </Button>
            ))}
          </div>
          
          <CardFooter className="border-t p-2">
            <form className="flex w-full gap-2" onSubmit={handleSubmit}>
              <Input
                placeholder="Type your message..."
                value={message}
                onChange={handleMessageChange}
                className="flex-1"
              />
              <Button type="submit" size="icon" className="bg-data-blue hover:bg-data-blue-dark">
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </CardFooter>
        </Card>
      ) : (
        <Button
          onClick={toggleChat}
          className="w-12 h-12 rounded-full bg-data-blue hover:bg-data-blue-dark shadow-lg flex items-center justify-center"
        >
          <MessageSquare className="h-6 w-6" />
        </Button>
      )}
    </div>
  );
};

export default ChatBox;