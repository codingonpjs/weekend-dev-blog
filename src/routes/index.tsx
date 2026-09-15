import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "The Weekend Developer" },
      {
        name: "description",
        content:
          "A minimalist left-aligned blog by The Weekend Developer — notes, essays, and weekend builds.",
      },
      { property: "og:title", content: "The Weekend Developer" },
      {
        property: "og:description",
        content:
          "A minimalist left-aligned blog by The Weekend Developer — notes, essays, and weekend builds.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background px-6 py-10 sm:px-12 sm:py-16">
      <div className="mx-auto max-w-3xl text-left">
        {/* Logo — three stacked lines, typewriter */}
        <header className="mb-10">
          <div className="font-typewriter text-foreground leading-[1.05] text-2xl sm:text-3xl">
            <div className="font-normal">The</div>
            <div className="font-bold">Weekend</div>
            <div className="font-normal">Developer</div>
          </div>
        </header>

        {/* First post */}
        <article className="border-t border-border/70 pt-10">
          <h1 className="font-serif text-[40px] leading-[1.15] font-bold tracking-tight text-foreground">
            Shipping Side Projects on a Saturday Afternoon
          </h1>

          <div className="mt-3 font-sans text-sm font-medium text-muted-foreground">
            <time dateTime="2026-09-15">September 15, 2026</time>
            <span className="mx-2 text-border">·</span>
            <span className="uppercase tracking-wider">Essays</span>
          </div>

          <div className="mt-8 font-sans text-[1.0625rem] leading-[1.75] text-foreground/90 space-y-5">
            <p>
              There is a particular kind of focus that only the weekend allows.
              No standups, no status pings — just the quiet stretch between
              coffee and dusk, and the stubborn urge to finally ship the thing
              you've been sketching all week.
            </p>
            <p>
              The trick isn't finding time. The trick is shrinking the scope
              until the time you have is enough. A single screen. One opinion.
              A feature you can describe in a sentence. Build that, then stop.
            </p>
            <p>
              This is the first of a short series on weekend builds — the small
              tools, the half-finished drafts, the ideas worth more than the
              hours they took. Pull up a chair.
            </p>
          </div>
        </article>
      </div>
    </main>
  );
}
