import Link from 'next/link';

export interface BlogPost {
  title: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  link: string;
}

const getCategoryColor = (category: string): string => {
  const colors: { [key: string]: string } = {
    'UI/UX Design': 'bg-brand-100 dark:bg-brand-900/30 text-brand-600 dark:text-brand-400',
    'Branding': 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400',
    'Content': 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400',
    'SEO': 'bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400',
    'Art Direction': 'bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400',
    'Development': 'bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400'
  };
  return colors[category] || 'bg-gray-100 dark:bg-gray-900/30 text-gray-600 dark:text-gray-400';
};

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link 
      href={post.link}
      className="group bg-white dark:bg-gray-900 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 hover:shadow-lg transition-all duration-300 block"
    >
      <div className="relative aspect-video overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-100 to-white dark:from-gray-800 dark:to-gray-900">
          <div className="absolute inset-0 bg-[#E9264A]/5 transform group-hover:scale-105 transition-transform duration-500"></div>
        </div>
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 text-sm font-medium rounded-full ${getCategoryColor(post.category)}`}>
            {post.category}
          </span>
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center gap-4 mb-4 text-sm text-gray-600 dark:text-gray-400">
          <span>{post.date}</span>
          <span>•</span>
          <span>{post.readTime}</span>
        </div>
        <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white group-hover:text-[#E9264A] transition-colors">
          {post.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400">
          {post.excerpt}
        </p>
      </div>
    </Link>
  );
}
