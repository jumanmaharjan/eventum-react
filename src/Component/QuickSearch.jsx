import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function QuickSearch({ showSearch, setShowSearch }) {
  const [search, setSearch] = useState(""); // Corrected typo in state name
  const navigate = useNavigate();

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (search.trim()) {
      // Prevent submitting an empty search
      navigate(`/search?query=${search}`);
      handleCloseSearch();
    }
  };

  const handleCloseSearch = (e) => {
    if (e) e.preventDefault();
    setShowSearch(false);
  };

  const handleInputClick = (e) => {
    e.stopPropagation();
  };

  return (
    <>
      <div
        className={
          showSearch ? "header-search-form search-in" : "header-search-form"
        }
        onClick={handleCloseSearch}
      >
        <div className="container">
          <div className="header-search-container">
            <form
              className="search-form"
              role="search"
              method="get"
              onSubmit={handleSubmit}
            >
              <input
                type="text"
                name="query"
                value={search}
                placeholder="Enter your text..."
                onChange={handleSearchChange}
                onClick={handleInputClick}
              />
            </form>
            <a href="#" className="search-close" onClick={handleCloseSearch}>
              <i className="fas fa-times"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default QuickSearch;
