import { Link } from "react-router-dom";

export default function SkillChip({ skill }: { skill: string }) {
  return (
    <Link
      to={`/skills?tag=${encodeURIComponent(skill)}`}
      className="rounded border border-line bg-surface px-2.5 py-1 font-mono text-[11px] text-ink-muted transition-colors hover:border-accent hover:text-accent"
    >
      {skill}
    </Link>
  );
}
