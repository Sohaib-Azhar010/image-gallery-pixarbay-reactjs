import React from "react";

const Image = ({ image }) => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = image.largeImageURL;
    link.download = `pixabay-image-${image.id}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="card h-100 border-0 shadow-lg">
      <img
        src={image.webformatURL}
        className="card-img-top rounded-top"
        alt={image.tags}
        style={{ height: "200px", objectFit: "cover" }}
      />
      <div className="card-body">
        <h6 className="card-title text-dark">{image.user}</h6>
        <p className="card-text text-muted small mb-2">
          ❤️ {image.likes} · 💬 {image.comments}
        </p>
        <div className="d-flex justify-content-between">
          <a
            href={image.pageURL}
            target="_blank"
            rel="noreferrer"
            className="btn btn-outline-info btn-sm text-dark"
          >
            View on Pixabay
          </a>
          <button
            className="btn btn-info btn-sm text-light"
            onClick={handleDownload}
            title="Download"
          >
            <i className="bi bi-download"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Image;
