import Link from 'next/link';

interface CaseStudy {
  title: string;
  description: string;
  image: string;
  category: string;
  metrics: {
    label: string;
    value: string;
  }[];
  href: string;
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

export default function CaseStudyCard({ title, description, image, category, metrics, href }: CaseStudy) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-gray-100 dark:border-gray-800 hover:border-brand dark:hover:border-brand transition-colors">
      <Link href={href} className="block">
        <div className="aspect-[16/9] relative bg-gray-100 dark:bg-gray-800">
          <div className="absolute inset-0 flex items-center justify-center text-gray-400 dark:text-gray-600">
            <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
        </div>
        <div className="p-6">
          <div className="flex items-center gap-4 text-sm mb-3">
            <span className="inline-block px-3 py-1 bg-brand/10 text-brand rounded-full">
              {category}
            </span>
          </div>
          <h3 className="text-xl font-semibold mb-2 group-hover:text-brand transition-colors">{title}</h3>
          <p className="text-gray-500 dark:text-gray-400 line-clamp-2 mb-4">{description}</p>
          {metrics && metrics.length > 0 && (
            <div className="flex gap-4 pt-4 border-t border-gray-100 dark:border-gray-800">
              {metrics.map((metric, index) => (
                <div key={index}>
                  <div className="text-lg font-bold text-brand">{metric.value}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">{metric.label}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </Link>
    </div>
  );
}
