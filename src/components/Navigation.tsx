'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { usePathname } from 'next/navigation';
import { SunIcon, MoonIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const [mounted, setMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();

  const isActive = (path: string) => {
    if (path === '/' && pathname === '/') return true;
    if (path !== '/' && pathname.startsWith(path)) return true;
    return false;
  };

  const linkStyles = (path: string) => {
    const baseStyles = "text-sm font-medium transition-colors duration-200";
    const activeStyles = "text-brand font-semibold";
    const inactiveStyles = "text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-dark-100";
    return `${baseStyles} ${isActive(path) ? activeStyles : inactiveStyles}`;
  };

  const mobileLinkStyles = (path: string) => {
    const baseStyles = "block py-2 text-base font-medium transition-colors duration-200";
    const activeStyles = "text-brand font-semibold";
    const inactiveStyles = "text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-dark-100";
    return `${baseStyles} ${isActive(path) ? activeStyles : inactiveStyles}`;
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 h-16 bg-light/80 dark:bg-gray-900/80 backdrop-blur">
      <div className="max-w-[1440px] h-full mx-auto px-4">
        <div className="flex h-full items-center justify-between">
          {/* Logo - Left */}
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-gray-900 dark:text-dark-100">
              Lloyd Pilapil
            </Link>
          </div>

          {/* Desktop Menu - Center */}
          <div className="hidden md:flex flex-1 justify-center">
            <ul className="flex items-center gap-8">
              <li>
                <Link href="/" className={linkStyles('/')}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className={linkStyles('/case-studies')}>
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/blog" className={linkStyles('/blog')}>
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/about" className={linkStyles('/about')}>
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Theme Toggle and Contact - Right */}
          <div className="flex items-center gap-4">
            {mounted && (
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors"
              >
                {theme === 'dark' ? (
                  <SunIcon className="h-5 w-5 text-gray-600 dark:text-gray-300" />
                ) : (
                  <MoonIcon className="h-5 w-5 text-gray-600" />
                )}
              </button>
            )}
            <div className="hidden md:block">
              <Button 
                asChild 
                variant="default" 
                size="sm" 
                className="bg-brand hover:bg-brand/90 text-dark-100 transition-colors"
              >
                <Link href="/contact">
                  Get in Touch
                </Link>
              </Button>
            </div>
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-16 bg-light dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
          <div className="p-4">
            <ul className="flex flex-col space-y-4">
              <li>
                <Link 
                  href="/" 
                  className={mobileLinkStyles('/')}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  href="/case-studies" 
                  className={mobileLinkStyles('/case-studies')}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Case Studies
                </Link>
              </li>
              <li>
                <Link 
                  href="/blog" 
                  className={mobileLinkStyles('/blog')}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link 
                  href="/about" 
                  className={mobileLinkStyles('/about')}
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </Link>
              </li>
              <li className="pt-2">
                <Button 
                  asChild 
                  variant="default" 
                  size="sm" 
                  className="w-full bg-brand hover:bg-brand/90 text-dark-100 transition-colors"
                >
                  <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                    Get in Touch
                  </Link>
                </Button>
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
}
