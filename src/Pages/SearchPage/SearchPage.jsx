import React from "react";
import { useLocation, Link } from "react-router-dom";
import { posts } from "./searchData"; // Assuming you have some data to filter
import SearchAgainForm from "./SearchAgainForm"; // Assuming a search form component

const SearchPage = () => {
  const query = new URLSearchParams(useLocation().search).get("query") || "";

  const filteredPosts = posts.filter(
    (p) =>
      p.title.toLowerCase().includes(query.toLowerCase()) ||
      p.text.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="search-section">
      <div className="container">
        <div className="search-outer-wrap">
          <div className="row grid">
            {filteredPosts.length > 0 ? (
              // Search results section
              <>
                <div className="content-search-from mb-5">
                  <div className="col-lg-6 offset-lg-3 text-center">
                    <h3 className="content-search-title">SEARCH RESULTS</h3>
                    <SearchAgainForm />
                  </div>
                </div>
                {filteredPosts.map((post) => (
                  <div className="col-lg-4 grid-item" key={post.id}>
                    <div className="search-content-wrap">
                      <article className="post">
                        <div className="entry-content">
                          <h5>
                            <Link to={`/post/${post.id}`}>{post.title}</Link>
                          </h5>
                          <p>{post.text}</p>
                          <div className="button-container">
                            <Link
                              to={`/post/${post.id}`}
                              className="button-text"
                            >
                              Read More...
                            </Link>
                          </div>
                        </div>
                      </article>
                    </div>
                  </div>
                ))}
              </>
            ) : (
              // No results found section
              <div className="content-search-from">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-6 offset-lg-3 text-center">
                      <h6 className="mb-0">
                        Didn't find what you are looking for?
                      </h6>
                      <h3 className="content-search-title">SEARCH AGAIN !!</h3>
                      <SearchAgainForm />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
