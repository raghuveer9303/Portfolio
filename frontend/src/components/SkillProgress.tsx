import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface SkillProgressProps {
  name: string;
  percentage: number;
  color?: string;
  delay?: number;
}

const SkillProgress = ({
  name,
  percentage,
  color = "#0A66C2",
  delay = 0
}: SkillProgressProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(percentage);
    }, delay);

    return () => clearTimeout(timer);
  }, [percentage, delay]);

  return (
    <div className="mb-6">
      <div className="flex justify-between mb-2">
        <span className="text-foreground font-medium">{name}</span>
        <span className="text-muted tabular-nums">{progress}%</span>
      </div>
      <div className="h-2.5 bg-muted/20 rounded-full overflow-hidden">
        <div
          className="h-full transition-all duration-1000 ease-out rounded-full"
          style={{ 
            width: `${progress}%`,
            backgroundColor: color === "data-blue" ? "#0A66C2" : 
                           color === "data-accent" ? "#00C49A" : color
          }}
        ></div>
      </div>
    </div>
  );
};

export default SkillProgress;
