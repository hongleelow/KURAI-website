import { useState, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import SEO from '@/components/SEO';
import {
  Sparkles,
  BookOpen,
  Camera,
  Star,
  ArrowRight,
  Clock,
  Tag,
  Search,
  CheckCircle2,
} from 'lucide-react';
import { FORMSPREE_IDS, submitForm } from '@/config/formspree';
import {
  posts,
  getCategoryLabel,
  categoryColorMap,
  categoryBorderMap,
} from '@/data/blogPosts';
import type { BlogCategory } from '@/data/blogPosts';

type FilterCategory = 'all' | BlogCategory;

const categories = [
  { id: 'all' as FilterCategory, label: 'All Posts', icon: BookOpen },
  { id: 'ai-fun-facts' as FilterCategory, label: 'AI Fun Facts', icon: Sparkles },
  { id: 'parent-guides' as FilterCategory, label: 'Parent Guides', icon: BookOpen },
  { id: 'workshop-recaps' as FilterCategory, label: 'Workshop Recaps', icon: Camera },
  { id: 'student-spotlights' as FilterCategory, label: 'Student Spotlights', icon: Star },
];

const blogSchema = posts.map((post) => ({
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: post.title,
  description: post.excerpt,
  datePublished: post.isoDate,
  url: `https://kurai.edu.my/blog/${post.slug}`,
  mainEntityOfPage: `https://kurai.edu.my/blog/${post.slug}`,
  image: post.image ? `https://kurai.edu.my${post.image}` : undefined,
  author: {
    '@type': 'Organization',
    name: 'KURAI',
    url: 'https://kurai.edu.my',
  },
  publisher: {
    '@type': 'Organization',
    name: 'KURAI',
    url: 'https://kurai.edu.my',
    logo: { '@type': 'ImageObject', url: 'https://kurai.edu.my/images/logo.png' },
  },
}));

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState<FilterCategory>('all');
  const [nlStatus, setNlStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleNewsletter = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setNlStatus('sending');
    const data = Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>;
    const result = await submitForm(FORMSPREE_IDS.newsletter, data);
    setNlStatus(result.ok ? 'success' : 'error');
    if (result.ok) e.currentTarget.reset();
  };

  const filtered =
    activeCategory === 'all'
      ? posts
      : posts.filter((p) => p.category === activeCategory);

  const featuredPosts = posts.filter((p) => p.featured);

  return (
    <>
      <SEO
        title="Blog & AI Education Resources | KURAI"
        description="Articles, parent guides, and fun facts about AI and Robotics education for children. Insights from KURAI's education team in Johor Bahru."
        path="/blog"
        jsonLd={blogSchema}
      />
      <div>
      {/* ─── HERO ─── */}
      <section className="relative overflow-hidden bg-kurai-dark px-5 py-20 text-white sm:px-6 sm:py-28 md:py-32">
        <div className="pointer-events-none absolute -right-40 -top-40 h-[300px] w-[300px] md:h-[500px] md:w-[500px] rounded-full bg-kurai-royal/20 blur-3xl" />
        <div className="relative mx-auto max-w-4xl text-center">
          <p className="font-body text-xs font-semibold uppercase tracking-[0.25em] text-kurai-light">
            The KURAI Journal
          </p>
          <h1 className="mt-5 font-heading text-3xl font-bold leading-[1.1] tracking-tight sm:text-4xl md:text-6xl">
            Insights, Stories &amp;{' '}
            <span className="bg-gradient-to-r from-kurai-light to-kurai-royal-light bg-clip-text text-transparent">
              AI Fun Facts
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl font-body text-lg leading-relaxed text-kurai-light-soft">
            Stay informed with parent guides, student stories, workshop recaps,
            and fascinating facts about AI — all from the KURAI team.
          </p>
        </div>
      </section>

      {/* ─── FEATURED POSTS ─── */}
      <section className="px-5 py-16 sm:px-6 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="font-body text-xs font-semibold uppercase tracking-[0.25em] text-kurai-royal">
              Featured
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold text-kurai-dark md:text-4xl">
              Editor&apos;s Picks
            </h2>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {featuredPosts.map((post, index) => {
              const color = categoryColorMap[post.category];
              const isHero = index === 0;
              return (
                <Link
                  key={post.id}
                  to={`/blog/${post.slug}`}
                  className={`group flex rounded-2xl border border-kurai-ice bg-white transition-shadow hover:shadow-lg ${
                    isHero ? 'flex-col md:col-span-2 md:row-span-2 md:flex-row' : 'flex-col'
                  }`}
                >
                  {post.image ? (
                    <picture>
                      <source srcSet={post.image.replace(/\.(jpg|png)$/, '.webp')} type="image/webp" />
                      <img
                        src={post.image}
                        alt={post.imageAlt || post.title}
                        className={`w-full object-cover ${
                          isHero
                            ? 'h-56 rounded-t-2xl md:h-auto md:w-1/2 md:rounded-l-2xl md:rounded-tr-none'
                            : 'h-48 rounded-t-2xl'
                        }`}
                        loading="lazy"
                      />
                    </picture>
                  ) : (
                    <div className={`bg-gradient-to-br from-kurai-ice to-kurai-light/20 ${
                      isHero ? 'h-56 rounded-t-2xl md:h-auto md:w-1/2 md:rounded-l-2xl md:rounded-tr-none' : 'h-48 rounded-t-2xl'
                    }`} />
                  )}
                  <div className={`flex flex-1 flex-col ${isHero ? 'justify-center p-6 md:p-8' : 'p-6'}`}>
                    <div className="flex items-center gap-3">
                      <span
                        className={`rounded-full px-3 py-1 font-body text-xs font-semibold uppercase tracking-wider ${color.bg} ${color.text}`}
                      >
                        {getCategoryLabel(post.category)}
                      </span>
                      <span className="flex items-center gap-1 font-body text-sm text-kurai-dark-60">
                        <Clock className="h-3 w-3" />
                        {post.readTime}
                      </span>
                    </div>
                    <h3 className={`mt-4 font-heading font-semibold text-kurai-dark group-hover:text-kurai-royal ${
                      isHero ? 'text-xl md:text-2xl' : 'text-lg'
                    }`}>
                      {post.title}
                    </h3>
                    <p className="mt-2 flex-1 font-body text-sm leading-relaxed text-kurai-dark-60 md:text-base">
                      {post.excerpt}
                    </p>
                    <div className="mt-4 flex items-center justify-between">
                      <span className="font-body text-sm text-kurai-dark-60">{post.date}</span>
                      <span className="inline-flex items-center gap-1 font-body text-sm font-semibold text-kurai-royal opacity-0 transition-opacity group-hover:opacity-100">
                        Read more <ArrowRight className="h-3.5 w-3.5" />
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── ALL POSTS WITH FILTER ─── */}
      <section className="bg-kurai-ice/50 px-5 py-16 sm:px-6 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="font-body text-xs font-semibold uppercase tracking-[0.25em] text-kurai-royal">
              Explore
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold text-kurai-dark md:text-4xl">
              All Articles
            </h2>
            <p className="mx-auto mt-3 max-w-xl font-body text-sm text-kurai-dark-60 md:text-base">
              Practical guides, student stories, and AI insights — written for parents by the KURAI team.
            </p>
          </div>

          {/* Category Filter */}
          <div className="mt-8 flex flex-wrap justify-center gap-2 sm:mt-10 sm:gap-3">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`inline-flex items-center gap-1.5 sm:gap-2 rounded-full px-4 py-2 font-body text-xs sm:px-5 sm:py-2.5 sm:text-sm font-medium transition-all hover:scale-105 ${
                  activeCategory === cat.id
                    ? 'bg-kurai-royal text-white shadow-md'
                    : 'bg-white text-kurai-dark-60 hover:bg-kurai-royal/10 hover:text-kurai-royal'
                }`}
              >
                <cat.icon className="h-4 w-4" />
                {cat.label}
              </button>
            ))}
          </div>

          {/* Posts Grid */}
          <div className="mt-12 grid gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
            {filtered.map((post) => {
              const color = categoryColorMap[post.category];
              return (
                <Link
                  key={post.id}
                  to={`/blog/${post.slug}`}
                  className={`group rounded-2xl border border-kurai-ice border-t-2 bg-white p-5 shadow-sm transition-shadow hover:shadow-md sm:p-6 md:p-8 ${categoryBorderMap[post.category]}`}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`inline-flex items-center gap-1 rounded-full px-3 py-1 font-body text-xs font-semibold uppercase tracking-wider ${color.bg} ${color.text}`}
                    >
                      <Tag className="h-3 w-3" />
                      {getCategoryLabel(post.category)}
                    </span>
                  </div>
                  <h3 className="mt-4 font-heading text-lg font-semibold text-kurai-dark group-hover:text-kurai-royal">
                    {post.title}
                  </h3>
                  <p className="mt-2 font-body text-sm leading-relaxed text-kurai-dark-60 md:text-base">
                    {post.excerpt}
                  </p>
                  <div className="mt-4 flex items-center justify-between text-sm text-kurai-dark-60">
                    <span className="font-body">{post.date}</span>
                    <span className="flex items-center gap-1 font-body">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>

          {filtered.length === 0 && (
            <div className="mt-12 text-center">
              <Search className="mx-auto h-12 w-12 text-kurai-dark-60/30" />
              <p className="mt-4 font-body text-kurai-dark-60">
                No articles found in this category yet. Check back soon!
              </p>
            </div>
          )}
        </div>
      </section>

      {/* ─── NEWSLETTER CTA ─── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-kurai-dark to-kurai-dark-80 px-5 py-16 text-white sm:px-6 md:py-28">
        <div className="pointer-events-none absolute -left-40 -top-40 h-[400px] w-[400px] rounded-full bg-kurai-royal/15 blur-3xl" />
        <div className="relative mx-auto max-w-3xl text-center">
          <p className="font-body text-xs font-semibold uppercase tracking-[0.25em] text-kurai-light">
            Stay Updated
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold md:text-4xl">
            Get the Latest from KURAI
          </h2>
          <p className="mx-auto mt-5 max-w-xl font-body leading-relaxed text-kurai-light-soft">
            Subscribe to our newsletter for AI fun facts, parent tips, upcoming events,
            and early access to new programmes.
          </p>
          {nlStatus === 'success' ? (
            <div className="mx-auto mt-8 flex items-center justify-center gap-2 text-emerald-400">
              <CheckCircle2 className="h-5 w-5" />
              <span className="font-body text-sm font-semibold">You&apos;re subscribed! Welcome aboard.</span>
            </div>
          ) : (
            <>
              <form onSubmit={handleNewsletter} className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row">
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Your email address"
                  className="flex-1 rounded-lg border border-white/20 bg-white/10 px-5 py-3 font-body text-sm text-white placeholder-white/50 backdrop-blur-sm focus:border-kurai-light focus:outline-none"
                />
                <button
                  type="submit"
                  disabled={nlStatus === 'sending'}
                  className="rounded-lg bg-kurai-royal px-6 py-3 font-body text-sm font-semibold text-white transition-all hover:scale-105 hover:bg-kurai-royal-light disabled:opacity-50"
                >
                  {nlStatus === 'sending' ? 'Subscribing...' : 'Subscribe'}
                </button>
              </form>
              <p className="mt-3 font-body text-xs text-white/50">
                No spam, ever. Unsubscribe anytime.
              </p>
            </>
          )}
        </div>
      </section>

      {/* ─── BOTTOM CTA ─── */}
      <section className="relative overflow-hidden bg-kurai-royal px-5 py-16 text-white sm:px-6 md:py-28">
        <div className="pointer-events-none absolute -right-20 -top-20 h-[300px] w-[300px] rounded-full bg-white/5 blur-3xl" />
        <div className="relative mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-2xl font-bold md:text-3xl">
            Curious about KURAI? Experience it first-hand.
          </h2>
          <p className="mx-auto mt-5 max-w-xl font-body text-lg leading-relaxed text-white/80">
            Book a free trial class and see why parents trust us with their children&apos;s AI and Robotics education.
          </p>
          <Link
            to="/free-trial"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-kurai-cream px-8 py-3.5 font-body text-sm font-bold text-kurai-dark shadow-lg shadow-kurai-dark/10 transition-all hover:scale-105 hover:bg-kurai-cream-dark hover:shadow-xl"
          >
            Book a Free Trial
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
    </>
  );
}
