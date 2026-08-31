import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "About reminscape — an independent publication.",
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
      <h1
        className="text-[#e8e8ec] text-4xl font-bold mb-8"
        style={{ fontFamily: "Georgia, serif", letterSpacing: "-0.03em" }}
      >
        About reminscape
      </h1>

      <div className="article-body space-y-6">
        <p>
          reminscape is an independent publication. It does not belong to a media conglomerate,
          carry advertising obligations, or answer to shareholders. What it publishes is determined
          solely by what seems worth publishing.
        </p>

        <p>
          The publication covers news, motorsport, technology, gaming, and culture — not as a
          comprehensive news service, but as a considered selection of writing about things that
          seem genuinely interesting and worth reading carefully. The aim is depth over volume.
        </p>

        <p>
          Every article on reminscape is written to be read rather than scanned. That means
          longer pieces, more context, and a willingness to take up space with ideas that resist
          compression into a headline and three bullet points. If that sounds like a different
          reading experience from what most of the internet provides, that is intentional.
        </p>

        <h2>What reminscape covers</h2>

        <p>
          <strong style={{ color: "#e8e8ec" }}>News</strong> — essential reporting on events and
          forces shaping the world, with the context that most news coverage leaves out.
        </p>

        <p>
          <strong style={{ color: "#e8e8ec" }}>Motorsport</strong> — in-depth coverage of Formula
          One, MotoGP, endurance racing, and the engineering that makes it possible. The technical
          story is as interesting as the sporting one.
        </p>

        <p>
          <strong style={{ color: "#e8e8ec" }}>Technology</strong> — critical and curious analysis
          of the technology industry, digital culture, and the platforms that shape how we live
          and work.
        </p>

        <p>
          <strong style={{ color: "#e8e8ec" }}>Gaming</strong> — thoughtful writing about games,
          the industry that makes them, and what they reveal about the people who play them. Gaming
          is the largest entertainment medium in the world; it deserves serious attention.
        </p>

        <p>
          <strong style={{ color: "#e8e8ec" }}>Opinion</strong> — essays and arguments on culture,
          technology, media, and life in the twenty-first century. These pieces represent a point
          of view, clearly labelled as such.
        </p>

        <h2>Contact</h2>

        <p>
          Correspondence, feedback, and editorial enquiries are welcome. This section will be
          updated with contact details when they are available.
        </p>
      </div>
    </div>
  );
}
