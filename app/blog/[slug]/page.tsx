import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'motion/react';
import { articles } from '@/lib/blog';
import { Calendar, Clock, User, ArrowLeft } from 'lucide-react';

interface BlogArticlePageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({
  params,
}: BlogArticlePageProps): Promise<Metadata> {
  const article = articles.find((a) => a.slug === params.slug);

  if (!article) {
    return {
      title: 'Article Not Found',
    };
  }

  return {
    title: `${article.title} | De'Hydra Exports Blog`,
    description: article.excerpt,
    keywords: [
      article.category,
      'dehydrated food',
      'export',
      'agriculture',
      ...article.title.split(' ').slice(0, 3),
    ],
    authors: [{ name: article.author }],
    openGraph: {
      title: `${article.title} | De'Hydra Exports Blog`,
      description: article.excerpt,
      url: `https://dehydra-b2b.com/blog/${article.slug}`,
      type: 'article',
      publishedTime: article.date,
      authors: [article.author],
      images: [
        {
          url: article.image,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },
  };
}

export function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export default function BlogArticlePage({ params }: BlogArticlePageProps) {
  const article = articles.find((a) => a.slug === params.slug);

  if (!article) {
    notFound();
  }

  // JSON-LD Schema markup
  const schemaMarkup = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: article.title,
    image: article.image,
    datePublished: article.date,
    author: {
      '@type': 'Person',
      name: article.author,
    },
    publisher: {
      '@type': 'Organization',
      name: "De'Hydra Exports",
    },
    description: article.excerpt,
  };

  // Get related articles
  const relatedArticles = articles
    .filter((a) => a.category === article.category && a.slug !== article.slug)
    .slice(0, 3);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />
      <main className="bg-background">
        {/* Breadcrumb */}
        <section className="bg-surface-container py-4 px-8">
          <div className="max-w-4xl mx-auto flex items-center gap-2 text-body-sm">
            <Link href="/" className="text-secondary hover:underline">
              Home
            </Link>
            <span className="text-on-surface-variant">/</span>
            <Link href="/blog" className="text-secondary hover:underline">
              Blog
            </Link>
            <span className="text-on-surface-variant">/</span>
            <span className="text-primary font-semibold">{article.title.substring(0, 30)}...</span>
          </div>
        </section>

        {/* Article Header */}
        <section className="py-16 px-8 bg-surface-container">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-secondary hover:text-primary transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <span className="inline-block px-3 py-1 bg-secondary/10 text-secondary label-xs rounded-full mb-4">
                {article.category}
              </span>
              <h1 className="text-h1 text-primary mb-6">{article.title}</h1>
              <div className="flex flex-wrap items-center gap-6 text-body-sm text-on-surface-variant">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4 text-secondary" />
                  <span>By {article.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-secondary" />
                  <time>
                    {new Date(article.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </time>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-secondary" />
                  <span>{article.readTime} min read</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Featured Image */}
        <section className="py-8 px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="relative h-96 rounded-lg overflow-hidden border border-outline-variant"
            >
              <Image
                src={article.image}
                alt={article.title}
                fill
                sizes="100vw"
                className="object-cover"
              />
            </motion.div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-16 px-8">
          <article className="max-w-4xl mx-auto prose prose-lg">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="prose-invert max-w-none"
            >
              <div className="text-on-surface-variant leading-relaxed space-y-6">
                {article.content.split('\n\n').map((paragraph, idx) => (
                  <p key={idx} className="text-body-lg text-on-surface-variant">
                    {paragraph}
                  </p>
                ))}
              </div>
            </motion.div>
          </article>
        </section>

        {/* Article Meta */}
        <section className="py-12 px-8 border-t border-b border-outline-variant">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap gap-3">
              {article.tags?.map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 bg-secondary/10 text-secondary label-sm rounded-full"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Author Bio */}
        <section className="py-16 px-8 bg-surface-container">
          <div className="max-w-4xl mx-auto">
            <div className="flex gap-6 items-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-xl">
                {article.author.charAt(0)}
              </div>
              <div>
                <h3 className="text-h3 text-primary mb-2">{article.author}</h3>
                <p className="text-body-md text-on-surface-variant">
                  Industry expert with years of experience in dehydrated food production and global exports.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <section className="py-24 px-8">
            <div className="max-w-7xl mx-auto">
              <div className="mb-12">
                <h2 className="text-h2 text-primary mb-4">Related Articles</h2>
                <div className="w-16 h-1 bg-secondary" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedArticles.map((a) => (
                  <motion.div
                    key={a.slug}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <Link href={`/blog/${a.slug}`}>
                      <div className="bg-white border border-outline-variant rounded-lg overflow-hidden hover:border-secondary transition-all hover:shadow-lg">
                        <div className="relative h-48 overflow-hidden bg-surface-container">
                          <Image
                            src={a.image}
                            alt={a.title}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                        </div>
                        <div className="p-6">
                          <h3 className="text-h3 text-primary mb-2 group-hover:text-secondary transition-colors">
                            {a.title}
                          </h3>
                          <p className="text-body-sm text-on-surface-variant mb-4">
                            {a.excerpt}
                          </p>
                          <div className="flex items-center justify-between text-body-xs text-on-surface-variant">
                            <span className="flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              {a.readTime} min
                            </span>
                            <time>
                              {new Date(a.date).toLocaleDateString('en-US', {
                                month: 'short',
                                day: 'numeric',
                              })}
                            </time>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="py-24 px-8 bg-primary">
          <div className="max-w-4xl mx-auto text-center text-on-primary">
            <h2 className="text-h2 mb-4">Ready to partner with us?</h2>
            <p className="text-body-lg text-on-primary-container/90 mb-8">
              Contact our sales team to discuss your specific requirements and get a custom quote.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-secondary text-on-secondary px-12 py-5 rounded-lg label-sm uppercase font-bold hover:opacity-90 transition-all active:scale-95 shadow-lg"
            >
              Get in Touch
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
