import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default function NotFound() {
  return (
    <div>
      <NavBar />
      <main className="mx-auto flex max-w-content flex-col items-start px-6 py-24">
        <p className="font-mono text-[13px] text-ink-faint">404</p>
        <h1 className="mt-3 font-display text-2xl font-bold text-ink">Nothing here.</h1>
        <p className="mt-2 font-body text-[15px] text-ink-muted">This page doesn't exist, or the link's out of date.</p>
        <Link to="/" className="link-underline mt-6 font-mono text-[13px] text-accent">
          back to the timeline
        </Link>
      </main>
      <Footer />
    </div>
  );
}
