import { useState } from "react";
import images from "./data/images";
import "../App.css";

export default function Gallery() {
  const [mainImage, setMainImage] = useState(images[0]?.full || "images/placeholder.jpg");
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 16;

  // Calculate paginated images
  const pageCount = Math.ceil(images.length / itemsPerPage);
  const displayedImages = images.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

  // Handle page change
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div className="container py-5">

      <div className="row d-flex main-img-section">
        {/* Main Image */}
        <div className="col-6 text-center">
          <img className="img-fluid pt-2 gallery-main-image" src={mainImage} alt="Main Display" />
        </div>

        {/* Thumbnails with Pagination */}
        <div className="col-6">
          <div className="row">
            {displayedImages.map((img, index) => (
              <div key={index} className="col-3 py-2">
                <img
                  className="img-thumbnail"
                  src={img.full}
                  alt={`Thumbnail ${index}`}
                  loading="lazy"
                  decoding="async"
                  onClick={() => setMainImage(img.full)}
                />
              </div>
            ))}
          </div>

          {/* Pagination Controls */}
          <div className="pagination-container">
            {Array.from({ length: pageCount }).map((_, index) => (
              <button
                key={index}
                className={`pagination-button ${index === currentPage ? "active" : ""}`}
                onClick={() => handlePageChange(index)}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
