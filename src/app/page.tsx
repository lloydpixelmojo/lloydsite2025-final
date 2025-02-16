'use client';

import Image from "next/image";
import Link from "next/link";
import AssessmentPanel from "@/components/AssessmentPanel";
import { useState } from 'react';

export default function Home() {
  const [showAssessment, setShowAssessment] = useState(false);

  return (
    <div className="min-h-screen">
      <main className="max-w-[1440px] mx-auto px-4">
        {/* Hero Section */}
        <section className="py-20 md:py-28">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent leading-[1.2] pb-1">
                Leading Thoughts,{' '}
                <span className="inline-block">Inspiring Change</span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                Discover insights that drive innovation and growth in the digital age. Join a community of forward-thinking leaders shaping the future.
              </p>
            </div>
            <div className="relative">
              {/* Add hero image or illustration here */}
            </div>
          </div>
        </section>

        {/* Assessment CTA Section */}
        <section className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 py-16 rounded-2xl mb-24">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">Get Your Free Digital Assessment</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Understand your digital presence and get actionable insights to improve your brand, UX, and content strategy.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto px-4">
            {/* UI/UX Card */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">UI/UX Analysis</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">Get insights on user experience and interface design.</p>
            </div>

            {/* Branding Card */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Brand Assessment</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">Evaluate your brand identity and positioning.</p>
            </div>

            {/* Content Card */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-emerald-600 dark:text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Content Strategy</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">Analyze your content and SEO performance.</p>
            </div>
          </div>
          
          <div className="flex justify-center mt-12">
            <button
              onClick={() => setShowAssessment(true)}
              className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors text-lg font-medium flex items-center gap-2"
            >
              Start Free Assessment
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </section>

        {/* Featured Insights */}
        <section className="mb-20">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">Featured Insights</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="group border dark:border-gray-700 rounded-xl overflow-hidden hover:shadow-lg transition-all">
                <div className="h-48 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 relative">
                  {/* Placeholder for featured image */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 group-hover:opacity-0 transition-opacity"></div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-xl mb-2 group-hover:text-blue-600 transition-colors">Featured Article Title {i}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    A brief description of the featured insight goes here...
                  </p>
                  <Link
                    href={`/blog/${i}`}
                    className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center group"
                  >
                    Read More
                    <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <AssessmentPanel 
        isOpen={showAssessment} 
        onClose={() => setShowAssessment(false)} 
      />
    </div>
  );
}
