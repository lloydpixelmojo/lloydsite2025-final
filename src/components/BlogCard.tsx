import Link from 'next/link';

export interface BlogPost {
  id: string;
  title: string;
  description: string;
  category: string;
  publishedAt: string;
  readingTime: string;
  slug: string;
}

const getCategoryColor = (category: string): string => {
  const colors: { [key: string]: string } = {
    'UI/UX Design': 'bg-brand-100 dark:bg-brand-900/30 text-brand-600 dark:text-brand-400',
    'Branding': 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400',
    'Content': 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400',
    'SEO': 'bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400',
  };
  return colors[category] || 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400';
};

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link 
      href={`/blog/${post.slug}`}
      className="group block"
    >
      <div className="overflow-hidden rounded-xl bg-gray-50 dark:bg-gray-800/50">
        <div className="aspect-video bg-gray-200 dark:bg-gray-700" />
        <div className="p-6">
          <div className="flex flex-wrap gap-2 mb-4">
            <span className={`px-3 py-1 text-sm rounded-full ${getCategoryColor(post.category)}`}>
              {post.category}
            </span>
            <span className="px-3 py-1 text-sm rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400">
              {post.readingTime}
            </span>
          </div>
          <h3 className="text-xl font-semibold mb-2 group-hover:text-brand dark:group-hover:text-brand-400 transition-colors">
            {post.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            {post.description}
          </p>
        </div>
      </div>
    </Link>
  );
}
