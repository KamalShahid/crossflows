import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PageShell from "../components/PageShell";
import HeroBackground from "../components/HeroBackground";
import SectionHeader from "../components/SectionHeader";
import CTAButton from "../components/CTAButton";
import SolutionsShowcase from "../components/SolutionsShowcase";
import {
  solutionsSectionHeadline,
  solutionsSectionIntro,
} from "../data/solutions";
import { solutionCategories } from "../data/solutionCategories";
import { bottomCTA } from "../data/home";

export default function Solutions() {
  return (
    <PageShell
      title="Solutions · Cross Flows Synergy"
      description="AI-powered solutions for reception, scheduling, lead qualification, workflow automation, support, communication, scheduling, and operational assistance."
    >
      <section className="relative isolate overflow-hidden">
        <HeroBackground variant="subtle" />
        <div className="relative mx-auto max-w-7xl px-5 pb-12 pt-20 sm:px-8 sm:pt-28">
          <SectionHeader
            label="Solutions"
            heading={solutionsSectionHeadline}
            subheading={solutionsSectionIntro}
            maxWidth="max-w-4xl"
          />
        </div>
      </section>

      {/* Business Problems We Solve — entry points to the 5 category pages */}
      <section className="px-5 pb-10 pt-4 sm:px-8 sm:pb-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            label="Business Problems We Solve"
            heading="Find the Right Solution for Your Business"
            subheading="Explore AI solutions organized around the specific challenges your organization faces."
            maxWidth="max-w-3xl"
          />

          <div
            className="mt-10 grid grid-cols-1 gap-4 lg:grid-cols-2"
            style={{ alignItems: "stretch" }}
          >
            {solutionCategories.map((category, idx) => {
              const Icon = category.listingIcon;
              const isLast =
                idx === solutionCategories.length - 1 &&
                solutionCategories.length % 2 === 1;
              return (
                <motion.div
                  key={category.slug}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10% 0px" }}
                  transition={{
                    duration: 0.4,
                    delay: idx * 0.05,
                    ease: "easeOut",
                  }}
                  className={isLast ? "lg:col-span-2" : undefined}
                >
                  <Link
                    to={`/solutions/${category.slug}`}
                    style={{
                      background: "var(--color-surface)",
                      border: "1px solid var(--color-border)",
                      borderRadius: 16,
                      padding: 24,
                      textDecoration: "none",
                      display: "block",
                      height: "100%",
                      transition:
                        "border-color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease",
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget;
                      el.style.borderColor = "var(--color-accent)";
                      el.style.boxShadow =
                        "0 0 0 1px var(--color-accent), 0 8px 32px rgba(0,212,255,0.1)";
                      el.style.transform = "translateY(-2px)";
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget;
                      el.style.borderColor = "var(--color-border)";
                      el.style.boxShadow = "none";
                      el.style.transform = "translateY(0)";
                    }}
                  >
                    <div
                      style={{
                        width: 44,
                        height: 44,
                        borderRadius: 10,
                        background: "rgba(0,212,255,0.08)",
                        border: "1px solid rgba(0,212,255,0.2)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginBottom: 14,
                      }}
                    >
                      <Icon size={20} color="var(--color-accent)" />
                    </div>

                    <div
                      className="font-display"
                      style={{
                        fontSize: "1rem",
                        fontWeight: 700,
                        color: "var(--color-text-primary)",
                        marginBottom: 8,
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {category.name}
                    </div>

                    <p
                      style={{
                        fontFamily: '"DM Sans", sans-serif',
                        fontSize: "0.82rem",
                        color: "var(--color-text-muted)",
                        lineHeight: 1.6,
                        marginBottom: 14,
                      }}
                    >
                      {category.listingDescription}
                    </p>

                    <div
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: 6,
                      }}
                    >
                      {category.listingItems.map((item) => (
                        <span
                          key={item}
                          style={{
                            fontFamily:
                              '"JetBrains Mono", ui-monospace, monospace',
                            fontSize: "0.62rem",
                            letterSpacing: "0.04em",
                            color: "var(--color-text-muted)",
                            background: "var(--color-surface-2)",
                            border: "1px solid var(--color-border)",
                            borderRadius: 999,
                            padding: "3px 10px",
                          }}
                        >
                          {item}
                        </span>
                      ))}
                    </div>

                    <div
                      style={{
                        marginTop: 16,
                        fontFamily:
                          '"JetBrains Mono", ui-monospace, monospace',
                        fontSize: "0.7rem",
                        letterSpacing: "0.08em",
                        color: "var(--color-accent)",
                        textTransform: "uppercase",
                      }}
                    >
                      Explore →
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <SolutionsShowcase />

      <section className="relative overflow-hidden border-t border-[var(--color-border)] py-24">
        <div className="absolute inset-0 -z-10">
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(60% 50% at 50% 50%, rgba(0,212,255,0.18), transparent 70%)",
            }}
          />
        </div>
        <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
          <SectionHeader
            label={bottomCTA.label}
            heading={bottomCTA.headline}
            subheading={bottomCTA.subheading}
            align="center"
          />
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {bottomCTA.buttons.map((b, idx) => (
              <CTAButton
                key={b.label}
                to={b.to}
                variant={idx === 0 ? "primary" : "secondary"}
                withArrow={idx === 0}
              >
                {b.label}
              </CTAButton>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
