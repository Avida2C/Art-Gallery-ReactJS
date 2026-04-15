export default function GalleryCtaSection() {
  return (
    <section className="gallery-cta" aria-labelledby="gallery-cta-heading">
      <div className="gallery-cta-inner">
        <p className="gallery-cta-eyebrow">Full Portfolio & Inquiries</p>
        <h2 id="gallery-cta-heading" className="gallery-cta-title m-0">
          More From Avida2C
        </h2>
        <p className="gallery-cta-lede">
          Access the complete collection of UX/UI designs, frontend projects, and technical case studies.
        </p>
        <a
          className="gallery-cta-link"
          href="https://avida2c.me"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit avida2c.me (opens in a new tab)"
        >
          Visit avida2c.me ↗
        </a>
      </div>
    </section>
  );
}
