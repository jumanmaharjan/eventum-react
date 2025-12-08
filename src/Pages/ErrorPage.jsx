import React, { useState } from "react";
import { Link } from "react-router-dom"; // ✅ Import Link

function ErrorPage() {
  const [search, setSearch] = useState("");

  function searchtxt(e) {
    setSearch(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(search);
    // Optionally, redirect to a search results page
  }

  return (
    <section className="no-content-section">
      <div className="container">
        <div className="no-content-wrap">
          <h2 className="error-title">404</h2>
          <h3 className="page-content-title">Oops! Page not found.</h3>

          <div className="search-form-wrap">
            <h6>Sorry, we couldn't find the page you are looking for!</h6>
            <form className="search-form" onSubmit={handleSubmit}>
              <input
                type="text"
                name="search"
                onChange={searchtxt}
                value={search}
                placeholder="Search..."
              />
              <button type="submit" className="search-btn">
                <i className="fas fa-search"></i>
              </button>
            </form>
          </div>

          <Link
            to="/"
            className="button-round-primary"
            style={{ textDecoration: "underline" }}
          >
            GO TO HOMEPAGE
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ErrorPage;
