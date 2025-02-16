export default function Blog() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      <div className="grid md:grid-cols-2 gap-8">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <article key={i} className="border dark:border-gray-700 rounded-lg overflow-hidden">
            <div className="h-48 bg-gray-200 dark:bg-gray-700 relative">
              {/* Placeholder for blog post image */}
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2">Blog Post Title {i}</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                A comprehensive exploration of industry trends, insights, and innovative solutions...
              </p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">Feb 16, 2025</span>
                <a href={`/blog/${i}`} className="text-blue-600 hover:underline">
                  Read More
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
