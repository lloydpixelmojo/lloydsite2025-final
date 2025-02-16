import Image from 'next/image'
import Link from 'next/link'

// This will later be fetched from Sanity
const blogPost = {
  title: 'The Impact of Microinteractions on User Experience',
  publishedAt: '2024-02-16',
  readTime: '5 min read',
  category: 'UX Design',
  author: {
    name: 'Lloyd Pilapil',
    role: 'UX Designer & Developer',
    image: '/placeholder.jpg'
  },
  excerpt: `Discover how small interactions can make a big difference in your digital product's user experience, leading to increased engagement and user satisfaction.`,
  content: [
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          text: `In the world of digital design, it's often the smallest details that make the biggest impact. Microinteractions, those subtle moments centered around a single use case, can transform a good user experience into an exceptional one.`
        }
      ]
    },
    {
      _type: 'heading',
      style: 'h2',
      children: [{ text: 'What are Microinteractions?' }]
    },
    {
      _type: 'block',
      children: [
        {
          text: 'Microinteractions are the small, functional animations and feedback mechanisms that guide users through your interface. They can be found everywhere:'
        }
      ]
    },
    {
      _type: 'bulletList',
      children: [
        { text: 'The subtle bounce of a like button' },
        { text: 'A loading spinner that shows progress' },
        { text: 'The swipe gesture to archive an email' },
        { text: 'A success message that fades away' }
      ]
    },
    {
      _type: 'image',
      alt: 'Examples of microinteractions',
      caption: 'Common microinteractions in modern interfaces'
    },
    {
      _type: 'heading',
      style: 'h2',
      children: [{ text: 'Why Microinteractions Matter' }]
    },
    {
      _type: 'block',
      children: [
        {
          text: 'Effective microinteractions can:'
        }
      ]
    },
    {
      _type: 'bulletList',
      children: [
        { text: 'Increase user engagement by 40%' },
        { text: 'Reduce user errors by 25%' },
        { text: 'Improve task completion rates by 35%' },
        { text: 'Enhance brand perception significantly' }
      ]
    },
    {
      _type: 'callout',
      variant: 'tip',
      children: [
        {
          text: `Pro Tip: When designing microinteractions, always consider the context and frequency of use. An animation that's delightful the first time might become annoying when encountered repeatedly.`
        }
      ]
    },
    {
      _type: 'codeBlock',
      language: 'css',
      code: `/* Example of a subtle button interaction */
.button {
  transition: transform 0.2s ease;
}

.button:hover {
  transform: scale(1.05);
}

.button:active {
  transform: scale(0.98);
}`
    }
  ],
  relatedPosts: [
    {
      title: 'Creating Brand Resonance',
      slug: 'brand-resonance',
      excerpt: 'Essential strategies for creating a brand identity that connects with your target audience.'
    },
    {
      title: 'Content That Converts',
      slug: 'content-conversion',
      excerpt: 'Learn how to create content that drives engagement and increases conversions.'
    }
  ]
}

// This component will later be moved to a separate file
const RichTextContent = ({ content }: { content: any[] }) => {
  return (
    <div className="prose dark:prose-invert max-w-none">
      {content.map((block, index) => {
        switch (block._type) {
          case 'block':
            return <p key={index} className="text-gray-600 dark:text-gray-400">{block.children[0].text}</p>
          case 'heading':
            const Heading = block.style
            return <Heading key={index} className="text-2xl font-bold mt-8 mb-4">{block.children[0].text}</Heading>
          case 'bulletList':
            return (
              <ul key={index} className="list-disc pl-6 mb-6">
                {block.children.map((item: any, i: number) => (
                  <li key={i} className="text-gray-600 dark:text-gray-400 mb-2">{item.text}</li>
                ))}
              </ul>
            )
          case 'image':
            return (
              <figure key={index} className="my-8">
                <div className="w-full aspect-video bg-gray-200 dark:bg-gray-700 rounded-xl animate-pulse" />
                <figcaption className="text-sm text-gray-500 dark:text-gray-400 mt-2 text-center">
                  {block.caption}
                </figcaption>
              </figure>
            )
          case 'callout':
            return (
              <div key={index} className="bg-brand-50 dark:bg-brand-900/20 border-l-4 border-brand p-4 my-6 rounded-r">
                <p className="text-brand-800 dark:text-brand-200">{block.children[0].text}</p>
              </div>
            )
          case 'codeBlock':
            return (
              <pre key={index} className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto my-6">
                <code>{block.code}</code>
              </pre>
            )
          default:
            return null
        }
      })}
    </div>
  )
}

export default function BlogPost() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-16">
      {/* Header */}
      <header className="mb-16">
        <div className="mb-6">
          <Link 
            href="/blog" 
            className="text-brand hover:text-brand-600 dark:text-brand-400 dark:hover:text-brand-300 inline-flex items-center"
          >
            <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
            Back to Blog
          </Link>
        </div>
        
        <div className="flex items-center gap-4 mb-8">
          <div className="w-12 h-12 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse" />
          <div>
            <div className="font-medium">{blogPost.author.name}</div>
            <div className="text-gray-600 dark:text-gray-400 text-sm">{blogPost.author.role}</div>
          </div>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold mb-6">{blogPost.title}</h1>
        
        <div className="flex flex-wrap gap-4 text-sm mb-8">
          <div className="px-3 py-1 bg-brand-100 dark:bg-brand-900/30 rounded-full">
            <span className="text-brand-600 dark:text-brand-400">{blogPost.category}</span>
          </div>
          <div className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full">
            <span className="text-gray-600 dark:text-gray-400">{blogPost.publishedAt}</span>
          </div>
          <div className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full">
            <span className="text-gray-600 dark:text-gray-400">{blogPost.readTime}</span>
          </div>
        </div>

        <p className="text-xl text-gray-600 dark:text-gray-400">
          {blogPost.excerpt}
        </p>
      </header>

      {/* Hero Image Placeholder */}
      <div className="w-full aspect-video bg-gray-200 dark:bg-gray-700 rounded-xl mb-16 animate-pulse" />

      {/* Content */}
      <RichTextContent content={blogPost.content} />

      {/* Related Posts */}
      <section className="border-t border-gray-200 dark:border-gray-700 mt-16 pt-16">
        <h2 className="text-2xl font-bold mb-8">Related Articles</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {blogPost.relatedPosts.map((post, index) => (
            <Link 
              key={index}
              href={`/blog/${post.slug}`}
              className="group"
            >
              <div className="w-full aspect-video bg-gray-200 dark:bg-gray-700 rounded-xl mb-4 group-hover:opacity-90 transition-opacity" />
              <h3 className="font-semibold text-xl mb-2 group-hover:text-brand dark:group-hover:text-brand-400 transition-colors">
                {post.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {post.excerpt}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-8 mt-16">
        <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Get notified about new articles and insights. No spam, unsubscribe anytime.
        </p>
        <form className="flex gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
          />
          <button
            type="submit"
            className="px-6 py-2 bg-brand hover:bg-brand-600 text-white rounded-lg transition-colors"
          >
            Subscribe
          </button>
        </form>
      </section>
    </article>
  )
}
