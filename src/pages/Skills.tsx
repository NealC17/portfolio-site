import { useSearchParams, Link } from "react-router-dom";
import { X } from "lucide-react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { SKILLS } from "../data/skills";
import { projects } from "../data/projects";
import { experience } from "../data/experience";
import { itemTitle, itemHref } from "../data/timeline";
import type { TimelineItem } from "../data/types";

const allItems: TimelineItem[] = [...projects, ...experience];

export default function Skills() {
  const [params, setParams] = useSearchParams();
  const activeTag = params.get("tag");

  const matches = activeTag ? allItems.filter((i) => i.skills.includes(activeTag)) : [];

  const setTag = (tag: string) => setParams({ tag });
  const clearTag = () => setParams({});

  return (
    <div>
      <NavBar />
      <main className="mx-auto max-w-content px-6 pb-20 pt-10">
        <h1 className="font-display text-3xl font-bold tracking-tight text-ink">Skills</h1>
        <p className="mt-3 max-w-[520px] font-body text-[15px] text-ink-muted">
          Click any skill to see the projects and work that used it.
        </p>

        <div className="mt-10 flex flex-col gap-7">
          {SKILLS.map((group) => (
            <div key={group.label}>
              <p className="mb-3 font-mono text-[11px] uppercase tracking-wide text-ink-faint">{group.label}</p>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => {
                  const active = activeTag === item;
                  return (
                    <button
                      key={item}
                      onClick={() => setTag(item)}
                      className={`rounded font-mono text-[12px] px-2.5 py-1.5 transition-colors ${
                        active
                          ? "border border-accent bg-accent text-bg"
                          : "border border-line bg-surface text-ink-muted hover:border-accent hover:text-accent"
                      }`}
                    >
                      {item}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {activeTag && (
          <div className="mt-14 border-t border-line pt-8">
            <div className="mb-5 flex items-center gap-3">
              <p className="font-mono text-[13px] text-ink-muted">
                tagged: <span className="text-accent">{activeTag}</span>
              </p>
              <button
                onClick={clearTag}
                aria-label="Clear filter"
                className="flex items-center text-ink-faint hover:text-ink-soft"
              >
                <X size={14} />
              </button>
            </div>
            {matches.length === 0 ? (
              <p className="font-body text-[14px] text-ink-faint">Nothing tagged with this skill yet.</p>
            ) : (
              <div className="flex flex-col gap-1">
                {matches.map((item) => (
                  <Link
                    key={`${item.type}-${item.slug}`}
                    to={itemHref(item)}
                    className="group flex items-baseline justify-between gap-4 border-b border-line py-3"
                  >
                    <span className="font-body text-[15px] text-ink-soft transition-colors group-hover:text-accent">
                      {itemTitle(item)}
                    </span>
                    <span className="shrink-0 font-mono text-[11px] text-ink-faint">{item.dateLabel}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
