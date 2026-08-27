import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import SkillChip from "../components/SkillChip";
import { experience } from "../data/experience";
import NotFound from "./NotFound";

function Section({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="border-t border-line py-7 first:border-t-0 first:pt-0">
      <p className="mb-3 font-mono text-[11px] uppercase tracking-wide text-ink-faint">{label}</p>
      <div className="max-w-[620px] font-body text-[15px] leading-relaxed text-ink-soft">{children}</div>
    </div>
  );
}

export default function ExperienceDetail() {
  const { slug } = useParams();
  const job = experience.find((e) => e.slug === slug);

  if (!job) return <NotFound />;

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
          <span className="font-mono text-[11px] uppercase tracking-wide text-copper">Work</span>
          <span className="font-mono text-[11px] text-ink-faint">{job.dateLabel}</span>
          <span className="font-mono text-[11px] text-ink-faint">{job.location}</span>
        </div>

        <h1 className="font-display text-[clamp(28px,4.5vw,40px)] font-bold leading-tight tracking-tight text-ink">
          {job.role}
        </h1>
        <p className="mt-2 font-display text-lg text-ink-muted">{job.company}</p>

        <div className="mt-10">
          <Section label="Overview">
            <p>{job.overview}</p>
          </Section>

          <Section label="What I Worked On">
            <p>{job.whatIWorkedOn}</p>
          </Section>

          <Section label="Technologies">
            <div className="flex flex-wrap gap-2">
              {job.technologies.map((t) => (
                <span key={t} className="rounded border border-line bg-surface px-2.5 py-1 font-mono text-[12px] text-ink-muted">
                  {t}
                </span>
              ))}
            </div>
          </Section>

          {job.results && (
            <Section label="Results">
              <p>{job.results}</p>
            </Section>
          )}

          {job.lessonsLearned && (
            <Section label="Lessons Learned">
              <p>{job.lessonsLearned}</p>
            </Section>
          )}

          <Section label="Skills">
            <div className="flex flex-wrap gap-2">
              {job.skills.map((s) => (
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
