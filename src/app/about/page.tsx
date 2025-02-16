export default function About() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">About</h1>
        
        <div className="mb-12">
          <div className="w-48 h-48 rounded-full bg-gray-200 dark:bg-gray-700 mx-auto mb-8">
            {/* Placeholder for profile image */}
          </div>
          
          <h2 className="text-2xl font-bold text-center mb-4">Lloyd Pilapil</h2>
          <p className="text-center text-gray-600 dark:text-gray-300 mb-8">
            Thought Leader | Innovation Strategist | Industry Expert
          </p>
        </div>

        <div className="prose dark:prose-invert max-w-none">
          <p className="mb-6">
            With over a decade of experience in driving innovation and digital transformation,
            I help organizations navigate the complexities of modern business landscapes and
            emerge stronger, more adaptable, and ready for future challenges.
          </p>

          <h3 className="text-xl font-bold mb-4">Expertise</h3>
          <ul className="list-disc pl-6 mb-6">
            <li>Digital Transformation Strategy</li>
            <li>Innovation Management</li>
            <li>Technology Leadership</li>
            <li>Business Process Optimization</li>
            <li>Change Management</li>
          </ul>

          <h3 className="text-xl font-bold mb-4">Professional Background</h3>
          <p className="mb-6">
            Throughout my career, I have worked with Fortune 500 companies, startups, and
            everything in between. My approach combines deep technical knowledge with
            strategic business acumen to deliver transformative results.
          </p>

          <h3 className="text-xl font-bold mb-4">Speaking Engagements</h3>
          <p className="mb-6">
            I regularly speak at industry conferences and corporate events on topics
            including digital transformation, innovation strategy, and leadership in the
            digital age. If you&apos;re interested in having me speak at your event, please
            get in touch.
          </p>

          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg mb-8">
            <h3 className="text-xl font-bold mb-4">Let&apos;s Connect</h3>
            <p className="mb-4">
              I&apos;m always excited to connect with fellow professionals and discuss how we
              can drive innovation and growth in your organization.
            </p>
            <a
              href="/get-started"
              className="inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
