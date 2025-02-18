import { notFound } from 'next/navigation';

// This would normally come from Sanity, but for now we'll use static data
const posts = [
  {
    _id: "1",
    _createdAt: "2025-02-15T08:00:00.000Z",
    _updatedAt: "2025-02-15T08:00:00.000Z",
    _type: "post",
    title: "The Evolution of UI Design: 2025 Trends and Beyond",
    slug: {
      _type: "slug",
      current: "ui-design-trends-2025"
    },
    author: {
      _ref: "author-1",
      _type: "reference"
    },
    mainImage: {
      _type: "image",
      asset: {
        _ref: "image-1",
        _type: "reference"
      },
      alt: "Modern UI design elements showcasing 2025 trends"
    },
    categories: [
      {
        _ref: "category-1",
        _type: "reference"
      },
      {
        _ref: "category-2",
        _type: "reference"
      }
    ],
    excerpt: "Dive deep into the transformative UI design trends of 2025, from adaptive interfaces to neomorphic evolution, and learn how these changes are reshaping digital experiences.",
    readingTime: "8",
    featured: true,
    content: [
      {
        _key: "intro",
        _type: "block",
        style: "normal",
        markDefs: [],
        children: [
          {
            _type: "span",
            marks: ["strong"],
            text: "As we step into 2025, the landscape of UI design continues to evolve at an unprecedented pace. From AI-driven interfaces to immersive experiences, let's explore the groundbreaking trends that are reshaping how we interact with digital products."
          }
        ]
      },
      {
        _key: "adaptive-intro",
        _type: "block",
        style: "normal",
        markDefs: [],
        children: [
          {
            _type: "span",
            marks: [],
            text: "Adaptive interfaces have emerged as the cornerstone of modern UI design. These intelligent systems go beyond responsive design, creating truly personalized experiences that evolve with user behavior."
          }
        ]
      },
      {
        _key: "adaptive-features-heading",
        _type: "block",
        style: "h3",
        markDefs: [],
        children: [
          {
            _type: "span",
            marks: [],
            text: "Key Features of Adaptive Interfaces"
          }
        ]
      },
      {
        _key: "feature-1",
        _type: "block",
        style: "normal",
        markDefs: [],
        children: [
          {
            _type: "span",
            marks: [],
            text: "• Context-Aware Components: Elements that adapt based on user context, time of day, and usage patterns"
          }
        ]
      },
      {
        _key: "feature-2",
        _type: "block",
        style: "normal",
        markDefs: [],
        children: [
          {
            _type: "span",
            marks: [],
            text: "• Behavioral Learning: Interfaces that learn from user interactions and adjust their layout and functionality accordingly"
          }
        ]
      },
      {
        _key: "feature-3",
        _type: "block",
        style: "normal",
        markDefs: [],
        children: [
          {
            _type: "span",
            marks: [],
            text: "• Dynamic Typography: Font sizes and styles that adapt to reading conditions and user preferences"
          }
        ]
      },
      {
        _key: "heading-1",
        _type: "block",
        style: "h2",
        markDefs: [],
        children: [
          {
            _type: "span",
            marks: [],
            text: "1. The Rise of Adaptive Interfaces"
          }
        ]
      },
      {
        _key: "image-1",
        _type: "image",
        asset: {
          _ref: "image-2",
          _type: "reference"
        },
        alt: "Demonstration of an adaptive interface morphing based on user context",
        caption: "Adaptive interfaces automatically adjust their layout and functionality based on user behavior and context"
      },
      {
        _key: "code-1",
        _type: "code",
        language: "css",
        code: "@media (prefers-reduced-motion: no-preference) {\n  .adaptive-component {\n    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n    transform: translateZ(0);\n  }\n}\n\n.adaptive-component[data-context='focus'] {\n  transform: scale(1.05);\n  box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1);\n}"
      },
      {
        _key: "quote-1",
        _type: "quote",
        text: "The future of micro-interactions lies in their ability to create emotional connections with users through multi-sensory feedback.",
        citation: "Sarah Johnson, UX Research Lead at Google"
      },
      {
        _key: "callout-1",
        _type: "callout",
        style: "tip",
        text: "Want to stay ahead of the curve? Focus on creating interfaces that adapt to user needs while maintaining consistency and accessibility."
      },
      {
        _key: "neomorphic-heading",
        _type: "block",
        style: "h2",
        markDefs: [],
        children: [
          {
            _type: "span",
            marks: [],
            text: "2. Neomorphic Evolution"
          }
        ]
      },
      {
        _key: "neomorphic-image",
        _type: "image",
        asset: {
          _ref: "image-3",
          _type: "reference"
        },
        alt: "Example of neomorphic design elements with subtle shadows and highlights",
        caption: "Modern neomorphic design combines subtle shadows with dynamic lighting effects"
      },
      {
        _key: "neomorphic-intro",
        _type: "block",
        style: "normal",
        markDefs: [],
        children: [
          {
            _type: "span",
            marks: [],
            text: "Neomorphism has evolved beyond its initial soft UI roots. In 2025, we're seeing a sophisticated blend of depth, motion, and contextual lighting that creates more engaging interfaces."
          }
        ]
      },
      {
        _key: "neomorphic-code",
        _type: "code",
        language: "css",
        code: ".neomorphic-card {\n  background: linear-gradient(145deg, #ffffff, #f5f5f5);\n  box-shadow: \n    8px 8px 16px #d9d9d9,\n    -8px -8px 16px #ffffff;\n  border-radius: 20px;\n  transition: all 0.3s ease;\n}\n\n.neomorphic-card:hover {\n  transform: translateY(-2px);\n  box-shadow: \n    12px 12px 20px #d9d9d9,\n    -12px -12px 20px #ffffff;\n}"
      },
      {
        _key: "micro-heading",
        _type: "block",
        style: "h2",
        markDefs: [],
        children: [
          {
            _type: "span",
            marks: [],
            text: "3. Micro-interactions 2.0"
          }
        ]
      },
      {
        _key: "micro-image",
        _type: "image",
        asset: {
          _ref: "image-4",
          _type: "reference"
        },
        alt: "Animation showcasing advanced micro-interactions",
        caption: "Advanced micro-interactions provide immediate feedback and enhance user engagement"
      },
      {
        _key: "micro-intro",
        _type: "block",
        style: "normal",
        markDefs: [],
        children: [
          {
            _type: "span",
            marks: [],
            text: "Micro-interactions have evolved into sophisticated feedback systems that combine haptics, sound, and visual effects to create more engaging user experiences."
          }
        ]
      },
      {
        _key: "ai-heading",
        _type: "block",
        style: "h2",
        markDefs: [],
        children: [
          {
            _type: "span",
            marks: [],
            text: "4. AI-Powered Personalization"
          }
        ]
      },
      {
        _key: "ai-image",
        _type: "image",
        asset: {
          _ref: "image-5",
          _type: "reference"
        },
        alt: "AI-powered interface adapting to user preferences",
        caption: "AI algorithms analyze user behavior to create personalized interface layouts"
      },
      {
        _key: "ai-intro",
        _type: "block",
        style: "normal",
        markDefs: [],
        children: [
          {
            _type: "span",
            marks: [],
            text: "Artificial Intelligence is revolutionizing UI design by enabling truly personalized experiences. From layout adjustments to content recommendations, AI is making interfaces more intuitive and efficient."
          }
        ]
      },
      {
        _key: "ai-features-heading",
        _type: "block",
        style: "h3",
        markDefs: [],
        children: [
          {
            _type: "span",
            marks: [],
            text: "Key AI Applications in UI"
          }
        ]
      },
      {
        _key: "ai-feature-1",
        _type: "block",
        style: "normal",
        markDefs: [],
        children: [
          {
            _type: "span",
            marks: [],
            text: "• Predictive Navigation: AI anticipates user needs and surfaces relevant content"
          }
        ]
      },
      {
        _key: "ai-feature-2",
        _type: "block",
        style: "normal",
        markDefs: [],
        children: [
          {
            _type: "span",
            marks: [],
            text: "• Dynamic Layouts: Interfaces that reorganize based on user behavior patterns"
          }
        ]
      },
      {
        _key: "ai-feature-3",
        _type: "block",
        style: "normal",
        markDefs: [],
        children: [
          {
            _type: "span",
            marks: [],
            text: "• Personalized Color Schemes: AI-adjusted color palettes based on user preferences and accessibility needs"
          }
        ]
      },
      {
        _key: "conclusion-heading",
        _type: "block",
        style: "h2",
        markDefs: [],
        children: [
          {
            _type: "span",
            marks: [],
            text: "Looking Ahead"
          }
        ]
      },
      {
        _key: "conclusion-text",
        _type: "block",
        style: "normal",
        markDefs: [],
        children: [
          {
            _type: "span",
            marks: [],
            text: "As we look towards the future, the line between user interfaces and user experiences continues to blur. The most successful designs will be those that seamlessly integrate these trends while maintaining a focus on user needs and accessibility."
          }
        ]
      }
    ],
    seo: {
      _type: "seo",
      metaTitle: "UI Design Trends 2025: The Future of Digital Interfaces | Lloyd Pilapil",
      metaDescription: "Explore the latest UI design trends shaping the digital landscape in 2025. Learn about adaptive interfaces, neomorphism, and AI-powered personalization.",
      keywords: ["UI Design", "2025 Trends", "Digital Design", "User Interface", "UX Trends", "Adaptive Interfaces", "Neomorphism", "AI in Design"]
    }
  }
];

