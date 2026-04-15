import { IoChevronBack, IoChevronForward } from "react-icons/io5";

export default function GalleryViewerSection({
  mainSrc,
  mainAlt,
  selectedIndex,
  totalCount,
  lightboxOpen,
  onOpenLightbox,
  onPrev,
  onNext,
}) {
  return (
    <section className="gallery-viewer" aria-label="Featured preview">
      <button
        type="button"
        className="gallery-main-trigger"
        onClick={onOpenLightbox}
        aria-haspopup="dialog"
        aria-expanded={lightboxOpen}
        aria-label={`Open full-screen view: ${mainAlt}`}
      >
        <span className="gallery-main-frame">
          <img
            className="gallery-main-image"
            src={mainSrc}
            alt={mainAlt}
            width={1200}
            height={900}
            decoding="async"
            fetchPriority="high"
          />
          <span className="gallery-main-hint">View larger</span>
        </span>
      </button>
      <div className="gallery-main-meta">
        <span className="gallery-main-count">
          {selectedIndex + 1} / {totalCount}
        </span>
        <div className="gallery-main-nav">
          <button type="button" className="gallery-icon-btn" onClick={onPrev} aria-label="Previous image">
            <IoChevronBack aria-hidden="true" focusable="false" />
          </button>
          <button type="button" className="gallery-icon-btn" onClick={onNext} aria-label="Next image">
            <IoChevronForward aria-hidden="true" focusable="false" />
          </button>
        </div>
      </div>
    </section>
  );
}
