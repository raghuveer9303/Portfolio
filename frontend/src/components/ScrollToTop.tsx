import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.pageYOffset > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Button
      size="icon"
      className={cn(
        "fixed bottom-20 right-4 z-40 h-10 w-10 rounded-full bg-primary hover:bg-primary-hover shadow-lg transition-all duration-300",
        isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
      )}
      onClick={scrollToTop}
      aria-label="Scroll to top"
    >
      <ArrowUp className="h-5 w-5 text-white" />
    </Button>
  );
};

export default ScrollToTop;
