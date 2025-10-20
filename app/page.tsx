import { CatnipMeter } from "./components/CatnipMeter";

const highlights = [
  {
    title: "Sunbeam Forecast",
    blurb:
      "Track the warmest windowsills across the neighborhood with hourly glare charts.",
    detail: "Includes humidity-to-fluffiness conversions for optimal loafing.",
  },
  {
    title: "Kitchen Recon",
    blurb:
      "Nightly reports on treat drawer openings, crinkle bag intel, and fridge raids.",
    detail: "Compiled by covert whisker operatives with 100% stealth success.",
  },
  {
    title: "Nap Engineering",
    blurb:
      "Architect-approved pillow placements and blanket fort geometries for supreme naps.",
    detail: "Textured diagrams annotated with kneading efficiency metrics.",
  },
];

const issues = [
  {
    id: "No. 48",
    theme: "The Midnight Rumble Issue",
    excerpt:
      "Analyzing why zoomies peak at 3:07 AM and how to maximize hallway echo acoustics.",
  },
  {
    id: "No. 47",
    theme: "Cardboard City Annual",
    excerpt:
      "Blueprints for converting shipping boxes into multi-level condo towers.",
  },
  {
    id: "No. 46",
    theme: "Gourmet Kibble Companion",
    excerpt:
      "Pairing notes for pate, pâtisserie-grade lick techniques, and crunchability ratings.",
  },
];

const testimonials = [
  {
    name: "Princess Mittens",
    role: "Window Sill Critic",
    quote:
      "Finally, a publication that respects my sunrise rituals. Five purrs out of five.",
  },
  {
    name: "Sir Biscuit",
    role: "Treat Logistics Supervisor",
    quote:
      "Their kitchen intel maps the fastest route to crunch central. Absolutely worth the whisker tax.",
  },
  {
    name: "Captain Whiskers",
    role: "International Zoomies Athlete",
    quote:
      "The stretching drills unlocked an extra lap around the couch. Elite coaching.",
  },
];

function PawDivider() {
  return (
    <div className="flex items-center gap-3 text-paw/40">
      <span className="h-px flex-1 bg-paw/20" />
      <span aria-hidden className="text-lg">
        🐾
      </span>
      <span className="h-px flex-1 bg-paw/20" />
    </div>
  );
}

