import { Link, useParams, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Clock, Linkedin, Twitter, Link2 } from "lucide-react";
import { useState } from "react";
import PageShell from "../components/PageShell";
import { blogPosts, getBlogPost } from "../data/blog";

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getBlogPost(slug) : undefined;
  const [copied, setCopied] = useState(false);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);
  const formatDate = (iso: string) =>
    new Date(iso).toLocaleDateString(undefined, {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* no-op */
    }
  };

  return (
    <PageShell title={`${post.title} · Cross Flows Synergy`} description={post.excerpt}>
      <article className="mx-auto max-w-3xl px-5 pt-12 sm:px-8 sm:pt-20">
        <Link
          to="/blog"
          className="inline-flex items-center gap-1 font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--color-accent)] hover:text-white"
        >
          <ArrowLeft className="h-3.5 w-3.5" /> Back to blog
        </Link>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="mt-6 flex flex-col gap-5"
        >
          <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--color-accent)]">
            {post.category} · {formatDate(post.date)}
          </span>
          <h1 className="font-display text-balance text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            {post.title}
          </h1>
          <p className="text-lg leading-relaxed text-[var(--color-text-muted)]">
            {post.excerpt}
          </p>
          <div className="flex items-center justify-between border-y border-[var(--color-border)] py-4 text-sm">
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-[var(--color-accent)] to-[#3a8dff] font-mono text-[11px] font-semibold text-black">
                {post.author
                  .split(" ")
                  .map((s) => s[0])
                  .slice(0, 2)
                  .join("")}
              </span>
              <div className="leading-tight">
                <div className="font-display font-semibold">{post.author}</div>
                <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-text-muted)]">
                  {post.authorRole}
                </div>
              </div>
            </div>
            <span className="inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-text-muted)]">
              <Clock className="h-3 w-3" /> {post.readMinutes} min read
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-10 overflow-hidden rounded-2xl border border-[var(--color-border)]"
        >
          <img src={post.cover} alt={post.title} className="w-full" loading="lazy" />
        </motion.div>

        <div className="mt-10 flex flex-col gap-8 text-[var(--color-text-primary)]/90">
          <p className="text-lg leading-relaxed">{post.body.intro}</p>
          {post.body.sections.map((s) => (
            <section key={s.heading} className="flex flex-col gap-3">
              <h2 className="font-display text-2xl font-bold tracking-tight">{s.heading}</h2>
              {s.paragraphs.map((p, i) => (
                <p key={i} className="text-base leading-relaxed text-[var(--color-text-primary)]/85">
                  {p}
                </p>
              ))}
            </section>
          ))}
          {post.body.closingQuote && (
            <blockquote className="my-4 border-l-4 border-[var(--color-accent)] bg-[var(--color-surface)] px-6 py-5 italic">
              <p className="font-display text-xl leading-snug text-[var(--color-text-primary)]">
                “{post.body.closingQuote.text}”
              </p>
              <footer className="mt-3 font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--color-accent)]">
                — {post.body.closingQuote.attribution}
              </footer>
            </blockquote>
          )}
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-[var(--color-border)] pt-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-2">
            {post.tags.map((t) => (
              <span
                key={t}
                className="rounded-full border border-[var(--color-border)] bg-[var(--color-surface-2)] px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-text-muted)]"
              >
                #{t}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--color-text-muted)]">
              Share
            </span>
            <a
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}`}
              target="_blank"
              rel="noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--color-border)] text-[var(--color-text-muted)] hover:border-[var(--color-accent)]/60 hover:text-[var(--color-accent)]"
              aria-label="Share on Twitter"
            >
              <Twitter className="h-4 w-4" />
            </a>
            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                typeof window !== "undefined" ? window.location.href : "",
              )}`}
              target="_blank"
              rel="noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--color-border)] text-[var(--color-text-muted)] hover:border-[var(--color-accent)]/60 hover:text-[var(--color-accent)]"
              aria-label="Share on LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <button
              type="button"
              onClick={copyLink}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--color-border)] text-[var(--color-text-muted)] hover:border-[var(--color-accent)]/60 hover:text-[var(--color-accent)]"
              aria-label="Copy link"
            >
              <Link2 className="h-4 w-4" />
            </button>
            {copied && (
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-accent)]">
                Copied
              </span>
            )}
          </div>
        </div>
      </article>

      <section className="mx-auto mt-20 max-w-7xl px-5 sm:px-8">
        <h2 className="font-display text-2xl font-bold tracking-tight">More from the blog</h2>
        <div className="mt-6 grid gap-5 sm:grid-cols-3">
          {related.map((r) => (
            <Link
              key={r.slug}
              to={`/blog/${r.slug}`}
              className="group flex flex-col overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] transition hover:shadow-[0_18px_50px_rgba(0,212,255,0.15)]"
            >
              <div className="aspect-[16/9] overflow-hidden">
                <img
                  src={r.cover}
                  alt={r.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col gap-2 p-5">
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-accent)]">
                  {r.category}
                </span>
                <h3 className="font-display text-base font-semibold leading-snug tracking-tight text-[var(--color-text-primary)] group-hover:text-[var(--color-accent)]">
                  {r.title}
                </h3>
                <span className="mt-auto inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-text-muted)]">
                  {formatDate(r.date)} <ArrowRight className="h-3 w-3" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
