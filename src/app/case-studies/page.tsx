import CaseStudyCard, { CaseStudy } from '@/components/CaseStudyCard';

export default function CaseStudies() {
  const studies: CaseStudy[] = [
    {
      title: "E-Commerce Redesign",
      description: "Increased conversion rates by 150% through UX improvements and mobile-first design.",
      image: "/images/case-studies/ecommerce.jpg",
      category: "E-commerce",
      metrics: [
        { label: "Conversion Rate", value: "+150%" },
        { label: "Mobile Traffic", value: "+80%" }
      ],
      href: "/case-studies/ecommerce"
    },
    {
      title: "SaaS Platform",
      description: "Built a scalable design system that reduced development time and improved consistency.",
      image: "/images/case-studies/saas.jpg",
      category: "SaaS",
      metrics: [
        { label: "Development Time", value: "-40%" },
        { label: "Code Reuse", value: "+65%" }
      ],
      href: "/case-studies/saas"
    },
    {
      title: "Mobile App",
      description: "Created an intuitive mobile experience with 98% user satisfaction and increased engagement.",
      image: "/images/case-studies/mobile-app.jpg",
      category: "Mobile",
      metrics: [
        { label: "User Satisfaction", value: "98%" },
        { label: "Daily Active Users", value: "50K+" }
      ],
      href: "/case-studies/mobile-app"
    },
    {
      title: "Healthcare Dashboard",
      description: "Developed an intuitive analytics dashboard that improved decision-making efficiency by 40%.",
      image: "/images/case-studies/healthcare.jpg",
      category: "Healthcare",
      metrics: [
        { label: "Efficiency", value: "+40%" },
        { label: "Data Processing", value: "2x Faster" }
      ],
      href: "/case-studies/healthcare"
    },
    {
      title: "Educational Platform",
      description: "Created an engaging learning platform that increased student engagement by 75%.",
      image: "/images/case-studies/education.jpg",
      category: "EdTech",
      metrics: [
        { label: "Student Engagement", value: "+75%" },
        { label: "Course Completion", value: "+60%" }
      ],
      href: "/case-studies/education"
    },
    {
      title: "Financial App",
      description: "Designed a secure and user-friendly financial management app with 99.9% uptime.",
      image: "/images/case-studies/fintech.jpg",
      category: "FinTech",
      metrics: [
        { label: "System Uptime", value: "99.9%" },
        { label: "Transaction Speed", value: "<100ms" }
      ],
      href: "/case-studies/fintech"
    }
  ];

  return (
    <div className="min-h-screen bg-light dark:bg-gray-900">
      <main className="max-w-[1440px] mx-auto py-20 md:py-28 px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-dark-100 mb-4">
            Featured Case Studies
          </h1>
          <p className="text-lg text-gray-600 dark:text-dark-300 max-w-2xl mx-auto">
            Explore our portfolio of successful projects and the impact we've made for our clients.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {studies.map((study, index) => (
            <CaseStudyCard key={index} {...study} />
          ))}
        </div>
      </main>
    </div>
  );
}
