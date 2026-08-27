import { Link } from "react-router-dom";
import { timelineByYear, itemTitle, itemHref, markerColor } from "../data/timeline";
import { useReveal } from "../hooks/useReveal";
import type { TimelineItem } from "../data/types";

function TimelineRow({ item, showYear, year }: { item: TimelineItem; showYear: boolean; year: number }) {
  const [ref, visible] = useReveal<HTMLDivElement>();
  const meta = item.type === "project" ? item.category : item.company;

  return (
    <div
      ref={ref}
      className={`flex gap-4 py-2 transition-all duration-500 ${
        visible ? "translate-x-0 opacity-100" : "-translate-x-2 opacity-0"
      }`}
    >
      <div className="w-12 shrink-0 pt-[3px] text-right font-mono text-[13px] text-ink-faint">
        {showYear ? year : ""}
      </div>
      <div className="relative flex w-4 shrink-0 justify-center">
        <span className="absolute inset-y-0 w-px bg-line" aria-hidden="true" />
        <span className={`relative z-10 mt-[7px] h-2.5 w-2.5 shrink-0 rounded-full ${markerColor(item)} ring-4 ring-bg`} />
      </div>
      <Link to={itemHref(item)} className="group flex flex-1 flex-wrap items-baseline gap-x-3 gap-y-0.5 pb-1">
        <span className="font-body text-[15px] text-ink-soft transition-colors group-hover:text-accent">
          {itemTitle(item)}
        </span>
        <span className="font-mono text-[11px] text-ink-faint">{meta}</span>
      </Link>
    </div>
  );
}

export default function Timeline() {
  const groups = timelineByYear();

  return (
    <section id="timeline" className="scroll-mt-20 px-6 pb-24">
      <div className="mx-auto max-w-content">
        <div className="mb-8 flex items-center gap-3">
          <h2 className="font-display text-lg font-semibold text-ink">2026 — 2018</h2>
          <span className="h-px flex-1 bg-line" />
          <span className="font-mono text-[11px] text-ink-faint">click any entry</span>
        </div>

        <div className="flex flex-col">
          {groups.map((group) =>
            group.items.map((item, idx) => (
              <TimelineRow key={`${item.type}-${item.slug}`} item={item} year={group.year} showYear={idx === 0} />
            ))
          )}
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-5 font-mono text-[11px] text-ink-faint">
          <span className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-accent" /> project
          </span>
          <span className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-research" /> research
          </span>
          <span className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-copper" /> work
          </span>
        </div>
      </div>
    </section>
  );
}
