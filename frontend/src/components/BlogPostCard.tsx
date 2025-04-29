import { Link } from "react-router-dom";
import { Clock } from "lucide-react";

interface BlogPostCardProps {
  title: string;
  excerpt: string;
  date: string;
  image: string;
  readingTime: string;
  slug: string;
  categories: string[];
  delay?: number;
}

const BlogPostCard = ({
  title,
  excerpt,
  date,
  image,
  readingTime,
  slug,
  categories,
  delay = 0
}: BlogPostCardProps) => {
  return (
    <Link 
      to={`/blog/${slug}`}
      className="group block rounded-xl bg-card shadow-card hover:shadow-hover transition-all duration-300 overflow-hidden"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="aspect-[16/9] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      
      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-3">
          {categories.map((category) => (
            <span
              key={category}
              className="text-xs px-2 py-1 rounded-full bg-secondary/10 text-black"
            >
              {category}
            </span>
          ))}
        </div>
        
        <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
          {title}
        </h3>
        
        <p className="text-black mb-4 line-clamp-2">
          {excerpt}
        </p>
        
        <div className="flex items-center justify-between text-sm text-black">
          <span>{date}</span>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            {readingTime}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogPostCard;
