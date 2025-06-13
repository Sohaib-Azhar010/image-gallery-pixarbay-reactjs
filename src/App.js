import React, { useState, useEffect } from "react";
import NavBar from "./components/navbar/NavBar";
import Search from "./components/search/Search";
import Image from "./components/images/Image";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const App = () => {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState("");

  const handleSearch = async (term) => {
    if (!term.trim()) return;
    const API_KEY = "50844157-6cbfade5a2a6e22e30d7c54a6";
    const url = `https://pixabay.com/api/?key=${API_KEY}&q=${encodeURIComponent(
      term
    )}&image_type=photo`;
    const res = await fetch(url);
    const data = await res.json();
    setImages(data.hits);
  };

  // 🔁 Debounced effect (search fires 500ms after user stops typing)
  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      if (query.trim() !== "") {
        handleSearch(query);
      }
    }, 500);

    return () => clearTimeout(delayDebounce); // clean up
  }, [query]);

  return (
    <div>
      <NavBar />
      <div className="bubbles">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className="container py-5">
        <Search query={query} setQuery={setQuery} />
        <div className="row g-4">
          {images.map((img) => (
            <div className="col-sm-6 col-md-4 col-lg-3" key={img.id}>
              <Image image={img} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
