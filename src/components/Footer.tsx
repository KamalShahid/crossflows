import { Link } from "react-router-dom";
import { Linkedin, Twitter, Youtube, Github } from "lucide-react";
import LogoMark from "./LogoMark";
import { products } from "../data/products";

const sections = [
  {
    title: "Products",
    links: products.map((p) => ({ label: p.name, to: `/products/${p.slug}` })),
  },
  {
    title: "Company",
    links: [
      { label: "Industries", to: "/industries" },
      { label: "Use Cases", to: "/use-cases" },
      { label: "Features", to: "/features" },
      { label: "Contact", to: "/contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", to: "/blog" },
      { label: "Documentation", to: "#" },
      { label: "Trust Center", to: "#" },
      { label: "Status", to: "#" },
    ],
  },
];

const socials = [
  { label: "LinkedIn", icon: Linkedin, href: "#" },
  { label: "Twitter / X", icon: Twitter, href: "#" },
  { label: "YouTube", icon: Youtube, href: "#" },
  { label: "GitHub", icon: Github, href: "#" },
];

export default function Footer() {
  return (
    <footer className="relative mt-24 border-t border-[var(--color-border)] bg-[var(--color-bg)]">
      <div className="pointer-events-none absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-[var(--color-accent)]/40 to-transparent" />
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-5">
            <LogoMark size={36} />
            <p className="max-w-xs text-sm leading-relaxed text-[var(--color-text-muted)]">
              Where intelligence meets action. Enterprise-grade AI for voice, drive-thru,
              learning, and workflow — engineered to ship.
            </p>
            <div className="flex items-center gap-3">
              {socials.map(({ label, icon: Icon, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--color-border)] text-[var(--color-text-muted)] transition hover:border-[var(--color-accent)]/60 hover:text-[var(--color-accent)]"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {sections.map((section) => (
            <div key={section.title} className="flex flex-col gap-4">
              <h3 className="font-mono text-[11px] uppercase tracking-[0.24em] text-[var(--color-accent)]">
                {section.title}
              </h3>
              <ul className="flex flex-col gap-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-sm text-[var(--color-text-primary)]/80 transition hover:text-[var(--color-accent)]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-[var(--color-border)] pt-8 sm:flex-row sm:items-center">
          <p className="text-xs text-[var(--color-text-muted)]">
            © {new Date().getFullYear()} Cross Flows Synergy. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs text-[var(--color-text-muted)]">
            <a href="#" className="transition hover:text-[var(--color-text-primary)]">
              Privacy Policy
            </a>
            <a href="#" className="transition hover:text-[var(--color-text-primary)]">
              Terms of Service
            </a>
            <a href="#" className="transition hover:text-[var(--color-text-primary)]">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
