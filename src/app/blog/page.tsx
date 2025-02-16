import BlogCard, { BlogPost } from '@/components/BlogCard';
import Link from 'next/link';

export default function Blog() {
  const posts: BlogPost[] = [
    {
      title: "The Future of UI Design: Trends to Watch in 2025",
      category: "UI/UX Design",
      date: "Feb 15, 2025",
      readTime: "5 min read",
      excerpt: "Explore emerging UI design trends that will shape the digital landscape in 2025 and beyond.",
      link: "/blog/ui-design-trends-2025"
    },
    {
      title: "Building Brand Identity in the Digital Age",
      category: "Branding",
      date: "Feb 10, 2025",
      readTime: "7 min read",
      excerpt: "Learn how to create and maintain a strong brand identity in today's fast-paced digital environment.",
      link: "/blog/brand-identity-digital-age"
    },
    {
      title: "Content Strategy: The Key to Digital Success",
      category: "Content",
      date: "Feb 5, 2025",
      readTime: "6 min read",
      excerpt: "Discover how a well-planned content strategy can drive engagement and conversions.",
      link: "/blog/content-strategy-success"
    },
    {
      title: "Maximizing SEO Impact Through Design",
      category: "SEO",
      date: "Jan 30, 2025",
      readTime: "8 min read",
      excerpt: "Understanding the intersection of design and SEO for better search visibility.",
      link: "/blog/seo-through-design"
    },
    {
      title: "The Art of Digital Storytelling",
      category: "Art Direction",
      date: "Jan 25, 2025",
      readTime: "4 min read",
      excerpt: "Master the craft of telling compelling stories through digital mediums.",
      link: "/blog/digital-storytelling"
    },
    {
      title: "Creating User-Centric Design Systems",
      category: "UI/UX Design",
      date: "Jan 20, 2025",
      readTime: "6 min read",
      excerpt: "A comprehensive guide to building scalable and user-friendly design systems.",
      link: "/blog/user-centric-design-systems"
    }
  ];

  return (
    <main className="pt-24">
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-[1440px] mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block text-[#E9264A] text-sm font-medium tracking-wider uppercase mb-4">Insights</span>
            <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">Blog</h1>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Thoughts and insights on UI/UX, branding, and digital strategy.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <BlogCard key={index} post={post} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
