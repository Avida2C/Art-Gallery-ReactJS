import { IoChevronBack, IoChevronForward, IoClose } from "react-icons/io5";

export default function GalleryLightbox({
  dialogRef,
  titleId,
  selectedIndex,
  totalCount,
  mainSrc,
  mainAlt,
  onClose,
  onDialogClose,
  onBackdropClick,
  onPrev,
  onNext,
}) {
  return (
    <dialog
      ref={dialogRef}
      className="gallery-lightbox"
      aria-labelledby={titleId}
      onClose={onDialogClose}
      onClick={onBackdropClick}
    >
      <div className="gallery-lightbox-panel" role="document" onClick={(e) => e.stopPropagation()}>
        <div className="gallery-lightbox-toolbar">
          <p id={titleId} className="gallery-lightbox-title">
            Image {selectedIndex + 1} of {totalCount}
          </p>
          <button type="button" className="gallery-lightbox-close" onClick={onClose} aria-label="Close full-screen view">
            <IoClose aria-hidden="true" focusable="false" />
          </button>
        </div>
        <div className="gallery-lightbox-stage">
          <button
            type="button"
            className="gallery-lightbox-arrow gallery-lightbox-arrow--prev"
            onClick={onPrev}
            aria-label="Previous image"
          >
            <IoChevronBack aria-hidden="true" focusable="false" />
          </button>
          <img className="gallery-lightbox-img" src={mainSrc} alt={mainAlt} decoding="async" />
          <button
            type="button"
            className="gallery-lightbox-arrow gallery-lightbox-arrow--next"
            onClick={onNext}
            aria-label="Next image"
          >
            <IoChevronForward aria-hidden="true" focusable="false" />
          </button>
        </div>
      </div>
    </dialog>
  );
}
