
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import BlogPostCard from "@/components/BlogPostCard";
import { Search } from "lucide-react";

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState("");

  // Sample blog posts data
  const blogPosts = [
    {
      title: "The Future of Data Automation",
      excerpt: "Exploring how AI and machine learning are transforming data automation processes in modern enterprises. Learn about the latest trends and technologies that are revolutionizing how businesses handle their data workflows.",
      date: "April 1, 2025",
      image: "/placeholder.svg",
      readingTime: "5 min read",
      slug: "future-data-automation",
      categories: ["Data", "Automation", "AI"],
      featured: true,
    },
    {
      title: "Building Efficient ETL Pipelines",
      excerpt: "Best practices and tools for creating scalable and maintainable ETL pipelines for big data processing. This article covers key architectural considerations and implementation strategies.",
      date: "March 25, 2025",
      image: "/placeholder.svg",
      readingTime: "8 min read",
      slug: "efficient-etl-pipelines",
      categories: ["ETL", "Data Engineering", "Python"],
      featured: true,
    },
    {
      title: "Data Migration Strategies",
      excerpt: "Key considerations and approaches for successful data migration projects across distributed systems. Learn how to minimize downtime and ensure data integrity during complex migrations.",
      date: "March 10, 2025",
      image: "/placeholder.svg",
      readingTime: "6 min read",
      slug: "data-migration-strategies",
      categories: ["Data Migration", "Best Practices"],
      featured: false,
    },
    {
      title: "The Role of DevOps in Data Engineering",
      excerpt: "How DevOps practices can improve data engineering workflows and create more robust data pipelines. This article examines the intersection of data engineering and modern software development practices.",
      date: "February 28, 2025",
      image: "/placeholder.svg",
      readingTime: "7 min read",
      slug: "devops-data-engineering",
      categories: ["DevOps", "Data Engineering"],
      featured: false,
    },
    {
      title: "Power BI vs Tableau: A Data Professional's Perspective",
      excerpt: "An in-depth comparison of two leading data visualization tools from someone who works with both. Learn the strengths, weaknesses, and ideal use cases for each platform.",
      date: "February 15, 2025",
      image: "/placeholder.svg",
      readingTime: "10 min read",
      slug: "powerbi-vs-tableau",
      categories: ["Data Visualization", "Tools"],
      featured: false,
    },
    {
      title: "Azure Data Factory Best Practices",
      excerpt: "Optimize your Azure Data Factory implementations with these proven best practices. From performance tuning to governance considerations, this guide covers key aspects of ADF development.",
      date: "January 30, 2025",
      image: "/placeholder.svg",
      readingTime: "9 min read",
      slug: "adf-best-practices",
      categories: ["Azure", "Data Factory", "Cloud"],
      featured: false,
    },
  ];

  // Get all unique categories
  const allCategories = Array.from(
    new Set(blogPosts.flatMap(post => post.categories))
  ).sort();

  // Featured posts
  const featuredPosts = blogPosts.filter(post => post.featured);

  // Filter posts based on search query
  const filteredPosts = blogPosts.filter(post => 
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.categories.some(category => 
      category.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4 md:px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">Blog</h1>
        <p className="text-xl text-muted-foreground mb-8 text-center max-w-2xl mx-auto">
          Thoughts, insights, and guides on data engineering, automation, and software development.
        </p>

        {/* Search and filter section */}
        <div className="mb-12 max-w-md mx-auto">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
            <Input
              type="search"
              placeholder="Search articles..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Tags/Categories */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {allCategories.map((category) => (
            <Button
              key={category}
              variant="outline"
              size="sm"
              onClick={() => setSearchQuery(category)}
              className="mb-2"
            >
              {category}
            </Button>
          ))}
          {searchQuery && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setSearchQuery("")}
              className="mb-2 text-muted-foreground"
            >
              Clear Filters
            </Button>
          )}
        </div>

        {/* Featured posts section (only show if not searching) */}
        {!searchQuery && featuredPosts.length > 0 && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6">Featured Posts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {featuredPosts.map((post, index) => (
                <BlogPostCard
                  key={post.slug}
                  {...post}
                  delay={index * 100}
                />
              ))}
            </div>
          </div>
        )}

        {/* All posts grid */}
        <div>
          <h2 className="text-2xl font-bold mb-6">
            {searchQuery ? "Search Results" : "All Posts"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts
              .filter(post => !searchQuery || !post.featured)
              .map((post, index) => (
                <BlogPostCard
                  key={post.slug}
                  {...post}
                  delay={index * 100}
                />
              ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-muted-foreground">
                No articles found matching your search criteria.
              </p>
              <Button 
                variant="outline" 
                className="mt-4"
                onClick={() => setSearchQuery("")}
              >
                Clear Search
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Blog;
