import React from "react";
import { ArrowUpRight } from "lucide-react";
import { CONTACT } from "../data/content.js";

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid var(--line)",
        padding: "36px 0 60px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: 16,
      }}
    >
      <p className="font-mono" style={{ fontSize: 12, color: "var(--ink-mute)", margin: 0 }}>
        neal chandra — {CONTACT.location}
      </p>
      <a
        href={`mailto:${CONTACT.email}`}
        className="font-mono link-underline"
        style={{ fontSize: 13, display: "flex", alignItems: "center", gap: 6 }}
      >
        say hello <ArrowUpRight size={14} />
      </a>
    </footer>
  );
}