export default function Home() {
  return (
    <main className="relative isolate min-h-screen overflow-hidden pb-24">
      <div className="pointer-events-none absolute inset-x-0 top-[-10%] mx-auto h-[520px] max-w-5xl rounded-full bg-gradient-to-b from-sunbeam/70 via-mint/20 to-transparent blur-3xl" />

      <section className="relative mx-auto flex max-w-6xl flex-col gap-16 px-6 pt-20 sm:px-10 md:flex-row md:items-start md:pt-28 lg:px-12">
        <div className="flex-1 space-y-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-tabby/30 bg-cream/80 px-3 py-1 text-xs font-medium uppercase tracking-[0.35em] text-tabby/80">
            Meowletter
          </span>
          <div className="space-y-5">
            <h1 className="text-balance font-medium text-4xl leading-tight text-paw md:text-5xl lg:text-[3.25rem]">
              Whisker Weekly <span className="scribble text-tabby">Premium</span>{" "}
              dispatches for felines with refined taste.
            </h1>
            <p className="text-pretty text-base text-paw/80 md:text-lg">
              Curated by a council of long-haired elders, every issue delivers
              sunbeam analytics, gourmet kibble critiques, and midnight zoomie
              drills for the cosmopolitan cat. No humans. No dogs. Just pure,
              indulgent mews.
            </p>
          </div>
          <div className="grid gap-6 rounded-3xl border border-tabby/40 bg-cream/70 p-6 backdrop-blur">
            <form className="grid gap-4 sm:grid-cols-2">
              <div className="col-span-full">
                <label className="flex flex-col gap-2 text-sm text-paw/80">
                  Official Cat Name
                  <input
                    required
                    placeholder="e.g. Duchess Flufflebottom III"
                    className="rounded-2xl border border-paw/10 bg-white/80 px-4 py-3 text-base shadow-sm transition focus:border-tabby focus:outline-none focus:ring-2 focus:ring-sunbeam/60"
                    name="felineName"
                    type="text"
                  />
                </label>
              </div>
              <label className="flex flex-col gap-2 text-sm text-paw/80">
                Preferred Nap Spot
                <input
                  required
                  placeholder="Top of the forbidden bookshelf"
                  className="rounded-2xl border border-paw/10 bg-white/80 px-4 py-3 text-base shadow-sm transition focus:border-tabby focus:outline-none focus:ring-2 focus:ring-sunbeam/60"
                  name="napSpot"
                  type="text"
                />
              </label>
              <label className="flex flex-col gap-2 text-sm text-paw/80">
                Fur Pattern
                <select
                  className="rounded-2xl border border-paw/10 bg-white/80 px-4 py-3 text-base shadow-sm transition focus:border-tabby focus:outline-none focus:ring-2 focus:ring-sunbeam/60"
                  name="furPattern"
                  required
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select
                  </option>
                  <option value="tuxedo">Distinguished Tuxedo</option>
                  <option value="tabby">Classic Tabby</option>
                  <option value="void">Midnight Void</option>
                  <option value="calico">Calico Chaos</option>
                  <option value="floof">Long-Haired Luxury</option>
                </select>
              </label>
              <label className="flex flex-col gap-2 text-sm text-paw/80 sm:col-span-2">
                Proof of Cathood
                <div className="grid gap-3 rounded-2xl border border-paw/10 bg-white/70 p-3 text-sm text-paw/70">
                  <label className="flex items-center gap-3 rounded-xl bg-white/70 px-3 py-2 shadow-sm">
                    <input type="checkbox" name="pushesThings" className="size-4 accent-tabby" />{" "}
                    Expert in gravity testing from elevated surfaces
                  </label>
                  <label className="flex items-center gap-3 rounded-xl bg-white/70 px-3 py-2 shadow-sm">
                    <input type="checkbox" name="purrs" className="size-4 accent-tabby" />{" "}
                    Certified purring machine with knead-ful instincts
                  </label>
                  <label className="flex items-center gap-3 rounded-xl bg-white/70 px-3 py-2 shadow-sm">
                    <input type="checkbox" name="sunbeam" className="size-4 accent-tabby" />{" "}
                    Possesses advanced sunbeam tracking capabilities
                  </label>
                </div>
              </label>
              <button
                type="submit"
                className="col-span-full inline-flex items-center justify-center gap-2 rounded-full bg-tabby px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-cream shadow-lg shadow-tabby/30 transition hover:translate-y-0.5 hover:bg-tabby/90 active:translate-y-1"
              >
                Request Meowthorization
                <span aria-hidden>↗</span>
              </button>
            </form>
            <p className="flex items-center gap-2 text-xs text-paw/70">
              <span className="h-2.5 w-2.5 rounded-full bg-mint" />
              Whisker Weekly is paw-printed weekly during prime siesta hours.
            </p>
          </div>
        </div>

        <aside className="flex-1 space-y-6 md:max-w-sm">
          <div className="relative overflow-hidden rounded-[32px] border border-paw/10 bg-paw text-cream shadow-[0_30px_60px_rgba(24,22,36,0.35)]">
            <div className="absolute inset-0 paw-grid opacity-40" />
            <div className="relative space-y-5 p-6">
              <div className="flex items-center justify-between">
                <p className="text-xs uppercase tracking-[0.4em]">Issue</p>
                <span className="rounded-full bg-cream/20 px-3 py-1 text-xs font-medium">
                  No. 49
                </span>
              </div>
              <h2 className="scribble text-3xl text-sunbeam">Foiled Again!</h2>
              <p className="text-sm text-cream/80">
                In this week&apos;s cover story we debrief the glass-of-water
                incident, rank the top 7 crinkle balls, and diagram the ideal
                blanket burrito formation.
              </p>
              <div className="rounded-3xl border border-cream/20 bg-cream/10 p-4 text-cream/90">
                <p className="text-xs font-semibold uppercase tracking-[0.3em]">
                  Tonight&apos;s Agenda
                </p>
                <ul className="mt-3 space-y-2 text-sm">
                  <li>21:30 • Inspect every door that is slightly ajar</li>
                  <li>22:45 • Solo parkour across the kitchen counters</li>
                  <li>02:10 • Wake the human (gentle face pat)</li>
                </ul>
              </div>
            </div>
          </div>
          <CatnipMeter />
          <div className="rounded-3xl border border-mint/40 bg-mint/20 p-6 text-sm text-paw/80">
            <p className="font-semibold text-paw">Friends of the Meowpress</p>
            <p className="mt-2">
              Share your favorite window seat and we&apos;ll feature it in the
              Sunbeam Atlas, the definitive guide to radiant lounging.
            </p>
          </div>
        </aside>
      </section>

      <section className="mx-auto mt-20 max-w-6xl space-y-12 px-6 sm:px-10 lg:px-12">
        <PawDivider />
        <div className="grid gap-6 md:grid-cols-3">
          {highlights.map((highlight) => (
            <article
              key={highlight.title}
              className="rounded-3xl border border-paw/10 bg-white/80 p-6 soft-card transition hover:-translate-y-1 hover:border-tabby/40 hover:shadow-[0_30px_60px_rgba(193,138,75,0.25)]"
            >
              <p className="text-xs uppercase tracking-[0.35em] text-paw/60">
                {highlight.title}
              </p>
              <h3 className="mt-3 text-lg font-semibold text-paw">
                {highlight.blurb}
              </h3>
              <p className="mt-4 text-sm text-paw/70">{highlight.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-20 max-w-6xl px-6 sm:px-10 lg:px-12">
        <div className="rounded-[40px] border border-paw/10 bg-cream/70 p-8 md:p-12">
          <div className="flex flex-col gap-10 lg:flex-row">
            <div className="flex-1 space-y-4">
              <span className="scribble text-sm text-tabby/80">
                Peek at past issues
              </span>
              <h2 className="text-3xl font-semibold text-paw">
                The whisker archive teases only the juiciest tidbits.
              </h2>
              <p className="text-sm text-paw/70 md:text-base">
                Every edition is paw-crafted with investigative napping,
                high-stakes yarn chases, and tasting notes from credentialed
                kibble sommeliers. Here&apos;s what leaked from the last three
                envelopes.
              </p>
            </div>
            <div className="flex-1 space-y-4">
              {issues.map((issue) => (
                <div
                  key={issue.id}
                  className="rounded-3xl border border-paw/15 bg-white/80 p-6 shadow-sm"
                >
                  <div className="flex items-center justify-between text-xs uppercase tracking-[0.35em] text-paw/50">
                    <span>{issue.id}</span>
                    <span>Exclusive</span>
                  </div>
                  <p className="mt-3 text-lg font-semibold text-paw">
                    {issue.theme}
                  </p>
                  <p className="mt-2 text-sm text-paw/70">{issue.excerpt}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-20 max-w-6xl px-6 sm:px-10 lg:px-12">
        <div className="rounded-[36px] border border-tabby/30 bg-tabby/15 p-8 backdrop-blur md:p-12">
          <div className="grid gap-8 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <figure
                key={testimonial.name}
                className="rounded-3xl border border-white/40 bg-white/40 p-6 text-paw"
              >
                <p className="text-lg font-semibold text-paw">
                  “{testimonial.quote}”
                </p>
                <figcaption className="mt-4 text-sm text-paw/70">
                  <span className="font-semibold text-paw">
                    {testimonial.name}
                  </span>{" "}
                  · {testimonial.role}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <footer className="mx-auto mt-24 max-w-5xl px-6 text-center text-xs text-paw/60 sm:px-10 lg:px-12">
        <PawDivider />
        <p className="mt-6">
          Whisker Weekly is distributed strictly during post-dinner grooming
          sessions. Pawprint imprint © {new Date().getFullYear()} Council of
          Cats. No humans beyond this point.
        </p>
      </footer>
    </main>
  );
}
