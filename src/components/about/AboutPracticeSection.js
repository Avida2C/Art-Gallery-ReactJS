export default function AboutPracticeSection() {
  return (
    <section className="about-section" aria-labelledby="about-do">
      <h2 id="about-do" className="font-display about-section-title">
        What I do
      </h2>
      <div className="row g-4">
        <div className="col-12 col-md-6">
          <p className="about-subhead">Art with a backbone</p>
          <h3 className="about-split-title">Clarity, then chaos</h3>
          <p>
            I aim for readable silhouettes, intentional contrast, and a path
            for the eye—then layer nostalgia, humor, and color until it hums.
            Medium-loose passes help me prove the idea before I fall in love
            with surface details.
          </p>
        </div>
        <div className="col-12 col-md-6">
          <p className="about-subhead">From idea to artifact</p>
          <h3 className="about-split-title">Finish like you mean it</h3>
          <p>
            Once the concept holds, I push finishes in Affinity Designer and
            Procreate—line weight, lighting, texture—so the piece feels as
            alive on a phone as it does in my head. When I touch code for my
            own sites, it’s to keep the presentation honest and fast, not to
            turn the gallery into a second job.
          </p>
        </div>
      </div>
    </section>
  );
}
