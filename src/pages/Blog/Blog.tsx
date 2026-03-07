import { useState, FormEvent } from 'react';
import { Link } from 'react-router-dom';
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

type Category = 'all' | 'ai-fun-facts' | 'parent-guides' | 'workshop-recaps' | 'student-spotlights';

const categories = [
  { id: 'all' as Category, label: 'All Posts', icon: BookOpen },
  { id: 'ai-fun-facts' as Category, label: 'AI Fun Facts', icon: Sparkles },
  { id: 'parent-guides' as Category, label: 'Parent Guides', icon: BookOpen },
  { id: 'workshop-recaps' as Category, label: 'Workshop Recaps', icon: Camera },
  { id: 'student-spotlights' as Category, label: 'Student Spotlights', icon: Star },
];

const posts = [
  {
    id: 1,
    category: 'ai-fun-facts',
    title: 'How Does a Robot "See"? A Fun Guide to Computer Vision',
    excerpt:
      'Ever wondered how robots recognise faces or objects? Discover the basics of computer vision explained in a way children can understand and get excited about.',
    date: 'Mar 5, 2026',
    readTime: '3 min read',
    featured: true,
    image: '/images/blog-1.jpg',
  },
  {
    id: 2,
    category: 'parent-guides',
    title: '5 Signs Your Child Is Ready for AI Education',
    excerpt:
      'Not sure if your child is old enough for structured tech learning? Here are five indicators that they\'re ready to start exploring AI and Robotics.',
    date: 'Feb 28, 2026',
    readTime: '4 min read',
    featured: true,
    image: '/images/blog-2.jpg',
  },
  {
    id: 3,
    category: 'workshop-recaps',
    title: 'Recap: Our First Open Day Was a Huge Success',
    excerpt:
      'Over 40 families joined us for our inaugural Open Day. See highlights from the demo classes, parent Q&A sessions, and student showcases.',
    date: 'Feb 20, 2026',
    readTime: '5 min read',
    featured: true,
    image: '/images/blog-3.jpg',
  },
  {
    id: 4,
    category: 'student-spotlights',
    title: 'Meet Arif: From Minecraft Fan to AI Explorer',
    excerpt:
      'Nine-year-old Arif joined KURAI with a passion for gaming. Three months later, he\'s building his own AI-powered quiz game. Read his story.',
    date: 'Feb 15, 2026',
    readTime: '3 min read',
    featured: false,
  },
  {
    id: 5,
    category: 'ai-fun-facts',
    title: 'What Is Machine Learning? Explained with Cookies',
    excerpt:
      'We use a fun cookie-sorting analogy to explain how machine learning works — perfect for curious children (and their parents).',
    date: 'Feb 10, 2026',
    readTime: '3 min read',
    featured: false,
  },
  {
    id: 6,
    category: 'parent-guides',
    title: 'Screen Time vs. Learning Time: How KURAI Is Different',
    excerpt:
      'Worried about more screen time? Learn how structured AI education differs from passive device use and why it builds real skills.',
    date: 'Feb 5, 2026',
    readTime: '4 min read',
    featured: false,
  },
  {
    id: 7,
    category: 'workshop-recaps',
    title: 'Holiday Camp Highlights: Robot Builders Edition',
    excerpt:
      'Our December holiday camp saw 24 students build and programme their own robots. Here\'s what happened and what they learned.',
    date: 'Jan 28, 2026',
    readTime: '5 min read',
    featured: false,
  },
  {
    id: 8,
    category: 'student-spotlights',
    title: 'Spotlight: Nadia, Age 7 — "I Taught the Computer to Draw!"',
    excerpt:
      'Nadia\'s journey from shy beginner to confident creator is exactly why we do what we do. Her mum shares the transformation.',
    date: 'Jan 20, 2026',
    readTime: '3 min read',
    featured: false,
  },
  {
    id: 9,
    category: 'ai-fun-facts',
    title: 'Can AI Be Creative? What Children Think About Art and Machines',
    excerpt:
      'We asked our students whether AI can make art. Their answers were surprising, thoughtful, and genuinely inspiring.',
    date: 'Jan 15, 2026',
    readTime: '4 min read',
    featured: false,
  },
];

const categoryColorMap: Record<string, { bg: string; text: string }> = {
  'ai-fun-facts': { bg: 'bg-purple-50', text: 'text-purple-700' },
  'parent-guides': { bg: 'bg-emerald-50', text: 'text-emerald-700' },
  'workshop-recaps': { bg: 'bg-amber-50', text: 'text-amber-700' },
  'student-spotlights': { bg: 'bg-rose-50', text: 'text-rose-700' },
};

