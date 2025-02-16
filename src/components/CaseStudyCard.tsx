import Link from 'next/link';

export interface CaseStudy {
  title: string;
  category: string;
  description: string;
  client: string;
  year: string;
  link: string;
  stats: [string, string, string]; // [value, label, sublabel]
}

const getCategoryColor = (category: string): string => {
  const colors: { [key: string]: string } = {
    'E-commerce': 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400',
    'SaaS': 'bg-brand-100 dark:bg-brand-900/30 text-brand-600 dark:text-brand-400',
    'Mobile': 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400',
    'Healthcare': 'bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400',
    'EdTech': 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400',
    'FinTech': 'bg-cyan-100 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-400'
  };
  return colors[category] || 'bg-gray-100 dark:bg-gray-900/30 text-gray-600 dark:text-gray-400';
};

export default function CaseStudyCard({ study }: { study: CaseStudy }) {
  return (
    <Link 
      href={study.link}
      className="group bg-white dark:bg-gray-900 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 hover:shadow-lg transition-all duration-300 block"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-100 to-white dark:from-gray-800 dark:to-gray-900">
          <div className="absolute inset-0 bg-[#E9264A]/5 transform group-hover:scale-105 transition-transform duration-500"></div>
        </div>
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 text-sm font-medium rounded-full ${getCategoryColor(study.category)}`}>
            {study.category}
          </span>
        </div>
        <div className="absolute bottom-4 left-4 right-4">
          <div className="flex justify-between items-center">
            <div className="text-center">
              <div className="text-2xl font-bold text-[#E9264A]">{study.stats[0]}</div>
              <div className="text-xs text-gray-600 dark:text-gray-400">{study.stats[1]}</div>
              <div className="text-xs text-gray-600 dark:text-gray-400">{study.stats[2]}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="p-6">
        <div className="mb-4">
          <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white group-hover:text-[#E9264A] transition-colors">
            {study.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            {study.description}
          </p>
        </div>
        <div className="flex items-center gap-4">
          <div className="text-sm">
            <span className="text-gray-500 dark:text-gray-400">Client:</span>
            <span className="ml-1 font-medium text-gray-900 dark:text-white">{study.client}</span>
          </div>
          <div className="text-sm">
            <span className="text-gray-500 dark:text-gray-400">Year:</span>
            <span className="ml-1 font-medium text-gray-900 dark:text-white">{study.year}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
