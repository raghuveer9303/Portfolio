
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
  color = "data-blue",
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
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="font-medium">{name}</span>
        <span className="text-data-gray">{progress}%</span>
      </div>
      <div className="h-2 bg-data-gray-lightest rounded-full overflow-hidden">
        <div
          className={cn(`h-full transition-all duration-1000 ease-out bg-${color}`)}
          style={{ 
            width: `${progress}%`,
            backgroundColor: color === "data-blue" ? "#1EAEDB" : 
                             color === "data-accent" ? "#E83E8C" : color
          }}
        ></div>
      </div>
    </div>
  );
};

export default SkillProgress;
