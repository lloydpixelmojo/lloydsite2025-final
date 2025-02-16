import Image from 'next/image'
import Link from 'next/link'

// This will later be fetched from Sanity
const caseStudy = {
  title: 'E-commerce Platform Redesign',
  client: 'StyleSpace',
  category: 'E-commerce',
  duration: '3 months',
  year: '2024',
  metrics: [
    { label: 'Conversion Rate', value: '+150%', description: 'Increase in checkout completion' },
    { label: 'Mobile Sales', value: '2.5x', description: 'Growth in mobile transactions' },
    { label: 'User Satisfaction', value: '95%', description: 'Post-redesign satisfaction score' }
  ],
  overview: 'A complete UX overhaul of an established e-commerce platform, focusing on mobile-first design and checkout optimization. The project aimed to reduce cart abandonment and improve the overall shopping experience.',
  challenge: 'StyleSpace was struggling with high cart abandonment rates and poor mobile conversion. Their existing platform was desktop-focused, making mobile shopping cumbersome and leading to lost sales.',
  sections: [
    {
      title: 'Research & Discovery',
      content: 'We conducted extensive user research including:\n- User interviews with 50+ customers\n- Heatmap analysis of existing site\n- Competitive analysis of 10 leading e-commerce platforms\n- Analytics deep-dive focusing on drop-off points',
    },
    {
      title: 'Solution & Implementation',
      content: 'Our solution focused on three key areas:\n1. Mobile-first redesign with intuitive navigation\n2. Streamlined checkout process reducing steps by 40%\n3. Enhanced product discovery with AI-powered recommendations',
    },
    {
      title: 'Results & Impact',
      content: 'The redesign led to significant improvements:\n- 150% increase in conversion rate\n- 250% growth in mobile sales\n- 45% reduction in cart abandonment\n- 95% customer satisfaction score',
    }
  ],
  testimonial: {
    quote: "The redesign transformed our online presence. The mobile-first approach and streamlined checkout process have significantly improved our conversion rates and customer satisfaction.",
    author: "Sarah Chen",
    role: "Head of Digital, StyleSpace"
  }
}

export default function CaseStudy() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-16">
      {/* Header */}
      <header className="mb-16">
        <div className="mb-6">
          <Link 
            href="/case-studies" 
            className="text-brand hover:text-brand-600 dark:text-brand-400 dark:hover:text-brand-300 inline-flex items-center"
          >
            <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
            Back to Case Studies
          </Link>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-6">{caseStudy.title}</h1>
        <div className="flex flex-wrap gap-4 text-sm mb-8">
          <div className="px-3 py-1 bg-brand-100 dark:bg-brand-900/30 rounded-full">
            <span className="text-brand-600 dark:text-brand-400">{caseStudy.category}</span>
          </div>
          <div className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full">
            <span className="text-gray-600 dark:text-gray-400">{caseStudy.duration}</span>
          </div>
          <div className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full">
            <span className="text-gray-600 dark:text-gray-400">{caseStudy.year}</span>
          </div>
        </div>
      </header>

      {/* Hero Image Placeholder */}
      <div className="w-full aspect-video bg-gray-200 dark:bg-gray-700 rounded-xl mb-16 animate-pulse" />

      {/* Metrics Grid */}
      <div className="grid md:grid-cols-3 gap-6 mb-16">
        {caseStudy.metrics.map((metric, index) => (
          <div key={index} className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-6">
            <div className="text-3xl font-bold text-brand dark:text-brand-400 mb-2">
              {metric.value}
            </div>
            <div className="font-medium mb-2">{metric.label}</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              {metric.description}
            </div>
          </div>
        ))}
      </div>

      {/* Overview */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-4">Overview</h2>
        <p className="text-gray-600 dark:text-gray-400 text-lg">
          {caseStudy.overview}
        </p>
      </section>

      {/* Challenge */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-4">The Challenge</h2>
        <p className="text-gray-600 dark:text-gray-400 text-lg">
          {caseStudy.challenge}
        </p>
      </section>

      {/* Process Sections */}
      {caseStudy.sections.map((section, index) => (
        <section key={index} className="mb-16">
          <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
          <div className="text-gray-600 dark:text-gray-400 text-lg whitespace-pre-line">
            {section.content}
          </div>
          
          {/* Process Image Placeholder */}
          <div className="w-full aspect-video bg-gray-200 dark:bg-gray-700 rounded-xl mt-8 animate-pulse" />
        </section>
      ))}

      {/* Testimonial */}
      <section className="mb-16 bg-gray-50 dark:bg-gray-800/50 rounded-xl p-8">
        <blockquote className="text-xl italic mb-4">
          "{caseStudy.testimonial.quote}"
        </blockquote>
        <div className="flex items-center">
          <div className="w-12 h-12 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse mr-4" />
          <div>
            <div className="font-medium">{caseStudy.testimonial.author}</div>
            <div className="text-gray-600 dark:text-gray-400">{caseStudy.testimonial.role}</div>
          </div>
        </div>
      </section>

      {/* Next Case Study */}
      <section className="border-t border-gray-200 dark:border-gray-700 pt-16">
        <div className="text-center">
          <div className="text-sm text-gray-600 dark:text-gray-400 mb-4">Next Case Study</div>
          <h3 className="text-2xl font-bold mb-6">SaaS Brand Identity</h3>
          <Link 
            href="/case-studies/saas" 
            className="inline-flex items-center text-brand hover:text-brand-600 dark:text-brand-400 dark:hover:text-brand-300 font-medium"
          >
            View case study
            <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </article>
  )
}
