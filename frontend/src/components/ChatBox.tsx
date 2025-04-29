import { useState, useEffect, useRef } from "react";
import { MessageCircle, Send, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const ChatBox = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const toggleChat = () => setIsOpen(!isOpen);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    // Add user message
    setMessages(prev => [...prev, { text: input, isUser: true }]);
    setInput("");
    setIsLoading(true);

    try {
      const formData = new FormData();
      formData.append('question', input);

      const response = await fetch('https://raghuveervenkatesh.us/api/chat', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Failed to get response');
      }

      const data = await response.json();
      setMessages(prev => [...prev, {
        text: data.answer,
        isUser: false
      }]);
    } catch (error) {
      setMessages(prev => [...prev, {
        text: "An error occurred while processing your request. Please try again.",
        isUser: false
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Chat Button */}
      <Button
        size="icon"
        className={cn(
          "h-12 w-12 rounded-full shadow-lg bg-primary hover:bg-primary-hover transition-all duration-300",
          isOpen && "rotate-90"
        )}
        onClick={toggleChat}
      >
        {isOpen ? (
          <X className="h-5 w-5 text-white" />
        ) : (
          <MessageCircle className="h-5 w-5 text-white" />
        )}
      </Button>

      {/* Chat Window */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-72 md:w-80 bg-card rounded-lg shadow-hover overflow-hidden animate-fade-in">
          {/* Header */}
          <div className="bg-primary p-3">
            <h3 className="text-white font-medium text-sm">Chat with me</h3>
          </div>

          {/* Messages */}
          <div className="h-72 p-3 overflow-y-auto space-y-3">
            {messages.map((message, index) => (
              <div
                key={index}
                className={cn(
                  "max-w-[80%] p-2 rounded-lg text-sm",
                  message.isUser
                    ? "ml-auto bg-primary text-white rounded-br-none"
                    : "bg-muted/10 text-black rounded-bl-none"
                )}>
                {message.text}
              </div>
            ))}
            {messages.length === 0 && (
              <div className="text-center text-black text-sm">
                Hi There! Raghuveer here. How can I help you?
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form onSubmit={handleSubmit} className="p-3 border-t border-border">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 px-2 py-1.5 text-sm rounded-md bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-black placeholder:text-black/60"
              />
              <Button 
                type="submit" 
                size="icon"
                className="bg-primary hover:bg-primary-hover h-8 w-8"
                disabled={!input.trim() || isLoading}
              >
                <Send className="h-3.5 w-3.5" />
              </Button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default ChatBox;