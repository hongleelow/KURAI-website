import { useParams, Link, Navigate } from 'react-router-dom';
import SEO from '@/components/SEO';
import {
  ArrowLeft,
  ArrowRight,
  Clock,
  Tag,
  CalendarDays,
} from 'lucide-react';
import {
  getPostBySlug,
  getCategoryLabel,
  categoryColorMap,
  posts,
} from '@/data/blogPosts';
import type { ContentBlock } from '@/data/blogPosts';

function renderBlock(block: ContentBlock, index: number) {
  switch (block.type) {
    case 'paragraph':
      return (
        <p
          key={index}
          className="font-body text-base leading-relaxed text-kurai-dark-80 md:text-lg md:leading-relaxed"
        >
          {block.text}
        </p>
      );
    case 'heading':
      return (
        <h2
          key={index}
          className="font-heading text-xl font-bold text-kurai-dark md:text-2xl"
        >
          {block.text}
        </h2>
      );
    case 'list':
      return (
        <ul
          key={index}
          className="space-y-2 pl-6 font-body text-base leading-relaxed text-kurai-dark-80 md:text-lg"
        >
          {block.items.map((item, i) => (
            <li key={i} className="list-disc">
              {item}
            </li>
          ))}
        </ul>
      );
    case 'callout':
      return (
        <div
          key={index}
          className="rounded-xl border-l-4 border-kurai-royal bg-kurai-royal/5 p-5 md:p-6"
        >
          <p className="font-body text-base leading-relaxed text-kurai-dark-80 md:text-lg">
            {block.text}
          </p>
        </div>
      );
    case 'quote':
      return (
        <blockquote
          key={index}
          className="border-l-4 border-kurai-amber/40 pl-5 md:pl-6"
        >
          <p className="font-body text-base italic leading-relaxed text-kurai-dark-80 md:text-lg">
            &ldquo;{block.text}&rdquo;
          </p>
          {block.attribution && (
            <cite className="mt-2 block font-body text-sm font-medium not-italic text-kurai-dark-60">
              — {block.attribution}
            </cite>
          )}
        </blockquote>
      );
    default:
      return null;
  }
}

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : undefined;

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const color = categoryColorMap[post.category];

  // Find previous and next posts for navigation
  const currentIndex = posts.findIndex((p) => p.id === post.id);
  const prevPost = currentIndex > 0 ? posts[currentIndex - 1] : null;
  const nextPost =
    currentIndex < posts.length - 1 ? posts[currentIndex + 1] : null;

  // Related posts: same category, excluding current, max 3
  const relatedPosts = posts
    .filter((p) => p.category === post.category && p.id !== post.id)
    .slice(0, 3);

  const postUrl = `https://kurai.edu.my/blog/${post.slug}`;

  const blogPostingSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.isoDate,
    url: postUrl,
    mainEntityOfPage: postUrl,
    image: post.image
      ? `https://kurai.edu.my${post.image}`
      : 'https://kurai.edu.my/images/facility.jpg',
    author: {
      '@type': 'Organization',
      name: 'KURAI',
      url: 'https://kurai.edu.my',
    },
    publisher: {
      '@type': 'Organization',
      name: 'KURAI',
      url: 'https://kurai.edu.my',
      logo: {
        '@type': 'ImageObject',
        url: 'https://kurai.edu.my/images/logo.png',
      },
    },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://kurai.edu.my',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Blog',
        item: 'https://kurai.edu.my/blog',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: post.title,
        item: postUrl,
      },
    ],
  };

  return (
    <>
      <SEO
        title={`${post.title} | KURAI Blog`}
        description={post.excerpt}
        path={`/blog/${post.slug}`}
        ogType="article"
        ogImage={
          post.image
            ? `https://kurai.edu.my${post.image}`
            : undefined
        }
        jsonLd={[blogPostingSchema, breadcrumbSchema]}
      />
      <div>
        {/* Hero */}
        <section className="relative overflow-hidden bg-kurai-dark px-5 py-16 text-white sm:px-6 sm:py-20 md:py-28">
          {post.image && (
            <div className="absolute inset-0">
              <picture>
                <source srcSet={post.image.replace(/\.(jpg|png)$/, '.webp')} type="image/webp" />
                <img
                  src={post.image}
                  alt=""
                  className="h-full w-full object-cover opacity-15"
                  loading="lazy"
                />
              </picture>
            </div>
          )}
          <div className="pointer-events-none absolute -right-40 -top-40 h-[300px] w-[300px] md:h-[500px] md:w-[500px] rounded-full bg-kurai-royal/20 blur-3xl" />
          <div className="relative mx-auto max-w-3xl">
            {/* Breadcrumb */}
            <nav
              aria-label="Breadcrumb"
              className="mb-8 flex items-center gap-2 font-body text-sm text-kurai-light-soft"
            >
              <Link
                to="/"
                className="transition-colors hover:text-white"
              >
                Home
              </Link>
              <span>/</span>
              <Link
                to="/blog"
                className="transition-colors hover:text-white"
              >
                Blog
              </Link>
              <span>/</span>
              <span className="text-white/60 line-clamp-1">
                {post.title}
              </span>
            </nav>

            {/* Category & meta */}
            <div className="flex flex-wrap items-center gap-3">
              <span
                className={`rounded-full px-3 py-1 font-body text-xs font-semibold uppercase tracking-wider ${color.bg} ${color.text}`}
              >
                {getCategoryLabel(post.category)}
              </span>
              <span className="flex items-center gap-1.5 font-body text-sm text-kurai-light-soft">
                <CalendarDays className="h-3.5 w-3.5" />
                {post.date}
              </span>
              <span className="flex items-center gap-1.5 font-body text-sm text-kurai-light-soft">
                <Clock className="h-3.5 w-3.5" />
                {post.readTime}
              </span>
            </div>

            <h1 className="mt-5 font-heading text-2xl font-bold leading-tight sm:text-3xl md:text-5xl md:leading-tight">
              {post.title}
            </h1>
            <p className="mt-4 font-body text-lg leading-relaxed text-kurai-light-soft">
              {post.excerpt}
            </p>
          </div>
        </section>

        {/* Featured image (if exists) */}
        {post.image && (
          <div className="mx-auto -mt-8 max-w-3xl px-5 sm:px-6">
            <picture>
              <source srcSet={post.image.replace(/\.(jpg|png)$/, '.webp')} type="image/webp" />
              <img
                src={post.image}
                alt={post.imageAlt || post.title}
                className="w-full rounded-2xl shadow-lg"
                loading="lazy"
              />
            </picture>
          </div>
        )}

        {/* Article body */}
        <article className="px-5 py-12 sm:px-6 sm:py-16 md:py-20">
          <div className="mx-auto max-w-3xl space-y-6">
            {post.content.map((block, index) => renderBlock(block, index))}
          </div>
        </article>

        {/* Tags / back link */}
        <div className="border-t border-kurai-ice px-5 py-6 sm:px-6 sm:py-8">
          <div className="mx-auto flex max-w-3xl items-center justify-between">
            <div className="flex items-center gap-2">
              <Tag className="h-4 w-4 text-kurai-dark-60" />
              <span
                className={`rounded-full px-3 py-1 font-body text-xs font-semibold uppercase tracking-wider ${color.bg} ${color.text}`}
              >
                {getCategoryLabel(post.category)}
              </span>
            </div>
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 font-body text-sm font-semibold text-kurai-royal transition-colors hover:text-kurai-dark"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              All Articles
            </Link>
          </div>
        </div>

        {/* Prev / Next navigation */}
        <div className="border-t border-kurai-ice px-5 py-8 sm:px-6 sm:py-10">
          <div className="mx-auto grid max-w-3xl gap-4 sm:grid-cols-2">
            {prevPost ? (
              <Link
                to={`/blog/${prevPost.slug}`}
                className="group flex flex-col rounded-xl border border-kurai-ice p-5 transition-shadow hover:shadow-md"
              >
                <span className="flex items-center gap-1.5 font-body text-xs font-semibold uppercase tracking-wider text-kurai-dark-60">
                  <ArrowLeft className="h-3 w-3" />
                  Previous
                </span>
                <span className="mt-2 font-heading text-sm font-semibold text-kurai-dark group-hover:text-kurai-royal">
                  {prevPost.title}
                </span>
              </Link>
            ) : (
              <div />
            )}
            {nextPost ? (
              <Link
                to={`/blog/${nextPost.slug}`}
                className="group flex flex-col items-end rounded-xl border border-kurai-ice p-5 text-right transition-shadow hover:shadow-md"
              >
                <span className="flex items-center gap-1.5 font-body text-xs font-semibold uppercase tracking-wider text-kurai-dark-60">
                  Next
                  <ArrowRight className="h-3 w-3" />
                </span>
                <span className="mt-2 font-heading text-sm font-semibold text-kurai-dark group-hover:text-kurai-royal">
                  {nextPost.title}
                </span>
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>

        {/* Related posts */}
        {relatedPosts.length > 0 && (
          <section className="bg-kurai-ice/30 px-5 py-12 sm:px-6 sm:py-16 md:py-20">
            <div className="mx-auto max-w-5xl">
              <h2 className="text-center font-heading text-2xl font-bold text-kurai-dark md:text-3xl">
                More in {getCategoryLabel(post.category)}
              </h2>
              <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {relatedPosts.map((related) => {
                  const relatedColor = categoryColorMap[related.category];
                  return (
                    <Link
                      key={related.id}
                      to={`/blog/${related.slug}`}
                      className="group rounded-2xl border border-kurai-ice bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
                    >
                      <span
                        className={`inline-flex items-center gap-1 rounded-full px-3 py-1 font-body text-xs font-semibold uppercase tracking-wider ${relatedColor.bg} ${relatedColor.text}`}
                      >
                        <Tag className="h-3 w-3" />
                        {getCategoryLabel(related.category)}
                      </span>
                      <h3 className="mt-3 font-heading text-lg font-semibold text-kurai-dark group-hover:text-kurai-royal">
                        {related.title}
                      </h3>
                      <p className="mt-2 font-body text-sm leading-relaxed text-kurai-dark-60">
                        {related.excerpt}
                      </p>
                      <div className="mt-3 flex items-center gap-3 font-body text-sm text-kurai-dark-60">
                        <span>{related.date}</span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {related.readTime}
                        </span>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        {/* Bottom CTA */}
        <section className="relative overflow-hidden bg-kurai-royal px-5 py-12 text-white sm:px-6 sm:py-16 md:py-20">
          <div className="pointer-events-none absolute -right-20 -top-20 h-[300px] w-[300px] rounded-full bg-white/5 blur-3xl" />
          <div className="relative mx-auto max-w-3xl text-center">
            <h2 className="font-heading text-2xl font-bold md:text-3xl">
              Ready to see KURAI in action?
            </h2>
            <p className="mx-auto mt-4 max-w-xl font-body text-lg leading-relaxed text-white/80">
              Book a free trial class for your child and experience structured AI
              and Robotics education first-hand.
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
