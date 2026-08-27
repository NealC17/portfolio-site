import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import SkillChip from "../components/SkillChip";
import { projects } from "../data/projects";
import NotFound from "./NotFound";

function Section({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="border-t border-line py-7 first:border-t-0 first:pt-0">
      <p className="mb-3 font-mono text-[11px] uppercase tracking-wide text-ink-faint">{label}</p>
      <div className="max-w-[620px] font-body text-[15px] leading-relaxed text-ink-soft">{children}</div>
    </div>
  );
}

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) return <NotFound />;

  return (
    <div>
      <NavBar />
      <main className="mx-auto max-w-content px-6 pb-20 pt-10">
        <Link
          to="/#timeline"
          className="link-underline mb-8 inline-flex items-center gap-1.5 font-mono text-[13px] text-ink-muted"
        >
          <ArrowLeft size={14} /> timeline
        </Link>

        <div className="mb-2 flex flex-wrap items-center gap-3">
          <span className="font-mono text-[11px] uppercase tracking-wide text-accent">{project.category}</span>
          <span className="font-mono text-[11px] text-ink-faint">{project.dateLabel}</span>
        </div>

        <h1 className="font-display text-[clamp(28px,4.5vw,40px)] font-bold leading-tight tracking-tight text-ink">
          {project.title}
        </h1>

        <p className="mt-3 font-mono text-[13px] text-ink-muted">{project.stack}</p>

        {project.url && (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline mt-4 inline-flex items-center gap-1.5 font-mono text-[13px] text-accent"
          >
            View on GitHub <ArrowUpRight size={14} />
          </a>
        )}

        <div className="mt-10">
          <Section label="Overview">
            <p>{project.overview}</p>
          </Section>

          <Section label="What I Built">
            <p>{project.whatIBuilt}</p>
          </Section>

          {project.architecture && (
            <Section label="Architecture">
              <p>{project.architecture}</p>
            </Section>
          )}

          <Section label="Technologies">
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((t) => (
                <span key={t} className="rounded border border-line bg-surface px-2.5 py-1 font-mono text-[12px] text-ink-muted">
                  {t}
                </span>
              ))}
            </div>
          </Section>

          {project.technicalChallenges && (
            <Section label="Technical Challenges">
              <p>{project.technicalChallenges}</p>
            </Section>
          )}

          {project.results && (
            <Section label="Results">
              <p>{project.results}</p>
            </Section>
          )}

          {project.relevantMath && (
            <Section label="Relevant Math">
              <p>{project.relevantMath}</p>
            </Section>
          )}

          {project.lessonsLearned && (
            <Section label="Lessons Learned">
              <p>{project.lessonsLearned}</p>
            </Section>
          )}

          <Section label="Skills">
            <div className="flex flex-wrap gap-2">
              {project.skills.map((s) => (
                <SkillChip key={s} skill={s} />
              ))}
            </div>
          </Section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
