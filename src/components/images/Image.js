import React from "react";



const Image = ({ image }) => {
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
        <a
          href={image.pageURL}
          target="_blank"
          rel="noreferrer"
          className="btn btn-outline-info btn-sm text-dark"
        >
          View on Pixabay
        </a>
      </div>
    </div>
  );
};


export default Image;
