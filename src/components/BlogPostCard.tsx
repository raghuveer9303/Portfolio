
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
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
    <Card 
      className="overflow-hidden card-hover animate-fade-in" 
      style={{animationDelay: `${delay}ms`}}
    >
      <Link to={`/blog/${slug}`}>
        <div className="relative h-48 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />
        </div>
      </Link>
      <CardHeader className="p-4 pb-0">
        <div className="flex space-x-2 mb-2">
          {categories.map((category, index) => (
            <span
              key={index}
              className="bg-secondary text-xs font-medium px-2.5 py-0.5 rounded"
            >
              {category}
            </span>
          ))}
        </div>
        <Link to={`/blog/${slug}`}>
          <h3 className="text-xl font-bold hover:text-data-blue transition-colors">
            {title}
          </h3>
        </Link>
      </CardHeader>
      <CardContent className="p-4 pt-2">
        <p className="text-muted-foreground line-clamp-3">{excerpt}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex justify-between text-sm text-muted-foreground">
        <span>{date}</span>
        <span className="flex items-center">
          <Clock size={14} className="mr-1" />
          {readingTime}
        </span>
      </CardFooter>
    </Card>
  );
};

export default BlogPostCard;
