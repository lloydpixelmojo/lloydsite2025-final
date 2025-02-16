import Link from 'next/link';
import CaseStudyCard, { CaseStudy } from '@/components/CaseStudyCard';

export default function CaseStudies() {
  const studies: CaseStudy[] = [
    {
      title: "E-Commerce Redesign",
      category: "E-commerce",
      description: "Increased conversion rates by 150% through UX improvements and mobile-first design.",
      client: "StyleSpace",
      year: "2024",
      link: "/case-studies/ecommerce",
      stats: ["150%", "Conversion Rate", "Increase"]
    },
    {
      title: "SaaS Platform",
      category: "SaaS",
      description: "Built a scalable design system that reduced development time and improved consistency.",
      client: "CloudFlow",
      year: "2024",
      link: "/case-studies/saas",
      stats: ["40%", "Development Time", "Reduction"]
    },
    {
      title: "Mobile App",
      category: "Mobile",
      description: "Created an intuitive mobile experience with 98% user satisfaction and increased engagement.",
      client: "FitTrack",
      year: "2023",
      link: "/case-studies/mobile-app",
      stats: ["98%", "User", "Satisfaction"]
    },
    {
      title: "Healthcare Dashboard",
      category: "Healthcare",
      description: "Developed an intuitive analytics dashboard that improved decision-making efficiency by 40%.",
      client: "MedTech Solutions",
      year: "2023",
      link: "/case-studies/healthcare",
      stats: ["40%", "Efficiency", "Improvement"]
    },
    {
      title: "Educational Platform",
      category: "EdTech",
      description: "Created an engaging learning platform that increased student engagement by 75%.",
      client: "EduLearn",
      year: "2023",
      link: "/case-studies/education",
      stats: ["75%", "Student", "Engagement"]
    },
    {
      title: "Financial App",
      category: "FinTech",
      description: "Designed a secure and user-friendly financial management app with 99.9% uptime.",
      client: "FinanceFlow",
      year: "2023",
      link: "/case-studies/fintech",
      stats: ["99.9%", "System", "Uptime"]
    }
  ];

  return (
    <main className="pt-24">
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-[1440px] mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block text-[#E9264A] text-sm font-medium tracking-wider uppercase mb-4">Portfolio</span>
            <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">Case Studies</h1>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Explore our portfolio of successful projects and the impact we've made for our clients.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {studies.map((study, index) => (
              <CaseStudyCard key={index} study={study} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
