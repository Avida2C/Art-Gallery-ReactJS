import { leaningIntoItems } from "./aboutContent";

export default function AboutFocusSection() {
  return (
    <section className="about-section" aria-labelledby="about-now">
      <h2 id="about-now" className="font-display about-section-title">
        What I’m leaning into
      </h2>
      <ul className="about-now-list">
        {leaningIntoItems.map((text) => (
          <li key={text}>{text}</li>
        ))}
      </ul>
    </section>
  );
}
