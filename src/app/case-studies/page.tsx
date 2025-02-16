export default function CaseStudies() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Case Studies</h1>
      <div className="grid md:grid-cols-2 gap-8">
        {[1, 2, 3, 4].map((i) => (
          <article key={i} className="border dark:border-gray-700 rounded-lg overflow-hidden">
            <div className="h-64 bg-gray-200 dark:bg-gray-700 relative">
              {/* Placeholder for case study image */}
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2">Case Study {i}</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Discover how we helped our client transform their business and achieve exceptional results...
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Strategy</span>
                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Innovation</span>
                <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">Growth</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">Client: Company {i}</span>
                <a href={`/case-studies/${i}`} className="text-blue-600 hover:underline">
                  View Case Study
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