interface PageProps {
  params: {
    slug: string;
  };
}

export default function BlogPost({ params }: PageProps) {
  const post = posts.find((post) => post.slug.current === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen pt-16">
      <article className="max-w-[1440px] mx-auto px-4 py-12 md:py-16 lg:py-20">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <header className="mb-12">
            <div className="flex items-center gap-2 mb-6">
              {post.categories.map((category) => (
                <span 
                  key={category._ref}
                  className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-secondary text-secondary-foreground"
                >
                  {/* Category name will be fetched from Sanity */}
                  Category
                </span>
              ))}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6">
              {post.title}
            </h1>
            <div className="flex items-center justify-between border-b border-gray-200 dark:border-gray-800 pb-6">
              <div className="flex items-center gap-3">
                <img 
                  src="https://placehold.co/400x400/png" 
                  alt="Author Name"
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <div className="font-medium text-gray-900 dark:text-white">
                    {/* Author name will be fetched from Sanity */}
                    Author Name
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    {/* Author bio will be fetched from Sanity */}
                    Author Bio
                  </div>
                </div>
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                <time>{new Date(post._createdAt).toLocaleDateString()}</time>
                <span className="mx-2">•</span>
                <span>{post.readingTime} min read</span>
              </div>
            </div>
          </header>

          {/* Featured Image */}
          {post.mainImage && (
            <div className="mb-12">
              <img 
                src="https://placehold.co/1200x630/png" 
                alt={post.mainImage.alt}
                className="w-full h-auto rounded-xl"
              />
            </div>
          )}

          {/* Content */}
          <div className="prose prose-lg dark:prose-invert max-w-none">
            {post.content.map((block, index) => {
              if (block._type === 'block') {
                if (block.style === 'h2') {
                  return (
                    <h2 key={block._key} className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">
                      {block.children[0].text}
                    </h2>
                  );
                }
                if (block.style === 'h3') {
                  return (
                    <h3 key={block._key} className="text-2xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white">
                      {block.children[0].text}
                    </h3>
                  );
                }
                return (
                  <p key={block._key} className="mb-6 text-gray-700 dark:text-gray-300 leading-relaxed">
                    {block.children[0].text}
                  </p>
                );
              }

              if (block._type === 'image') {
                return (
                  <figure key={block._key} className="my-8">
                    <img 
                      src="https://placehold.co/800x450/png" 
                      alt={block.alt}
                      className="w-full h-auto rounded-xl shadow-lg"
                    />
                    {block.caption && (
                      <figcaption className="mt-3 text-sm text-center text-gray-500 dark:text-gray-400">
                        {block.caption}
                      </figcaption>
                    )}
                  </figure>
                );
              }

              if (block._type === 'code') {
                return (
                  <div key={block._key} className="my-8">
                    <pre className="rounded-lg bg-gray-900 p-4 overflow-x-auto">
                      <code className={`language-${block.language} text-sm`}>
                        {block.code}
                      </code>
                    </pre>
                  </div>
                );
              }

              if (block._type === 'quote') {
                return (
                  <blockquote key={block._key} className="my-8 pl-6 border-l-4 border-brand">
                    <p className="text-xl italic text-gray-900 dark:text-white mb-2">
                      "{block.text}"
                    </p>
                    <cite className="text-sm text-gray-500 dark:text-gray-400">
                      — {block.citation}
                    </cite>
                  </blockquote>
                );
              }

              if (block._type === 'callout') {
                return (
                  <div key={block._key} className="my-8 p-6 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
                    <p className="text-lg text-gray-900 dark:text-white">
                      {block.text}
                    </p>
                  </div>
                );
              }

              return null;
            })}
          </div>
        </div>
      </article>
    </main>
  );
}
