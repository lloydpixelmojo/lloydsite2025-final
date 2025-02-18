'use client';

import { useState } from 'react';
import { Button } from "@/components/ui/button";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <main className="min-h-screen bg-light dark:bg-gray-900 pt-24">
      <div className="max-w-[1440px] mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-dark-100 mb-4">
              Let's Connect
            </h1>
            <p className="text-lg text-gray-600 dark:text-dark-300">
              Have a project in mind or want to discuss design opportunities? I'd love to hear from you.
            </p>
          </div>

          {/* Contact Options */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-800">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-dark-100 mb-2">
                Direct Contact
              </h2>
              <p className="text-gray-600 dark:text-dark-300 mb-4">
                Prefer to email directly? Reach out at:
              </p>
              <a 
                href="mailto:your.email@example.com" 
                className="text-brand hover:text-brand/90 font-medium"
              >
                your.email@example.com
              </a>
            </div>
            <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-800">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-dark-100 mb-2">
                Social Media
              </h2>
              <p className="text-gray-600 dark:text-dark-300 mb-4">
                Connect with me on:
              </p>
              <div className="space-y-2">
                <a 
                  href="https://linkedin.com/in/yourprofile" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block text-brand hover:text-brand/90 font-medium"
                >
                  LinkedIn
                </a>
                <a 
                  href="https://twitter.com/yourhandle" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block text-brand hover:text-brand/90 font-medium"
                >
                  Twitter
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6 mb-12">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-dark-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-dark-100 focus:ring-2 focus:ring-brand focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-dark-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-dark-100 focus:ring-2 focus:ring-brand focus:border-transparent"
                  required
                />
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-dark-300 mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-dark-100 focus:ring-2 focus:ring-brand focus:border-transparent"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-dark-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-dark-100 focus:ring-2 focus:ring-brand focus:border-transparent"
                required
              />
            </div>
            <Button 
              type="submit"
              className="w-full bg-brand hover:bg-brand/90 text-white transition-colors"
            >
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </main>
  );
}
