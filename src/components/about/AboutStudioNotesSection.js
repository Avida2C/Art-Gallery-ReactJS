import { studioNotes } from "./aboutContent";

export default function AboutStudioNotesSection() {
  return (
    <section className="about-fun" aria-labelledby="about-fun-heading">
      <h2 id="about-fun-heading" className="font-display about-section-title">
        Studio notes
      </h2>
      <ul className="about-fun-grid">
        {studioNotes.map((item) => (
          <li key={item.title} className="about-fun-card">
            <h3 className="about-fun-card-title">{item.title}</h3>
            <p className="about-fun-card-body">{item.body}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
