import { useCallback, useEffect, useId, useRef, useState } from "react";
import images from "../data/images";
import "../../App.css";
import GalleryHeaderSection from "./sections/GalleryHeaderSection";
import GalleryViewerSection from "./sections/GalleryViewerSection";
import GalleryGridSection from "./sections/GalleryGridSection";
import GalleryCtaSection from "./sections/GalleryCtaSection";
import GalleryLightbox from "./sections/GalleryLightbox";

const ITEMS_PER_PAGE = 12;

export default function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const dialogRef = useRef(null);
  const titleId = useId();

  const pageCount = Math.max(1, Math.ceil(images.length / ITEMS_PER_PAGE));
  const safePage = Math.min(currentPage, pageCount - 1);
  const pageStart = safePage * ITEMS_PER_PAGE;
  const displayedImages = images.slice(pageStart, pageStart + ITEMS_PER_PAGE);

  const selected = images[selectedIndex] ?? images[0];
  const mainSrc = selected?.full ?? "";
  const mainAlt = `Selected artwork ${selectedIndex + 1} of ${images.length}`;

  const openLightbox = useCallback(() => {
    const el = dialogRef.current;
    if (el && typeof el.showModal === "function") {
      el.showModal();
      setLightboxOpen(true);
    }
  }, []);

  const closeLightbox = useCallback(() => {
    const el = dialogRef.current;
    if (el && typeof el.close === "function") {
      el.close();
      setLightboxOpen(false);
    }
  }, []);

  const goMain = useCallback((delta) => {
    if (!images.length) return;
    setSelectedIndex((i) => (i + delta + images.length) % images.length);
  }, []);

  const onBackdropClick = useCallback(
    (e) => {
      if (e.target === dialogRef.current) closeLightbox();
    },
    [closeLightbox]
  );

  useEffect(() => {
    if (!lightboxOpen) return;
    const onKey = (e) => {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        goMain(-1);
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        goMain(1);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightboxOpen, goMain]);

  useEffect(() => {
    if (currentPage > pageCount - 1) {
      setCurrentPage(Math.max(0, pageCount - 1));
    }
  }, [currentPage, pageCount]);

  return (
    <main className="gallery-page">
      <div className="container gallery-page-inner py-4 py-md-5">
        <GalleryHeaderSection />

        <div className="gallery-layout">
          <GalleryViewerSection
            mainSrc={mainSrc}
            mainAlt={mainAlt}
            selectedIndex={selectedIndex}
            totalCount={images.length}
            lightboxOpen={lightboxOpen}
            onOpenLightbox={openLightbox}
            onPrev={() => goMain(-1)}
            onNext={() => goMain(1)}
          />

          <GalleryGridSection
            displayedImages={displayedImages}
            pageStart={pageStart}
            selectedIndex={selectedIndex}
            safePage={safePage}
            pageCount={pageCount}
            onSelectIndex={setSelectedIndex}
            onPageChange={setCurrentPage}
          />
        </div>

        <GalleryCtaSection />
      </div>

      <GalleryLightbox
        dialogRef={dialogRef}
        titleId={titleId}
        selectedIndex={selectedIndex}
        totalCount={images.length}
        mainSrc={mainSrc}
        mainAlt={mainAlt}
        onClose={closeLightbox}
        onDialogClose={() => setLightboxOpen(false)}
        onBackdropClick={onBackdropClick}
        onPrev={() => goMain(-1)}
        onNext={() => goMain(1)}
      />
    </main>
  );
}
