import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'motion/react';
import { articles } from '@/lib/blog';
import { Calendar, Clock, User } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Blog | De&apos;Hydra Exports',
  description:
    'Read industry insights, guides, and tips about dehydrated food products, export regulations, and wholesale market trends.',
  keywords: 'blog, dehydrated food, food export, industry insights, agriculture',
  openGraph: {
    title: 'Blog | De&apos;Hydra Exports',
    description: 'Industry insights and guides for dehydrated food exports.',
    url: 'https://dehydra-b2b.com/blog',
    type: 'website',
  },
};

export default function BlogPage() {
  // Group articles by category
  const groupedArticles = articles.reduce(
    (acc, article) => {
      if (!acc[article.category]) {
        acc[article.category] = [];
      }
      acc[article.category].push(article);
      return acc;
    },
    {} as Record<string, typeof articles>
  );

  // Get featured article (first one)
  const featuredArticle = articles[0];
  const otherArticles = articles.slice(1);

  return (
    <main className="bg-background">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center overflow-hidden bg-primary-container">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1454496522488-7a8e488e8606?auto=format&fit=crop&w=1920&q=80"
            alt="Blog background"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-h1 text-on-primary mb-4">Industry Insights</h1>
            <p className="text-body-lg text-on-primary-container/90 max-w-2xl">
              Stay updated with the latest trends, insights, and guides about dehydrated food products and global exports.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-20 px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-12 items-center bg-surface-container rounded-xl p-8 md:p-12 border border-outline-variant"
          >
            <div className="relative h-64 md:h-full min-h-96 rounded-lg overflow-hidden">
              <Image
                src={featuredArticle.image}
                alt={featuredArticle.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div>
              <span className="inline-block px-3 py-1 bg-secondary/10 text-secondary label-xs rounded-full mb-4">
                Featured
              </span>
              <Link href={`/blog/${featuredArticle.slug}`}>
                <h2 className="text-h2 text-primary mb-4 hover:text-secondary transition-colors cursor-pointer">
                  {featuredArticle.title}
                </h2>
              </Link>
              <p className="text-body-lg text-on-surface-variant mb-6">
                {featuredArticle.excerpt}
              </p>
              <div className="flex flex-wrap items-center gap-6 mb-6 text-body-sm text-on-surface-variant">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-secondary" />
                  {new Date(featuredArticle.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-secondary" />
                  {featuredArticle.readTime} min read
                </div>
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4 text-secondary" />
                  {featuredArticle.author}
                </div>
              </div>
              <Link
                href={`/blog/${featuredArticle.slug}`}
                className="inline-block bg-primary text-on-primary px-8 py-3 rounded-lg label-sm uppercase font-bold hover:opacity-90 transition-all active:scale-95"
              >
                Read Full Article
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* All Articles */}
      <section className="py-24 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-h2 text-primary mb-4">Latest Articles</h2>
            <div className="w-16 h-1 bg-secondary" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherArticles.map((article, idx) => (
              <motion.div
                key={article.slug}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group"
              >
                <Link href={`/blog/${article.slug}`}>
                  <div className="bg-white border border-outline-variant rounded-lg overflow-hidden hover:border-secondary transition-all hover:shadow-lg h-full flex flex-col">
                    <div className="relative h-48 overflow-hidden bg-surface-container">
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <span className="inline-block w-fit px-3 py-1 bg-secondary/10 text-secondary label-xs rounded-full mb-3">
                        {article.category}
                      </span>
                      <h3 className="text-h3 text-primary mb-3 group-hover:text-secondary transition-colors flex-1">
                        {article.title}
                      </h3>
                      <p className="text-body-sm text-on-surface-variant mb-4 line-clamp-2">
                        {article.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-body-xs text-on-surface-variant border-t border-outline-variant pt-4">
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {article.readTime} min
                        </div>
                        <time>
                          {new Date(article.date).toLocaleDateString('en-US', {
                            year: 'numeric',
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

      {/* Newsletter CTA */}
      <section className="py-24 px-8 bg-primary">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-h2 text-on-primary mb-4">Stay Updated</h2>
          <p className="text-body-lg text-on-primary-container/90 mb-8">
            Subscribe to our newsletter for the latest industry insights and export tips.
          </p>
          <form className="flex gap-3 flex-col sm:flex-row">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-lg bg-white/90 text-primary placeholder:text-on-surface-variant focus:outline-none focus:ring-2 focus:ring-secondary"
            />
            <button
              type="submit"
              className="px-8 py-4 bg-secondary text-on-secondary rounded-lg label-sm uppercase font-bold hover:opacity-90 transition-all active:scale-95"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
