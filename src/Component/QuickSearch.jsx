import React, { useState } from "react";

function QuickSearch({ showSearch, setShowSearch }) {
  const [serch, setSearch] = useState("");
  function serchtxt(e) {
    setSearch(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    console.log(serch);
  }
  return (
    <>
      <div
        className={
          showSearch ? "header-search-form search-in" : "header-search-form"
        }
        onClick={(e) => {
          e.preventDefault();
          setShowSearch(false);
        }}
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
                name={serch}
                placeholder="Enter your text..."
                onChange={serchtxt}
              />
            </form>
            <a
              href="#"
              className="search-close"
              onClick={(e) => {
                e.preventDefault();
                setShowSearch(false);
              }}
            >
              <i className="fas fa-times"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default QuickSearch;
