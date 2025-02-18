import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/Button';

export default function About() {
  const philosophies = [
    {
      title: "Design Thinking Leadership",
      description: "Pioneering innovative approaches that bridge user needs with business objectives",
      icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
      metric: "250+",
      metricLabel: "Design Systems Created"
    },
    {
      title: "Strategic Innovation",
      description: "Transforming complex challenges into elegant, scalable solutions",
      icon: "M13 10V3L4 14h7v7l9-11h-7z",
      metric: "45%",
      metricLabel: "Avg. Conversion Lift"
    },
    {
      title: "Digital Transformation",
      description: "Guiding organizations through meaningful digital evolution",
      icon: "M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4",
      metric: "100+",
      metricLabel: "Enterprise Clients"
    }
  ];

  const expertise = [
    {
      title: "Design Leadership",
      description: "Shaping the future of digital experiences through strategic design thinking and innovation.",
      areas: [
        "Design System Architecture",
        "UX Strategy & Vision",
        "Team Leadership",
        "Innovation Frameworks"
      ],
      icon: (
        <svg className="w-8 h-8 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
        </svg>
      )
    },
    {
      title: "Digital Strategy",
      description: "Crafting transformative digital strategies that drive growth and create lasting impact.",
      areas: [
        "Digital Transformation",
        "Growth Strategy",
        "Innovation Planning",
        "Market Positioning"
      ],
      icon: (
        <svg className="w-8 h-8 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
        </svg>
      )
    },
    {
      title: "Thought Leadership",
      description: "Sharing insights and perspectives that shape the future of digital design and innovation.",
      areas: [
        "Industry Publications",
        "Conference Speaking",
        "Design Education",
        "Mentorship Programs"
      ],
      icon: (
        <svg className="w-8 h-8 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-light dark:bg-gray-900">
      <main className="max-w-[1440px] mx-auto">
        {/* Hero Section */}
        <section className="relative py-20 md:py-28 px-4">
          <div className="max-w-5xl mx-auto text-center space-y-8">
            <h1 className="text-[52px] font-bold tracking-tighter sm:text-[64px] md:text-[72px] lg:text-[86px] max-w-[1200px] mx-auto leading-[1.1] text-gray-900 dark:text-dark-100">
              Shaping the Future of<br />
              Digital Design
            </h1>
            <p className="text-lg text-gray-600 dark:text-dark-300 max-w-2xl mx-auto">
              Pioneering innovative approaches in design leadership and digital transformation. 
              Sharing insights that drive industry evolution and inspire the next generation of designers.
            </p>
          </div>

          {/* Philosophy Cards */}
          <div className="mt-16 md:mt-20 grid sm:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto px-4">
            {philosophies.map((item, index) => (
              <div key={index} 
                className="group p-8 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-brand dark:hover:border-brand transition-all duration-200 hover:shadow-lg bg-light dark:bg-gray-900"
              >
                <div className="w-12 h-12 rounded-full bg-brand/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200">
                  <svg className="w-6 h-6 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                  </svg>
                </div>
                <div className="text-2xl font-bold text-brand mb-1">{item.metric}</div>
                <div className="text-sm text-gray-500 dark:text-dark-400 mb-4">{item.metricLabel}</div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-dark-100">{item.title}</h3>
                <p className="text-gray-600 dark:text-dark-300">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Expertise Section */}
        <section className="py-20 bg-gray-50 dark:bg-gray-800/50">
          <div className="max-w-[1440px] mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="text-brand font-semibold tracking-wide uppercase text-sm">Expertise</span>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mt-4 mb-4 text-gray-900 dark:text-dark-100">
                Areas of Impact
              </h2>
              <p className="text-xl text-gray-600 dark:text-dark-300">
                Leading innovation and transformation in digital design and strategy
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {expertise.map((item, index) => (
                <div key={index} 
                  className="group p-8 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-brand dark:hover:border-brand transition-all duration-200 bg-light dark:bg-gray-900"
                >
                  <div className="mb-6">{item.icon}</div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-dark-100">{item.title}</h3>
                  <p className="text-gray-600 dark:text-dark-300 mb-6">{item.description}</p>
                  <ul className="space-y-3">
                    {item.areas.map((area, i) => (
                      <li key={i} className="flex items-center text-gray-600 dark:text-dark-300">
                        <svg className="w-5 h-5 text-brand mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {area}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
