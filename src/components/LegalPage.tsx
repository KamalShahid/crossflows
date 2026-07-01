import { Fragment } from "react";
import PageShell from "./PageShell";
import type { LegalBlock, LegalDocument } from "../data/legal";

interface LegalPageProps {
  doc: LegalDocument;
}

/**
 * Split a string on `**bold**` markers and render each span accordingly.
 * Line breaks (`\n`) are preserved by the caller using `white-space: pre-line`.
 */
function renderInline(text: string): React.ReactNode {
  const parts: Array<{ text: string; bold: boolean }> = [];
  const regex = /\*\*(.+?)\*\*/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null = regex.exec(text);
  while (match !== null) {
    if (match.index > lastIndex) {
      parts.push({ text: text.slice(lastIndex, match.index), bold: false });
    }
    parts.push({ text: match[1], bold: true });
    lastIndex = match.index + match[0].length;
    match = regex.exec(text);
  }
  if (lastIndex < text.length) {
    parts.push({ text: text.slice(lastIndex), bold: false });
  }
  return parts.map((p, i) =>
    p.bold ? (
      <strong key={i} style={{ color: "var(--color-text-primary)", fontWeight: 700 }}>
        {p.text}
      </strong>
    ) : (
      <Fragment key={i}>{p.text}</Fragment>
    ),
  );
}

function BlockRenderer({ block }: { block: LegalBlock }) {
  switch (block.type) {
    case "heading":
      return (
        <h2
          className="font-display"
          style={{
            fontSize: "1.2rem",
            fontWeight: 700,
            color: "var(--color-text-primary)",
            marginTop: 40,
            marginBottom: 16,
            letterSpacing: "-0.01em",
          }}
        >
          {block.text}
        </h2>
      );
    case "subheading":
      return (
        <h3
          className="font-display"
          style={{
            fontSize: "1rem",
            fontWeight: 700,
            color: "var(--color-text-primary)",
            marginTop: 28,
            marginBottom: 12,
          }}
        >
          {block.text}
        </h3>
      );
    case "paragraph":
      return (
        <p
          style={{
            fontFamily: '"DM Sans", sans-serif',
            fontSize: "1rem",
            lineHeight: 1.8,
            color: "var(--color-text-muted)",
            marginBottom: 16,
            whiteSpace: "pre-line",
          }}
        >
          {renderInline(block.text)}
        </p>
      );
    case "list":
      return (
        <ul
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 10,
            marginBottom: 16,
            paddingLeft: 20,
            listStyle: "disc",
            listStyleType: "disc",
          }}
        >
          {block.items.map((item, i) => (
            <li
              key={i}
              style={{
                fontFamily: '"DM Sans", sans-serif',
                fontSize: "1rem",
                lineHeight: 1.8,
                color: "var(--color-text-muted)",
              }}
            >
              {item.label ? (
                <>
                  <strong style={{ color: "var(--color-text-primary)", fontWeight: 700 }}>
                    {item.label}:
                  </strong>{" "}
                </>
              ) : null}
              {renderInline(item.text)}
            </li>
          ))}
        </ul>
      );
  }
}

export default function LegalPage({ doc }: LegalPageProps) {
  return (
    <PageShell
      title={`${doc.title} · Cross Flows Synergy`}
      description={`${doc.title} for Cross Flows Synergy — enterprise AI-powered business communication.`}
    >
      <article
        style={{
          maxWidth: 760,
          margin: "0 auto",
          padding: "80px 24px",
        }}
      >
        {/* Hero */}
        <header style={{ marginBottom: 40 }}>
          <h1
            className="font-display"
            style={{
              fontSize: "clamp(1.8rem, 4vw, 2.6rem)",
              fontWeight: 800,
              letterSpacing: "-0.02em",
              color: "var(--color-text-primary)",
              marginBottom: 12,
              lineHeight: 1.15,
            }}
          >
            {doc.title}
          </h1>
          <div
            style={{
              fontFamily: '"JetBrains Mono", ui-monospace, monospace',
              fontSize: "0.72rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--color-text-muted)",
            }}
          >
            Last updated · {doc.lastUpdated}
          </div>
        </header>

        {/* Body */}
        {doc.blocks.map((block, i) => (
          <BlockRenderer key={i} block={block} />
        ))}
      </article>
    </PageShell>
  );
}
