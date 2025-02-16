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

  const featuredCaseStudies: CaseStudy[] = [
    {
      title: "E-Commerce Redesign",
      category: "E-commerce",
      description: "Increased conversion rates by 150% through UX improvements and mobile-first design.",
      client: "StyleSpace",
      year: "2024",
      link: "/case-studies/ecommerce",
      stats: ["150%", "Conversion Rate", "Increase"]
    },
    {
      title: "SaaS Platform",
      category: "SaaS",
      description: "Built a scalable design system that reduced development time and improved consistency.",
      client: "CloudFlow",
      year: "2024",
      link: "/case-studies/saas",
      stats: ["40%", "Development Time", "Reduction"]
    },
    {
      title: "Mobile App",
      category: "Mobile",
      description: "Created an intuitive mobile experience with 98% user satisfaction and increased engagement.",
      client: "FitTrack",
      year: "2023",
      link: "/case-studies/mobile-app",
      stats: ["98%", "User", "Satisfaction"]
    }
  ];

  const featuredPosts: BlogPost[] = [
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
    }
  ];

  return (
    <div className="min-h-screen">
      <AssessmentPanel isOpen={isAssessmentOpen} setIsOpen={setIsAssessmentOpen} />
      <main className="max-w-[1440px] mx-auto px-4">
        {/* Hero Section */}
        <section className="py-20 md:py-28">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-blue-600 bg-clip-text text-transparent leading-[1.2] pb-1">
                Leading Thoughts,{' '}
                <span className="inline-block">Inspiring Change</span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                Discover insights that drive innovation and growth in the digital age. Join a community of forward-thinking leaders shaping the future.
              </p>
              <AssessmentButton onClick={() => setIsAssessmentOpen(true)} />
            </div>
            <div className="relative">
              {/* Add hero image or illustration here */}
            </div>
          </div>
        </section>

        {/* Featured Case Studies */}
        <section className="py-16 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-[1440px] mx-auto px-4">
            <div className="flex justify-between items-center mb-12">
              <div>
                <span className="inline-block text-[#E9264A] text-sm font-medium tracking-wider uppercase mb-4">Portfolio</span>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Featured Case Studies</h2>
              </div>
              <Link 
                href="/case-studies"
                className="inline-flex items-center text-[#E9264A] hover:text-[#d11f40]"
              >
                View All Case Studies
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {featuredCaseStudies.map((study, index) => (
                <CaseStudyCard key={index} study={study} />
              ))}
            </div>
          </div>
        </section>

        {/* Featured Blog Posts */}
        <section className="py-16 bg-white dark:bg-gray-800">
          <div className="max-w-[1440px] mx-auto px-4">
            <div className="flex justify-between items-center mb-12">
              <div>
                <span className="inline-block text-[#E9264A] text-sm font-medium tracking-wider uppercase mb-4">Blog</span>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Leading Thoughts, Inspiring Change</h2>
              </div>
              <Link 
                href="/blog"
                className="inline-flex items-center text-[#E9264A] hover:text-[#d11f40]"
              >
                View All Posts
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {featuredPosts.map((post, index) => (
                <BlogCard key={index} post={post} />
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-24 bg-white dark:bg-gray-800">
          <div className="max-w-[1440px] mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
                Transform Your Digital Presence
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                We blend creativity with strategy to deliver exceptional digital experiences that drive real business results.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-12">
              {/* UI/UX Excellence */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  UI/UX Excellence
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Transform user experiences through research-driven design, seamless interactions, and pixel-perfect interfaces.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-700 dark:text-gray-200">
                    <svg className="w-5 h-5 mr-2 text-[#E9264A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    User Research & Testing
                  </li>
                  <li className="flex items-center text-gray-700 dark:text-gray-200">
                    <svg className="w-5 h-5 mr-2 text-[#E9264A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Wireframing & Prototyping
                  </li>
                  <li className="flex items-center text-gray-700 dark:text-gray-200">
                    <svg className="w-5 h-5 mr-2 text-[#E9264A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Design Systems
                  </li>
                </ul>
              </div>

              {/* Brand Strategy */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Brand Strategy
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Craft compelling brand narratives that resonate with your audience and stand out in today's digital landscape.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-700 dark:text-gray-200">
                    <svg className="w-5 h-5 mr-2 text-[#E9264A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Brand Identity Design
                  </li>
                  <li className="flex items-center text-gray-700 dark:text-gray-200">
                    <svg className="w-5 h-5 mr-2 text-[#E9264A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Visual Guidelines
                  </li>
                  <li className="flex items-center text-gray-700 dark:text-gray-200">
                    <svg className="w-5 h-5 mr-2 text-[#E9264A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Brand Voice & Messaging
                  </li>
                </ul>
              </div>

              {/* Content Marketing */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Content Marketing
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Create strategic content that engages your audience, drives organic traffic, and converts visitors into customers.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-700 dark:text-gray-200">
                    <svg className="w-5 h-5 mr-2 text-[#E9264A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    SEO Optimization
                  </li>
                  <li className="flex items-center text-gray-700 dark:text-gray-200">
                    <svg className="w-5 h-5 mr-2 text-[#E9264A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Content Strategy
                  </li>
                  <li className="flex items-center text-gray-700 dark:text-gray-200">
                    <svg className="w-5 h-5 mr-2 text-[#E9264A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Performance Analytics
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Get in Touch</h2>
            <p className="text-gray-600 dark:text-gray-300 text-center mb-12">
              Have a project in mind? Let's work together to create something amazing.
            </p>
            <div className="text-center">
              <Button
                href="mailto:your.email@example.com"
                size="lg"
              >
                Send me an email
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
