import "../App.css";
import AboutHero from "./about/AboutHero";
import GalleryCtaSection from "./gallery/sections/GalleryCtaSection";
import LegalAccordion from "./LegalAccordion";

export default function About() {
  const aboutSections = [
    {
      key: "about-me",
      title: "About me",
      children: (
        <>
          <p>
            I care more about a piece actually working than I do about polish for
            its own sake. I do not like overcomplicating things. I usually start
            by looking at what is already out there and figuring out what a piece
            needs to say before I start adding extra details.
          </p>
          <p>
            In my sketches, I focus on getting the flow and the shapes right
            first. If the drawing is not solid, no amount of neon or texture is
            going to save it. I try to keep the main idea clear, even when the
            style gets busy or maximal.
          </p>
        </>
      ),
    },
    {
      key: "how-it-started",
      title: "How it started",
      children: (
        <>
          <p>
            I grew up with paper, pencils, and crayons as my best friends. I drew
            because I loved it, not because I was overthinking a process. Moving
            to digital art was a way to work faster, use bolder colors, and try
            things out without worrying about wasting a canvas or ruining a
            physical drawing.
          </p>
          <p>
            Later on, I got curious about how art actually looks on a screen once
            it leaves my computer. That is why I started building small projects
            like this gallery. I want the creative side and the technical side to
            work together without one making the other miserable.
          </p>
        </>
      ),
    },
    {
      key: "what-i-do",
      title: "What I do",
      children: (
        <>
          <h3 className="about-split-title">Get the drawing right, then make it loud.</h3>
          <p>
            I aim for clear shapes and high contrast first. I would rather prove
            an idea with a quick, loose pass than spend hours on a detail that
            does not matter. Once the concept is there, I layer in the color and
            the grit until it feels right.
          </p>
          <h3 className="about-split-title">Finish like you mean it.</h3>
          <p>
            I do most of my finishing work in Affinity Designer and Procreate. I
            care about line weight, lighting, and texture because I want the piece
            to feel alive whether you are looking at it on a phone or a monitor.
            When I code my own sites, the goal is to keep it fast and honest, not
            to turn my hobby into a second full-time job.
          </p>
        </>
      ),
    },
    {
      key: "how-i-work",
      title: "How I work",
      children: (
        <>
          <p>
            I am into practical solutions and getting better at what I do. Every
            project is a chance to sharpen a habit. That might mean using better
            references, picking braver colors, or making cleaner exports without
            sanding off the weirdness that makes the work mine.
          </p>
          <p>
            I have tried the rushed shortcuts and wrestled with the messy
            versions. Now I try to build things so the viewer gets the spark and
            the story without having to see all the stress behind the scenes.
          </p>
        </>
      ),
    },
    {
      key: "right-now",
      title: "What I am into right now",
      children: (
        <ul className="about-now-list">
          <li>
            <strong>Portfolio Refresh:</strong> I am currently going through my
            archive to renew and refine older projects so they match my current
            standards.
          </li>
          <li>
            <strong>Learning and Leveling Up:</strong> I am diving into new
            courses to sharpen my skills and pick up better techniques for my
            craft.
          </li>
          <li>
            <strong>New Creations:</strong> Balancing the refinement of old work
            with the development of fresh projects to put my new skills to the
            test.
          </li>
        </ul>
      ),
    },
    {
      key: "studio-notes",
      title: "Studio notes",
      children: (
        <>
          <h3 className="about-split-title">Look first, then draw.</h3>
          <p>
            I like knowing what exists in a space so the final piece feels like it
            was done on purpose.
          </p>
          <h3 className="about-split-title">Drawing before decoration.</h3>
          <p>
            The glow and the chaos have to earn their spot. They only go on once
            the sketch can stand on its own.
          </p>
          <h3 className="about-split-title">Keep evolving.</h3>
          <p>
            I revisit old files when I have leveled up. Finished is a status, and
            it is allowed to change as I get better.
          </p>
        </>
      ),
    },
  ];

  return (
    <div className="container about-page py-4 py-md-5 text-white">
      <AboutHero />

      <section className="about-section" aria-labelledby="about-accordion-heading">
        <h2 id="about-accordion-heading" className="about-section-title font-display">
          About me
        </h2>
        <p className="about-accordion-intro">
          Quick reads by topic. Open any section to dive deeper.
        </p>
        <LegalAccordion
          accordionId="aboutAccordion"
          sections={aboutSections}
          defaultKey="about-me"
          className="about-accordion"
        />
      </section>

      <GalleryCtaSection />
    </div>
  );
}
