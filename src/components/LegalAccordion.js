import { useState } from "react";

/**
 * Bootstrap-styled accordion toggled with React (no bootstrap.bundle.js required).
 * @param {{ accordionId: string, defaultKey?: string|null, className?: string, sections: { key: string, title: string, children: import("react").ReactNode }[] }} props
 */
export default function LegalAccordion({ accordionId, sections, defaultKey, className = "" }) {
  const firstKey = sections[0]?.key ?? null;
  const [openKey, setOpenKey] = useState(defaultKey ?? firstKey);

  return (
    <div className={`accordion legal-accordion ${className}`.trim()} id={accordionId}>
      {sections.map((section) => {
        const isOpen = openKey === section.key;
        return (
          <div className="accordion-item" key={section.key}>
            <h2 className="accordion-header">
              <button
                className={`accordion-button ${isOpen ? "" : "collapsed"}`}
                type="button"
                aria-expanded={isOpen}
                aria-controls={`${accordionId}-${section.key}`}
                id={`${accordionId}-btn-${section.key}`}
                onClick={() =>
                  setOpenKey((current) =>
                    current === section.key ? null : section.key
                  )
                }
              >
                {section.title}
              </button>
            </h2>
            <div
              id={`${accordionId}-${section.key}`}
              className={`accordion-collapse collapse ${isOpen ? "show" : ""}`}
              role="region"
              aria-labelledby={`${accordionId}-btn-${section.key}`}
            >
              <div className="accordion-body">{section.children}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
