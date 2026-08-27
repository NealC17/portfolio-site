import { Link, useLocation } from "react-router-dom";
import { Github, FileText } from "lucide-react";
import { CONTACT } from "../data/contact";

const LINKS = [
  { label: "Projects", to: "/#timeline" },
  { label: "Skills", to: "/skills" },
];

export default function NavBar() {
  const location = useLocation();

  const handleProjectsClick = (e: React.MouseEvent) => {
    if (location.pathname === "/") {
      e.preventDefault();
      document.getElementById("timeline")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header className="sticky top-0 z-20 border-b border-line/70 bg-bg/85 backdrop-blur">
      <div className="mx-auto flex max-w-content items-center justify-between px-6 py-4">
        <Link to="/" className="font-display text-[15px] font-semibold tracking-tight text-ink">
          {CONTACT.name}
        </Link>
        <nav className="flex items-center gap-2 font-mono text-[13px]">
          {LINKS.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              onClick={link.label === "Projects" ? handleProjectsClick : undefined}
              className="rounded-full border border-line px-3 py-1.5 text-ink-muted transition-colors hover:border-accent hover:text-accent"
            >
              {link.label}
            </Link>
          ))}
          <a
            href={CONTACT.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 rounded-full border border-line px-3 py-1.5 text-ink-muted transition-colors hover:border-accent hover:text-accent"
          >
            <Github size={13} /> GitHub
          </a>
          <a
            href={CONTACT.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 rounded-full border border-line px-3 py-1.5 text-ink-muted transition-colors hover:border-accent hover:text-accent"
          >
            <FileText size={13} /> Resume
          </a>
        </nav>
      </div>
    </header>
  );
}
