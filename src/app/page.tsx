'use client';

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import AssessmentButton from "@/components/AssessmentButton";
import { AssessmentPanel } from "@/components/AssessmentPanel";
import CaseStudyCard, { CaseStudy } from '@/components/CaseStudyCard';
import BlogCard, { BlogPost } from '@/components/BlogCard';
import Button from '@/components/Button';

export default function Home() {
  const [isAssessmentOpen, setIsAssessmentOpen] = useState(false);

  const featuredCaseStudies = [
    {
      title: "E-commerce Platform Redesign",
      description: "Complete overhaul of user experience leading to 45% increase in conversions",
      image: "/images/case-studies/ecommerce.jpg",
      category: "UX Design",
      metrics: [
        { label: "Conversion Rate", value: "+45%" },
        { label: "User Engagement", value: "+60%" }
      ],
      href: "/case-studies/ecommerce-redesign"
    },
    {
      title: "Healthcare App Development",
      description: "Patient-centric mobile app improving healthcare accessibility",
      image: "/images/case-studies/healthcare.jpg",
      category: "Development",
      metrics: [
        { label: "User Adoption", value: "50K+" },
        { label: "App Rating", value: "4.8" }
      ],
      href: "/case-studies/healthcare-app"
    },
    {
      title: "Brand Identity System",
      description: "Comprehensive brand evolution for a tech startup",
      image: "/images/case-studies/brand.jpg",
      category: "Branding",
      metrics: [
        { label: "Brand Recognition", value: "+85%" },
        { label: "Market Growth", value: "3x" }
      ],
      href: "/case-studies/brand-identity"
    }
  ];

  const blogPosts = [
    {
      title: "The Evolution of UI Design: 2025 Trends and Beyond",
      excerpt: "Dive deep into the transformative UI design trends of 2025, from adaptive interfaces to neomorphic evolution.",
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
    }
  ];

  return (
    <div className="min-h-screen bg-light dark:bg-gray-900">
      <AssessmentPanel isOpen={isAssessmentOpen} setIsOpen={setIsAssessmentOpen} />
      <main className="max-w-[1440px] mx-auto px-4">
        {/* Hero Section */}
        <section className="min-h-[calc(100vh-5rem)] flex items-center justify-center py-16 md:py-20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-6 md:space-y-8">
              <h1 className="text-[42px] font-bold tracking-tighter sm:text-[50px] md:text-[62px] lg:text-[86px] xl:text-[118px] max-w-5xl leading-[1.1] text-gray-900 dark:text-dark-100">
                Leading Thoughts, <br className="hidden sm:block" />
                <span className="text-brand">Inspiring Change</span>
              </h1>
              <p className="text-base md:text-lg text-gray-600 dark:text-dark-300 max-w-3xl">
                Gain valuable insights at the intersection of design, technology, and business. Our in-depth case studies and thought-provoking articles will empower you to drive digital innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 w-full sm:w-auto">
                <Button 
                  href="/case-studies"
                  className="bg-brand hover:bg-brand/90 text-white w-full sm:w-auto text-base md:text-lg py-3 px-6"
                >
                  Explore Our Insights
                </Button>
                <Button 
                  onClick={() => setIsAssessmentOpen(true)}
                  variant="outline"
                  className="w-full sm:w-auto text-base md:text-lg py-3 px-6"
                >
                  Free Assessment
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Video Section */}
        <section className="py-12 md:py-20 bg-gray-50 dark:bg-gray-900">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="relative aspect-video max-w-4xl mx-auto rounded-xl md:rounded-2xl overflow-hidden bg-gray-100 dark:bg-gray-800">
              {/* Video Thumbnail */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-900/20 to-gray-900/60">
                <Image
                  src="/images/video-thumbnail.jpg"
                  alt="Featured Video Thumbnail"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              
              {/* Play Button */}
              <button className="absolute inset-0 flex items-center justify-center group">
                <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-full bg-white/90 dark:bg-gray-900/90 group-hover:scale-110 transition-transform duration-200">
                  <svg 
                    className="w-6 h-6 md:w-8 md:h-8 text-brand group-hover:text-brand/80 transition-colors" 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <span className="sr-only">Play video</span>
              </button>

              {/* Video Info */}
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 bg-gradient-to-t from-gray-900 to-transparent">
                <h3 className="text-lg md:text-2xl font-bold text-white mb-1 md:mb-2">
                  The Future of Digital Innovation
                </h3>
                <p className="text-sm md:text-base text-gray-200">
                  A deep dive into emerging trends and their impact on business transformation
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Case Studies */}
        <section className="py-12 md:py-20">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter mb-3 md:mb-4">Featured Case Studies</h2>
              <p className="text-lg md:text-xl text-gray-500 dark:text-gray-400">Deep dives into transformative digital projects</p>
            </div>
            <div className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
              {featuredCaseStudies.map((study, index) => (
                <CaseStudyCard key={index} {...study} />
              ))}
            </div>
            <div className="text-center mt-8 md:mt-12">
              <Button href="/case-studies" variant="outline" className="w-full sm:w-auto">
                View All Case Studies
              </Button>
            </div>
          </div>
        </section>

        {/* Latest Articles */}
        <section className="py-12 md:py-20 bg-light dark:bg-gray-900">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter mb-3 md:mb-4 text-gray-900 dark:text-dark-100">Latest Articles</h2>
              <p className="text-lg md:text-xl text-gray-500 dark:text-dark-300">Insights on design, development, and digital innovation</p>
            </div>
            <div className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
              {blogPosts.map((post, index) => (
                <BlogCard key={index} {...post} />
              ))}
            </div>
            <div className="text-center mt-8 md:mt-12">
              <Button href="/blog" variant="outline" className="w-full sm:w-auto">
                View All Articles
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