function getCategoryLabel(id: string): string {
  return categories.find((c) => c.id === id)?.label ?? id;
}

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState<Category>('all');
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
    <div>
      {/* ─── HERO ─── */}
      <section className="relative overflow-hidden bg-kurai-dark px-6 py-28 text-white md:py-32">
        <div className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-kurai-royal/20 blur-3xl" />
        <div className="relative mx-auto max-w-4xl text-center">
          <p className="font-body text-sm font-medium uppercase tracking-[0.2em] text-kurai-light">
            Blog &amp; Resources
          </p>
          <h1 className="mt-6 font-heading text-4xl font-bold leading-[1.1] tracking-tight md:text-6xl">
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
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-kurai-royal">
              Featured
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold text-kurai-dark md:text-4xl">
              Editor&apos;s Picks
            </h2>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {featuredPosts.map((post) => {
              const color = categoryColorMap[post.category];
              return (
                <article
                  key={post.id}
                  className="group flex flex-col rounded-2xl border border-kurai-ice bg-white transition-shadow hover:shadow-lg"
                >
                  {post.image ? (
                    <img
                      src={post.image}
                      alt={post.title}
                      className="h-48 w-full rounded-t-2xl object-cover"
                    />
                  ) : (
                    <div className="h-48 rounded-t-2xl bg-gradient-to-br from-kurai-ice to-kurai-light/20" />
                  )}
                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-center gap-3">
                      <span
                        className={`rounded-full px-3 py-1 font-body text-[10px] font-semibold uppercase tracking-wider ${color.bg} ${color.text}`}
                      >
                        {getCategoryLabel(post.category)}
                      </span>
                      <span className="flex items-center gap-1 font-body text-xs text-kurai-dark-60">
                        <Clock className="h-3 w-3" />
                        {post.readTime}
                      </span>
                    </div>
                    <h3 className="mt-4 font-heading text-lg font-semibold text-kurai-dark group-hover:text-kurai-royal">
                      {post.title}
                    </h3>
                    <p className="mt-2 flex-1 font-body text-sm leading-relaxed text-kurai-dark-60">
                      {post.excerpt}
                    </p>
                    <div className="mt-4 flex items-center justify-between">
                      <span className="font-body text-xs text-kurai-dark-60">{post.date}</span>
                      <span className="inline-flex items-center gap-1 font-body text-sm font-semibold text-kurai-royal opacity-0 transition-opacity group-hover:opacity-100">
                        Read more <ArrowRight className="h-3.5 w-3.5" />
                      </span>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── ALL POSTS WITH FILTER ─── */}
      <section className="bg-kurai-ice/50 px-6 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-kurai-royal">
              Browse
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold text-kurai-dark md:text-4xl">
              All Articles
            </h2>
          </div>

          {/* Category Filter */}
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 font-body text-sm font-medium transition-all ${
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
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((post) => {
              const color = categoryColorMap[post.category];
              return (
                <article
                  key={post.id}
                  className="group rounded-2xl border border-kurai-ice bg-white p-6 transition-shadow hover:shadow-md"
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`inline-flex items-center gap-1 rounded-full px-3 py-1 font-body text-[10px] font-semibold uppercase tracking-wider ${color.bg} ${color.text}`}
                    >
                      <Tag className="h-3 w-3" />
                      {getCategoryLabel(post.category)}
                    </span>
                  </div>
                  <h3 className="mt-4 font-heading text-base font-semibold text-kurai-dark group-hover:text-kurai-royal">
                    {post.title}
                  </h3>
                  <p className="mt-2 font-body text-sm leading-relaxed text-kurai-dark-60">
                    {post.excerpt}
                  </p>
                  <div className="mt-4 flex items-center justify-between text-xs text-kurai-dark-60">
                    <span className="font-body">{post.date}</span>
                    <span className="flex items-center gap-1 font-body">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </span>
                  </div>
                </article>
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
      <section className="bg-kurai-dark px-6 py-20 text-white md:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-kurai-light">
            Stay Updated
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold md:text-4xl">
            Get the Latest from KURAI
          </h2>
          <p className="mx-auto mt-4 max-w-xl font-body text-kurai-light-soft">
            Subscribe to our newsletter for AI fun facts, parent tips, upcoming events,
            and exclusive early-bird offers.
          </p>
          {nlStatus === 'success' ? (
            <div className="mx-auto mt-8 flex items-center justify-center gap-2 text-green-400">
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
                  className="rounded-lg bg-kurai-royal px-6 py-3 font-body text-sm font-semibold text-white transition-colors hover:bg-kurai-royal-light disabled:opacity-50"
                >
                  {nlStatus === 'sending' ? 'Subscribing...' : 'Subscribe'}
                </button>
              </form>
              <p className="mt-3 font-body text-xs text-kurai-dark-60">
                No spam, ever. Unsubscribe anytime.
              </p>
            </>
          )}
        </div>
      </section>

      {/* ─── BOTTOM CTA ─── */}
      <section className="relative overflow-hidden bg-kurai-royal px-6 py-16 text-white">
        <div className="pointer-events-none absolute -right-20 -top-20 h-[300px] w-[300px] rounded-full bg-white/5 blur-3xl" />
        <div className="relative mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-2xl font-bold md:text-3xl">
            Curious about KURAI? Experience it first-hand.
          </h2>
          <p className="mx-auto mt-3 max-w-xl font-body text-white/80">
            Book a free trial class and see why parents trust us with their children&apos;s tech education.
          </p>
          <Link
            to="/free-trial"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-white px-8 py-3.5 font-body text-sm font-semibold text-kurai-royal shadow-lg transition-all hover:bg-kurai-ice hover:shadow-xl"
          >
            Book a Free Trial
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
