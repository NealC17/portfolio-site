import { projects } from "./projects";
import { experience } from "./experience";
import type { TimelineItem } from "./types";

const allItems: TimelineItem[] = [...projects, ...experience];

export function timelineByYear(): { year: number; items: TimelineItem[] }[] {
  const years = Array.from(new Set(allItems.map((i) => i.year))).sort((a, b) => b - a);
  return years.map((year) => ({
    year,
    items: allItems.filter((i) => i.year === year), // kept in authored order
  }));
}

export function itemTitle(item: TimelineItem): string {
  return item.type === "project" ? item.title : `${item.role} — ${item.company}`;
}

export function itemHref(item: TimelineItem): string {
  return item.type === "project" ? `/projects/${item.slug}` : `/experience/${item.slug}`;
}

export function markerColor(item: TimelineItem): string {
  if (item.type === "experience") return "bg-copper";
  if (item.category === "Research") return "bg-research";
  return "bg-accent";
}
