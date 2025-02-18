import Link from 'next/link';

interface BlogPost {
  title: string;
  excerpt: string;
  image: string;
  category: string;
  date: string;
  readTime: string;
  href: string;
}

export default function BlogCard({ title, excerpt, image, category, date, readTime, href }: BlogPost) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-gray-100 dark:border-gray-800 hover:border-brand dark:hover:border-brand transition-colors">
      <Link href={href} className="block">
        <div className="aspect-[16/9] relative bg-gray-100 dark:bg-gray-800">
          <div className="absolute inset-0 flex items-center justify-center text-gray-400 dark:text-dark-400">
            <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
        </div>
        <div className="p-6">
          <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-dark-400 mb-3">
            <span className="inline-block px-3 py-1 bg-brand/10 text-brand rounded-full">
              {category}
            </span>
            <span>{date}</span>
            <span>{readTime}</span>
          </div>
          <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-dark-100 group-hover:text-brand transition-colors">{title}</h3>
          <p className="text-gray-500 dark:text-dark-300 line-clamp-2">{excerpt}</p>
        </div>
      </Link>
    </div>
  );
}
