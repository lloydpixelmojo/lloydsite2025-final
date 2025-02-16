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
      id: '1',
      title: 'E-commerce Platform Redesign',
      description: 'Complete redesign of a major e-commerce platform, focusing on user experience and conversion optimization.',
      category: 'E-commerce',
      duration: '3 months',
      imageUrl: '/images/case-studies/ecommerce.jpg',
      slug: 'ecommerce'
    },
    {
      id: '2',
      title: 'SaaS Brand Identity',
      description: 'Developing a cohesive brand identity and design system for a growing SaaS company.',
      category: 'SaaS',
      duration: '2 months',
      imageUrl: '/images/case-studies/saas.jpg',
      slug: 'saas'
    },
    {
      id: '3',
      title: 'Healthcare App Design',
      description: 'User-centered design for a healthcare monitoring application, improving patient engagement.',
      category: 'Healthcare',
      duration: '4 months',
      imageUrl: '/images/case-studies/healthcare.jpg',
      slug: 'healthcare'
    }
  ];

  const featuredBlogPosts: BlogPost[] = [
    {
      id: '1',
      title: 'The Impact of Microinteractions on User Experience',
      description: 'How small interactions can make a big difference in your digital product.',
      category: 'UI/UX Design',
      publishedAt: 'Feb 15, 2024',
      readingTime: '5 min read',
      slug: 'microinteractions-impact'
    },
    {
      id: '2',
      title: 'Building a Strong Brand Identity',
      description: 'Essential steps to create a memorable and effective brand identity.',
      category: 'Branding',
      publishedAt: 'Feb 10, 2024',
      readingTime: '7 min read',
      slug: 'brand-identity'
    },
    {
      id: '3',
      title: 'Content Strategy for Growth',
      description: 'Developing a content strategy that drives engagement and conversions.',
      category: 'Content',
      publishedAt: 'Feb 5, 2024',
      readingTime: '6 min read',
      slug: 'content-strategy'
    }
  ];

  return (
    <div className="min-h-screen">
      <AssessmentPanel isOpen={isAssessmentOpen} setIsOpen={setIsAssessmentOpen} />
      <main className="max-w-[1440px] mx-auto px-4">
        {/* Hero Section */}
        <section className="h-[calc(100vh-5rem)] flex items-center justify-center">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-8">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl max-w-4xl">
                Creating Digital Experiences <br className="hidden sm:block" />
                That <span className="text-brand">Inspire Growth</span>
              </h1>
              <p className="text-gray-500 dark:text-gray-400 md:text-xl max-w-[42rem] mx-auto">
                I'm a UX Designer and Developer focused on creating intuitive, user-centered digital solutions that drive business growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 min-[400px]:flex-row">
                <Button href="/get-started">
                  Start Your Project
                </Button>
                <Button 
                  variant="outline"
                  onClick={() => setIsAssessmentOpen(true)}
                >
                  Free Assessment
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Case Studies */}
        <section className="py-16">
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
              {featuredCaseStudies.map((caseStudy) => (
                <CaseStudyCard key={caseStudy.id} caseStudy={caseStudy} />
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
              {featuredBlogPosts.map((post) => (
                <BlogCard key={post.id} post={post} />
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
                as="a"
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
