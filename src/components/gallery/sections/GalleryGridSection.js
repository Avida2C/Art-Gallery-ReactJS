export default function GalleryGridSection({
  displayedImages,
  pageStart,
  selectedIndex,
  safePage,
  pageCount,
  onSelectIndex,
  onPageChange,
}) {
  return (
    <section className="gallery-grid-section" aria-label="All images">
      <div className="gallery-thumb-grid">
        {displayedImages.map((img, i) => {
          const globalIndex = pageStart + i;
          const isActive = globalIndex === selectedIndex;
          return (
            <button
              key={img.full}
              type="button"
              className={`gallery-thumb ${isActive ? "is-active" : ""}`}
              onClick={() => onSelectIndex(globalIndex)}
              aria-current={isActive ? "true" : undefined}
              aria-label={`Image ${globalIndex + 1}`}
            >
              <img src={img.full} alt="" loading="lazy" decoding="async" fetchPriority="low" />
            </button>
          );
        })}
      </div>

      {pageCount > 1 && (
        <nav className="gallery-pagination" aria-label="Gallery pages">
          {Array.from({ length: pageCount }, (_, index) => (
            <button
              key={index}
              type="button"
              className={`gallery-page-btn ${index === safePage ? "is-active" : ""}`}
              onClick={() => onPageChange(index)}
              aria-current={index === safePage ? "page" : undefined}
            >
              {index + 1}
            </button>
          ))}
        </nav>
      )}
    </section>
  );
}
