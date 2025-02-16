'use client';

import React from 'react';
import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 h-16 bg-white/80 backdrop-blur">
      <div className="max-w-[1440px] h-full mx-auto px-4">
        <div className="flex h-full items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/" className="text-xl font-bold text-gray-900">
              Lloyd's Portfolio
            </Link>
          </div>

          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <ul className="flex items-center gap-8">
              <li>
                <Link href="/case-studies" className="text-sm font-medium text-gray-600 hover:text-gray-900">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm font-medium text-gray-600 hover:text-gray-900">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm font-medium text-gray-600 hover:text-gray-900">
                  About
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="/#contact"
              className="hidden md:inline-flex items-center justify-center px-6 py-2.5 text-gray-900 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
