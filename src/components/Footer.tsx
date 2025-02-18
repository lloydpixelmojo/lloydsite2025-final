'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setStatus('success');
      setEmail('');
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <footer className="w-full bg-light dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-[1440px] mx-auto px-4 py-12 md:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Lead Form */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-dark-100">
              Stay Updated
            </h3>
            <p className="text-gray-600 dark:text-dark-300 mb-4">
              Get the latest insights on design leadership and digital innovation.
            </p>
            <form onSubmit={handleSubmit} className="flex gap-2 max-w-md">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-800 bg-light dark:bg-gray-900 text-gray-900 dark:text-dark-100 placeholder:text-gray-500 dark:placeholder:text-dark-400 focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent"
              />
              <Button 
                type="submit"
                disabled={status === 'loading'}
              >
                {status === 'loading' ? 'Sending...' : 'Subscribe'}
              </Button>
            </form>
            {status === 'success' && (
              <p className="mt-2 text-green-600 dark:text-green-400">Thanks for subscribing!</p>
            )}
            {status === 'error' && (
              <p className="mt-2 text-red-600 dark:text-red-400">Something went wrong. Please try again.</p>
            )}
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-gray-900 dark:text-dark-100">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-600 dark:text-dark-300 hover:text-brand dark:hover:text-brand">
                  About
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-600 dark:text-dark-300 hover:text-brand dark:hover:text-brand">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-gray-600 dark:text-dark-300 hover:text-brand dark:hover:text-brand">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 dark:text-dark-300 hover:text-brand dark:hover:text-brand">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold mb-4 text-gray-900 dark:text-dark-100">Connect</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-600 dark:text-dark-300 hover:text-brand dark:hover:text-brand"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-dark-300 hover:text-brand dark:hover:text-brand"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-dark-300 hover:text-brand dark:hover:text-brand"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
          <p className="text-gray-500 dark:text-dark-400 text-sm">
            &copy; {new Date().getFullYear()} Lloyd Pilapil. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
