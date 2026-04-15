import { roles, tools } from "./aboutContent";

export default function AboutHero() {
  return (
    <header className="about-hero" aria-labelledby="about-hero-heading">
      <div className="about-avatar-wrap">
        <img
          src="/images/avatar.jpg"
          alt="Portrait of Avida"
          className="about-avatar"
          width={140}
          height={140}
        />
      </div>
      <div className="about-hero-copy">
        <p className="about-eyebrow">Visual Study: 80s Aesthetic & Neon Composition</p>
        <h1 id="about-hero-heading" className="font-display about-title">
          Hi, I’m Avida
        </h1>
        <p className="about-tagline">
          This gallery is a curated showcase of neon-inspired digital art. This gallery serves as a technical environment for exploring high-saturation palettes and experimental compositions outside of systematic UX/UI constraints.
        </p>
        <p className="about-cta-domain about-hero-domain">
          <a
            href="https://avida2c.me"
            className="about-cta-site-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            avida2c.me
          </a>
          <span className="about-cta-domain-hint"> — portfolio &amp; contact</span>
        </p>
        <p
          className="about-subhead about-hero-personality-heading"
          id="about-hero-personality-heading"
        >
          Personality Traits
        </p>
        <div
          className="about-badges"
          aria-labelledby="about-hero-personality-heading"
        >
          {roles.map((label) => (
            <span key={label} className="about-chip about-chip--role">
              {label}
            </span>
          ))}
        </div>
        <p
          className="about-subhead about-hero-tools-heading"
          id="about-hero-tools-heading"
        >
          Commonly Used Tools
        </p>
        <div
          className="about-badges about-badges--tools"
          aria-labelledby="about-hero-tools-heading"
        >
          {tools.map((label) => (
            <span key={label} className="about-chip about-chip--tool">
              {label}
            </span>
          ))}
        </div>
      </div>
    </header>
  );
}
