
export default function Home() {
  return (

<main className="min-h-screen bg-[#F5F3E9] text-[#204D36] selection:bg-[#A4BE91] selection:text-[#204D36]">

    {/* Navigation */}
      <nav className="flex flex-wrap items-center justify-between gap-4 border-b border-[#A4BE91] px-8 py-6">
        <h1 className="text-xl font-bold tracking-wide">
          HAYATI TECHNOLOGIES
        </h1>
        <div className="flex gap-6 text-sm font-medium">
          <a href="#mission">Mission</a>
          <a href="#projects">Projects</a>
          <a href="#explore">Explore</a>
        </div>
      </nav>



    {/* Hero text */}
    

{/* Hero image */}
<div className="relative mx-auto mb-14 w-full max-w-[600px]">
  <img
    src="/images/cloud lake photos best stone mntn atlanta.jpg"
    alt="Clouds reflected over a peaceful forest lake"
    className="h-auto w-full rounded-3xl"
  />

  {/* Main company title */}
  <div className="absolute inset-0 flex -translate-y-4 items-center justify-center">
    <h2 className="rounded-xl bg-[#A4BE91] px-4 py-2 text-center text-2xl font-normal tracking-[0.12em] text-[#204D36] md:text-4xl">
      HAYATI TECHNOLOGIES
    </h2>
  </div>

  {/* Bottom tagline */}
  <div className="absolute left-0 right-0 top-[57%] flex justify-center px-4">
    <p className="rounded-xl bg-[#A4BE91] px-4 py-2 text-center text-xs font-semibold uppercase tracking-[0.12em] text-[#204D36] md:text-sm">
      Engineering for People and Planet
    </p>
  </div>
</div>


{/* Hero text */}
<div className="px-6 pb-16 text-center">
  <p className="mb-6 text-sm font-semibold uppercase tracking-[0.3em] text-[#4D7953]">
    Engineering for People and Planet
  </p>

  <h2 className="mb-8 text-5xl font-bold leading-tight text-[#204D36] md:text-7xl">
    Life-Supporting Technology.
  </h2>

  <p className="mx-auto max-w-2xl text-lg leading-relaxed text-[#4D7953]">
    Solving real problems through robotics, software engineering, and
    thoughtful innovation, with people and the natural world in mind.
  </p>

  <a
    href="#projects"
    className="mt-10 inline-block rounded-full bg-[#204D36] px-8 py-4 font-medium text-white transition hover:bg-[#4D7953]"
  >
    Explore Our Work
  </a>
</div>



      <section
        id="mission"
        className="bg-[#204D36] px-8 py-20 text-[#F5F3E9]"
      >
        <div className="mx-auto max-w-4xl">
          <p className="mb-4 text-sm uppercase tracking-widest text-[#A4BE91]">
            Our Philosophy
          </p>
          <h2 className="mb-8 text-4xl font-bold">
            Technology in Service of Life.
          </h2>
          <p className="text-lg leading-relaxed">
            Our mission is to engineer technology that
            supports life. We believe engineering should
            address genuine needs, enhance existing ways
            of living, and consider the long-term impact
            of what we create.
          </p>
          <p className="mt-8 font-semibold text-[#A4BE91]">
            Solve real problems. Support life. Build responsibly.
          </p>
        </div>
      </section>

      {/* Featured Project */}
      <section id="projects" className="px-8 py-24">
        <div className="mx-auto max-w-5xl">
          <p className="mb-4 text-sm uppercase tracking-widest text-[#4D7953]">
            Featured Project · In Development
          </p>
          <h2 className="mb-6 text-4xl font-bold">
            MJ Vision
          </h2>
          
<img
src="/images/lab set up 4 hayati.jpg"
  alt="Early MJ Vision hardware prototyping workbench with sensors and microcontrollers"
  className="mb-10 h-72 w-full rounded-2xl object-cover md:h-[420px]"
/>

          <p className="max-w-3xl text-lg leading-relaxed">
            MJ Vision is an assistive technology project
            focused on helping people who are blind or
            have low vision better understand and navigate
            their surroundings through accessible,
            phone-based software.
          </p>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed">
            The core navigation app is intended to be
            completely free, with future exploration of
            affordable wearable technology.
          </p>
          <p className="mt-8 font-semibold text-[#357F87]">
            The MJ Vision story — coming soon.
          </p>
        </div>
      </section>

      {/* Areas of Exploration */}
      <section id="explore" className="bg-[#E5EBDD] px-8 py-20">
        <div className="mx-auto max-w-5xl">
          <p className="mb-4 text-sm uppercase tracking-widest text-[#4D7953]">
            Curiosity & Exploration
          </p>
          <h2 className="mb-6 text-4xl font-bold">
            Areas of Interest
          </h2>
          <p className="mb-10 max-w-3xl leading-relaxed">
            Our interests extend beyond current projects.
            These are areas for future learning, research,
            and experimentation—not a fixed product roadmap.
          </p>

          <div className="grid gap-5 md:grid-cols-2">
            {[
              "Robotics & Software Engineering",
              "Education & Accessibility",
              "Renewable Energy & Solar Technology",
              "Water, Conservation & Biomimicry",
            ].map((area) => (
              <div
                key={area}
                className="rounded-xl border border-[#A4BE91] bg-[#F5F3E9] p-7 text-lg font-semibold"
              >
                {area}
              </div>
            ))}
          </div>
        </div>
      </section>




{/* Founder */}
<section id="founder" className="px-8 py-24">
  <div className="mx-auto grid max-w-5xl items-center gap-12 md:grid-cols-2">
    <img
      src="/images/founder image natural habitat.jpg"
      alt="Founder of Hayati Technologies outdoors in a wooded setting"
      className="h-[440px] w-full rounded-2xl object-cover"
    />

    <div>
      <p className="mb-4 text-sm uppercase tracking-widest text-[#4D7953]">
        Meet the Founder
      </p>

      <h2 className="mb-6 text-4xl font-bold">
        Inspired by Nature. Driven by Engineering.
      </h2>

      <p className="mb-5 leading-relaxed">
        Hayati Technologies was founded on the belief that
        engineering and environmental responsibility can
        complement one another.
      </p>

      <p className="mb-5 leading-relaxed">
        My lifelong interests in science, marine life,
        conservation, and technology continue to shape
        how I approach innovation.
      </p>

      <p className="leading-relaxed">
        From my independent Green Energy Project research
        to my current work in robotics and accessible
        software, I want to explore how technology can
        solve meaningful problems while respecting the
        natural systems that sustain us.
      </p>
    </div>
    <div className="mt-8 flex flex-wrap gap-4">
  <a
    href="/founder"
    className="rounded-full bg-[#204D36] px-6 py-3 font-medium text-white transition hover:bg-[#4D7953]"
  >
    About the Founder →
  </a>

  <a
    href="www.linkedin.com/in/connect2sajdah"
    target="_blank"
    rel="noopener noreferrer"
    className="rounded-full border border-[#204D36] px-6 py-3 font-medium transition hover:bg-[#E5EBDD]"
  >
    LinkedIn ↗
  </a>
</div>
  </div>
</section>

      {/* Footer */}
      <footer className="bg-[#204D36] px-8 py-10 text-center text-sm text-[#F5F3E9]">
        <p className="font-bold">HAYATI TECHNOLOGIES</p>
        <p className="mt-2">Life-Supporting Technology.</p>
        <p className="mt-4 opacity-70">
          © 2026 Hayati Technologies
        </p>
      </footer>
    </main>
  );
}

