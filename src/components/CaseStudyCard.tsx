import Link from 'next/link';

export interface CaseStudy {
  id: string;
  title: string;
  description: string;
  category: string;
  duration: string;
  imageUrl: string;
  slug: string;
}

const getCategoryColor = (category: string): string => {
  const colors: { [key: string]: string } = {
    'E-commerce': 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400',
    'SaaS': 'bg-brand-100 dark:bg-brand-900/30 text-brand-600 dark:text-brand-400',
    'Mobile': 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400',
    'Healthcare': 'bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400',
    'EdTech': 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400',
  };
  return colors[category] || 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400';
};

export default function CaseStudyCard({ caseStudy }: { caseStudy: CaseStudy }) {
  return (
    <Link 
      href={`/case-studies/${caseStudy.slug}`}
      className="group block"
    >
      <div className="overflow-hidden rounded-xl bg-gray-50 dark:bg-gray-800/50">
        <div className="aspect-video bg-gray-200 dark:bg-gray-700" />
        <div className="p-6">
          <div className="flex flex-wrap gap-2 mb-4">
            <span className={`px-3 py-1 text-sm rounded-full ${getCategoryColor(caseStudy.category)}`}>
              {caseStudy.category}
            </span>
            <span className="px-3 py-1 text-sm rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400">
              {caseStudy.duration}
            </span>
          </div>
          <h3 className="text-xl font-semibold mb-2 group-hover:text-brand dark:group-hover:text-brand-400 transition-colors">
            {caseStudy.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            {caseStudy.description}
          </p>
        </div>
      </div>
    </Link>
  );
}
