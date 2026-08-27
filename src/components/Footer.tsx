import { ArrowUpRight } from "lucide-react";
import { CONTACT } from "../data/contact";

export default function Footer() {
  return (
    <footer className="border-t border-line px-6 py-10">
      <div className="mx-auto flex max-w-content flex-wrap items-center justify-between gap-4">
        <p className="font-mono text-[12px] text-ink-faint">
          {CONTACT.name.toLowerCase()} — {CONTACT.location.toLowerCase()}
        </p>
        <a
          href={`mailto:${CONTACT.email}`}
          className="link-underline flex items-center gap-1.5 font-mono text-[13px] text-ink-soft"
        >
          say hello <ArrowUpRight size={14} />
        </a>
      </div>
    </footer>
  );
}
