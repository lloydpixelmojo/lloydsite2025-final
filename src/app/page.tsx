'use client';

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AssessmentButton } from "@/components/AssessmentButton";
import { AssessmentPanel } from "@/components/AssessmentPanel";

export default function Home() {
  const [isAssessmentOpen, setIsAssessmentOpen] = useState(false);

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
        <section className="py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Featured Case Studies</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Explore some of our most impactful projects and the results we've achieved for our clients.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Case Study 1 */}
            <div className="group relative overflow-hidden rounded-2xl">
              <div className="relative w-full pb-[56.25%] bg-gray-100 dark:bg-gray-800">
                {/* Replace with actual image */}
                <div className="absolute inset-0 bg-blue-100 dark:bg-blue-900/30"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">E-Commerce Redesign</h3>
                <p className="text-gray-600 dark:text-gray-300">Increased conversion rates by 150% through UX improvements.</p>
                <Link href="/case-studies/ecommerce" className="mt-4 inline-flex items-center text-blue-600 hover:text-blue-700">
                  View Case Study →
                </Link>
              </div>
            </div>
            {/* Case Study 2 */}
            <div className="group relative overflow-hidden rounded-2xl">
              <div className="relative w-full pb-[56.25%] bg-gray-100 dark:bg-gray-800">
                {/* Replace with actual image */}
                <div className="absolute inset-0 bg-blue-100 dark:bg-blue-900/30"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">SaaS Platform</h3>
                <p className="text-gray-600 dark:text-gray-300">Built a scalable design system that reduced development time.</p>
                <Link href="/case-studies/saas" className="mt-4 inline-flex items-center text-blue-600 hover:text-blue-700">
                  View Case Study →
                </Link>
              </div>
            </div>
            {/* Case Study 3 */}
            <div className="group relative overflow-hidden rounded-2xl">
              <div className="relative w-full pb-[56.25%] bg-gray-100 dark:bg-gray-800">
                {/* Replace with actual image */}
                <div className="absolute inset-0 bg-blue-100 dark:bg-blue-900/30"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Mobile App</h3>
                <p className="text-gray-600 dark:text-gray-300">Created an intuitive mobile experience with 98% user satisfaction.</p>
                <Link href="/case-studies/mobile-app" className="mt-4 inline-flex items-center text-blue-600 hover:text-blue-700">
                  View Case Study →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="bg-gradient-to-b from-blue-50 to-white dark:from-gray-950 dark:to-gray-900 py-20 rounded-2xl mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Transform Your Digital Presence</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              We blend creativity with strategy to deliver exceptional digital experiences that drive real business results.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
            {/* UI/UX Card */}
            <div className="group bg-white dark:bg-gray-900 p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden border border-gray-100 dark:border-gray-800">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 dark:bg-blue-950 rounded-bl-[100px] -mr-8 -mt-8"></div>
              <div className="relative">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-950 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">UI/UX Excellence</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Transform user experiences through research-driven design, seamless interactions, and pixel-perfect interfaces.
                </p>
                <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    User Research & Testing
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Wireframing & Prototyping
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Design Systems
                  </li>
                </ul>
              </div>
            </div>

            {/* Branding Card */}
            <div className="group bg-white dark:bg-gray-900 p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden border border-gray-100 dark:border-gray-800">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 dark:bg-blue-950 rounded-bl-[100px] -mr-8 -mt-8"></div>
              <div className="relative">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-950 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Brand Strategy</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Craft compelling brand narratives that resonate with your audience and stand out in today's digital landscape.
                </p>
                <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Brand Identity Design
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Visual Guidelines
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Brand Voice & Messaging
                  </li>
                </ul>
              </div>
            </div>

            {/* Content Card */}
            <div className="group bg-white dark:bg-gray-900 p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden border border-gray-100 dark:border-gray-800">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 dark:bg-blue-950 rounded-bl-[100px] -mr-8 -mt-8"></div>
              <div className="relative">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-950 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Content Marketing</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Create strategic content that engages your audience, drives organic traffic, and converts visitors into customers.
                </p>
                <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    SEO Optimization
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Content Strategy
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Performance Analytics
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Content */}
        <section className="py-16 mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Featured Content</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Explore our latest insights and thoughts on design, development, and digital strategy.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Blog Post 1 */}
            <article className="group">
              <div className="relative w-full pb-[56.25%] mb-4 bg-gray-100 dark:bg-gray-800 rounded-xl overflow-hidden">
                {/* Replace with actual image */}
                <div className="absolute inset-0 bg-blue-100 dark:bg-blue-900/30"></div>
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600">
                <Link href="/blog/post-1">The Future of Web Design</Link>
              </h3>
              <p className="text-gray-600 dark:text-gray-300">Exploring upcoming trends and technologies shaping the web.</p>
            </article>
            {/* Blog Post 2 */}
            <article className="group">
              <div className="relative w-full pb-[56.25%] mb-4 bg-gray-100 dark:bg-gray-800 rounded-xl overflow-hidden">
                {/* Replace with actual image */}
                <div className="absolute inset-0 bg-blue-100 dark:bg-blue-900/30"></div>
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600">
                <Link href="/blog/post-2">Building Design Systems</Link>
              </h3>
              <p className="text-gray-600 dark:text-gray-300">A comprehensive guide to creating scalable design systems.</p>
            </article>
            {/* Blog Post 3 */}
            <article className="group">
              <div className="relative w-full pb-[56.25%] mb-4 bg-gray-100 dark:bg-gray-800 rounded-xl overflow-hidden">
                {/* Replace with actual image */}
                <div className="absolute inset-0 bg-blue-100 dark:bg-blue-900/30"></div>
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600">
                <Link href="/blog/post-3">UX Research Methods</Link>
              </h3>
              <p className="text-gray-600 dark:text-gray-300">Essential research methods for better user experiences.</p>
            </article>
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
              <a
                href="mailto:your.email@example.com"
                className="inline-flex items-center rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-700"
              >
                Send me an email
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
