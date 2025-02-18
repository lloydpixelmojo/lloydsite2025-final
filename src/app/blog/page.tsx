'use client';

import Link from 'next/link';
import BlogCard from '@/components/BlogCard';

const posts = [
  {
    title: "The Evolution of UI Design: 2025 Trends and Beyond",
    excerpt: "Dive deep into the transformative UI design trends of 2025, from adaptive interfaces to neomorphic evolution, and learn how these changes are reshaping digital experiences.",
    image: "/images/blog/ui-design-trends.jpg",
    category: "UI Design",
    date: "Feb 18, 2025",
    readTime: "8 min read",
    href: "/blog/ui-design-trends-2025"
  },
  {
    title: "Building Scalable Systems in 2025",
    excerpt: "Learn the latest best practices for creating maintainable and scalable applications that can handle millions of users.",
    image: "/images/blog/scalable-systems.jpg",
    category: "Development",
    date: "Feb 15, 2025",
    readTime: "7 min read",
    href: "/blog/scalable-systems-2025"
  },
  {
    title: "The Power of Design Systems",
    excerpt: "Discover how design systems are revolutionizing product development and enabling teams to build better products faster.",
    image: "/images/blog/design-systems.jpg",
    category: "Design Systems",
    date: "Feb 12, 2025",
    readTime: "6 min read",
    href: "/blog/power-of-design-systems"
  },
  {
    title: "AI in Modern UX Design",
    excerpt: "Explore how artificial intelligence is transforming user experience design and enabling more personalized digital experiences.",
    image: "/images/blog/ai-ux.jpg",
    category: "UX Design",
    date: "Feb 10, 2025",
    readTime: "5 min read",
    href: "/blog/ai-in-modern-ux"
  },
  {
    title: "The Future of Web Development",
    excerpt: "From WebAssembly to Edge Computing, discover the technologies that will shape web development in the coming years.",
    image: "/images/blog/web-dev-future.jpg",
    category: "Development",
    date: "Feb 8, 2025",
    readTime: "6 min read",
    href: "/blog/future-web-development"
  },
  {
    title: "Creating Immersive Digital Experiences",
    excerpt: "Learn how to craft engaging and immersive digital experiences that keep users coming back for more.",
    image: "/images/blog/immersive-exp.jpg",
    category: "UX Design",
    date: "Feb 5, 2025",
    readTime: "7 min read",
    href: "/blog/immersive-digital-experiences"
  },
  {
    title: "The Psychology of Color in Design",
    excerpt: "Understanding how color choices impact user behavior and emotional responses in digital interfaces.",
    image: "/images/blog/color-psychology.jpg",
    category: "Design",
    date: "Feb 3, 2025",
    readTime: "6 min read",
    href: "/blog/psychology-of-color"
  },
  {
    title: "Optimizing Performance at Scale",
    excerpt: "Advanced techniques for maintaining high performance in large-scale web applications.",
    image: "/images/blog/performance.jpg",
    category: "Development",
    date: "Feb 1, 2025",
    readTime: "8 min read",
    href: "/blog/optimizing-performance"
  },
  {
    title: "Accessibility First Design",
    excerpt: "Why and how to prioritize accessibility in your design process from day one.",
    image: "/images/blog/accessibility.jpg",
    category: "Design",
    date: "Jan 30, 2025",
    readTime: "5 min read",
    href: "/blog/accessibility-first"
  }
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-light dark:bg-gray-900 py-16 md:py-20">
      <main className="max-w-[1440px] mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-900 dark:text-dark-100">
            Latest Insights
          </h1>
          <p className="text-lg text-gray-600 dark:text-dark-300 max-w-2xl mx-auto">
            Explore our collection of thought-provoking articles on design, development, and digital innovation.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <BlogCard
              key={index}
              title={post.title}
              excerpt={post.excerpt}
              image={post.image}
              category={post.category}
              date={post.date}
              readTime={post.readTime}
              href={post.href}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
