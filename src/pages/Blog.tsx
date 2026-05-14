import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Clock, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import PageShell from "../components/PageShell";
import HeroBackground from "../components/HeroBackground";
import SectionHeader from "../components/SectionHeader";
import { blogPosts, blogCategories, type BlogCategory } from "../data/blog";

const PAGE_SIZE = 6;

const categoryAccent: Record<BlogCategory | "All", string> = {
  All: "bg-[var(--color-surface-2)] text-[var(--color-text-primary)]",
  "Product Updates": "bg-[var(--color-accent)]/15 text-[var(--color-accent)]",
  "Industry Insights": "bg-[#9b6bff]/15 text-[#bda0ff]",
  "Case Studies": "bg-[#f5a623]/15 text-[#ffce6e]",
  "Company News": "bg-[#3a8dff]/15 text-[#7af9ff]",
};

export default function Blog() {
  const [category, setCategory] = useState<"All" | BlogCategory>("All");
  const [page, setPage] = useState(0);

  const filtered = useMemo(() => {
    return category === "All"
      ? blogPosts
      : blogPosts.filter((p) => p.category === category);
  }, [category]);

  const pages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const current = filtered.slice(page * PAGE_SIZE, (page + 1) * PAGE_SIZE);

  const formatDate = (iso: string) =>
    new Date(iso).toLocaleDateString(undefined, {
      year: "numeric",
      month: "short",
      day: "numeric",
    });

  return (
    <PageShell
      title="Blog · Cross Flows Synergy"
      description="Product updates, industry insights, case studies, and company news from the Cross Flows Synergy team."
    >
      <section className="relative isolate overflow-hidden">
        <HeroBackground variant="subtle" />
        <div className="relative mx-auto max-w-7xl px-5 pb-12 pt-20 sm:px-8 sm:pt-28">
          <SectionHeader
            label="Blog"
            heading="Notes from the team building enterprise AI in production."
            subheading="Product launches, hard-won lessons from customer rollouts, and our take on where conversational AI is actually going."
            maxWidth="max-w-3xl"
          />
        </div>
      </section>

      <section className="sticky top-16 z-30 border-y border-[var(--color-border)] bg-[var(--color-bg)]/85 py-4 backdrop-blur-xl sm:top-[72px]">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-2 px-5 sm:px-8">
          {blogCategories.map((c) => {
            const active = category === c;
            return (
              <button
                key={c}
                type="button"
                onClick={() => {
                  setCategory(c);
                  setPage(0);
                }}
                className={
                  "rounded-full border px-4 py-1.5 text-xs transition " +
                  (active
                    ? "border-[var(--color-accent)] bg-[var(--color-accent)]/15 text-[var(--color-accent)]"
                    : "border-[var(--color-border)] text-[var(--color-text-primary)]/80 hover:border-[var(--color-accent)]/40")
                }
              >
                {c}
              </button>
            );
          })}
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {current.map((post, idx) => (
                <motion.article
                  key={post.slug}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 12 }}
                  transition={{ duration: 0.45, delay: idx * 0.05 }}
                  whileHover={{ y: -6 }}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] transition hover:shadow-[0_20px_60px_rgba(0,212,255,0.18)]"
                >
                  <Link to={`/blog/${post.slug}`} className="flex h-full flex-col">
                    <div className="relative aspect-[16/9] overflow-hidden">
                      <img
                        src={post.cover}
                        alt={post.title}
                        loading="lazy"
                        className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      <span
                        className={
                          "absolute left-4 top-4 rounded-full px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.18em] " +
                          categoryAccent[post.category]
                        }
                      >
                        {post.category}
                      </span>
                    </div>
                    <div className="flex flex-1 flex-col gap-3 p-6">
                      <h3 className="font-display text-lg font-bold leading-tight tracking-tight text-[var(--color-text-primary)] transition group-hover:text-[var(--color-accent)]">
                        {post.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-[var(--color-text-muted)]">
                        {post.excerpt}
                      </p>
                      <div className="mt-auto flex items-center justify-between pt-3 text-xs text-[var(--color-text-muted)]">
                        <div className="flex items-center gap-2">
                          <span
                            className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-[var(--color-accent)] to-[#3a8dff] font-mono text-[10px] font-semibold text-black"
                            aria-hidden="true"
                          >
                            {post.author
                              .split(" ")
                              .map((s) => s[0])
                              .slice(0, 2)
                              .join("")}
                          </span>
                          <div>
                            <div className="font-medium text-[var(--color-text-primary)]">
                              {post.author}
                            </div>
                            <div className="font-mono text-[10px] uppercase tracking-[0.16em]">
                              {formatDate(post.date)}
                            </div>
                          </div>
                        </div>
                        <span className="inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-[0.18em]">
                          <Clock className="h-3 w-3" />
                          {post.readMinutes} min
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>

          {filtered.length === 0 && (
            <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-12 text-center">
              <p className="font-display text-xl font-semibold">
                No posts in this category yet.
              </p>
              <p className="mt-2 text-sm text-[var(--color-text-muted)]">
                Try another tab — or come back next week.
              </p>
            </div>
          )}

          {pages > 1 && (
            <div className="mt-14 flex items-center justify-center gap-4">
              <button
                type="button"
                onClick={() => setPage((p) => Math.max(0, p - 1))}
                disabled={page === 0}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-border)] text-[var(--color-text-primary)] transition hover:border-[var(--color-accent)]/60 disabled:opacity-30"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <span className="font-mono text-xs uppercase tracking-[0.22em] text-[var(--color-text-muted)]">
                Page {page + 1} of {pages}
              </span>
              <button
                type="button"
                onClick={() => setPage((p) => Math.min(pages - 1, p + 1))}
                disabled={page >= pages - 1}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-border)] text-[var(--color-text-primary)] transition hover:border-[var(--color-accent)]/60 disabled:opacity-30"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          )}
        </div>
      </section>

      <section className="border-t border-[var(--color-border)] py-16">
        <div className="mx-auto flex max-w-4xl flex-col gap-6 px-5 text-center sm:px-8">
          <SectionHeader
            label="Stay in the loop"
            heading="One thoughtful email a month. No marketing noise."
            align="center"
          />
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const data = new FormData(e.currentTarget);
              console.log("[Newsletter signup]", Object.fromEntries(data.entries()));
              (e.currentTarget as HTMLFormElement).reset();
              alert("You’re in. Welcome.");
            }}
            className="mx-auto flex w-full max-w-md flex-col gap-3 sm:flex-row"
          >
            <input
              type="email"
              name="email"
              required
              placeholder="you@company.com"
              className="flex-1 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)]/70 px-5 py-3 text-sm text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] focus:border-[var(--color-accent)] focus:outline-none"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--color-accent)] px-5 py-3 font-display text-sm font-semibold text-black transition hover:scale-[1.03] active:scale-95"
            >
              Subscribe
              <ArrowRight className="h-4 w-4" />
            </button>
          </form>
        </div>
      </section>
    </PageShell>
  );
}
