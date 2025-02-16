'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { MoonIcon, SunIcon } from '@heroicons/react/24/outline';

export default function Navigation() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <nav className="fixed inset-x-0 top-0 z-50 h-16 bg-white/80 dark:bg-gray-900/80 backdrop-blur">
      <div className="max-w-[1440px] h-full mx-auto px-4">
        <div className="flex h-full items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/" className="text-xl font-bold text-gray-900 dark:text-white">
              Lloyd's Portfolio
            </Link>
          </div>

          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <ul className="flex items-center gap-8">
              <li>
                <Link href="/case-studies" className="text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
                  About
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="rounded-lg p-2 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
            >
              {theme === 'dark' ? (
                <SunIcon className="h-5 w-5" />
              ) : (
                <MoonIcon className="h-5 w-5" />
              )}
            </button>
            <Link
              href="/#contact"
              className="hidden md:inline-flex items-center justify-center px-6 py-2.5 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
