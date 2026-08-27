import { CONTACT } from "../data/contact";

export default function Hero() {
  return (
    <section className="px-6 pb-16 pt-20 sm:pt-28">
      <div className="mx-auto max-w-content">
        <h1 className="font-display text-[clamp(36px,6vw,56px)] font-bold leading-[1.05] tracking-tight text-ink">
          {CONTACT.name}
        </h1>
        <p className="mt-4 font-display text-xl text-ink-muted sm:text-2xl">Computer Engineering</p>
        <p className="mt-2 font-mono text-[13px] tracking-wide text-accent sm:text-sm">
          Machine Learning · Embedded Systems · FPGA · Signal Processing
        </p>
      </div>
    </section>
  );
}
