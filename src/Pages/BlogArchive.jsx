import React, { useState } from "react";
import blogposts from "./BlogArchivePage/BlogArchive";
import { Link } from "react-router-dom";

const BlogArchive = () => {
  const posts = blogposts;
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 4; // Display 5 posts per page

  // Pagination logic
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(posts.length / postsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <div className="blog-archive-section">
      <div className="container">
        <div className="row">
          {/* Sidebar */}
          <div className="col-lg-4 order-2 order-lg-0">
            <aside className="sidebar">
              <div className="widget widget-bg icon-list-content round-border">
                <h5 className="bg-title round-border">SEARCH HERE</h5>
                <p className="widget-bg-info">
                  Luctus nec ullamcorper mattis, pulvinar dapibus leo.
                </p>
                <form className="search-form">
                  <input type="text" name="search" placeholder="Search..." />
                  <button className="search-btn">
                    <i className="fas fa-search"></i>
                  </button>
                </form>
              </div>

              <div className="widget widget-bg icon-list-content round-border blog-category">
                <h5 className="bg-title round-border">OTHER EVENT LIST</h5>
                <ul>
                  <li>
                    <a href="event-detail.html">
                      <i
                        aria-hidden="true"
                        className="jki jki-arrow-right-circle-line"
                      ></i>
                      EVENT
                    </a>
                  </li>
                  <li>
                    <a href="event-detail.html">
                      <i
                        aria-hidden="true"
                        className="jki jki-arrow-right-circle-line"
                      ></i>
                      CONFERENCE
                    </a>
                  </li>
                  <li>
                    <a href="event-detail.html">
                      <i
                        aria-hidden="true"
                        className="jki jki-arrow-right-circle-line"
                      ></i>
                      EVENT CATEGORIES
                    </a>
                  </li>
                  <li>
                    <a href="event-detail.html">
                      <i
                        aria-hidden="true"
                        className="jki jki-arrow-right-circle-line"
                      ></i>
                      ATTENDANCE
                    </a>
                  </li>
                </ul>
              </div>

              <div className="widget widget-bg icon-list-content round-border side-latest-post">
                <h5 className="bg-title round-border">RECENT POSTS</h5>
                <div className="side-latest-post-thumb-wrapper">
                  {blogposts.slice(0, 4).map((post, index) => (
                    <div key={index} className="side-latest-post-thumb">
                      <figure className="post-thumb">
                        <a href="single-blog.html">
                          <img src={post.img} alt="" />
                        </a>
                      </figure>
                      <div className="post-content">
                        <h6>
                          <a href="single-blog.html">{post.title}</a>
                        </h6>
                        <div className="entry-meta">
                          <span className="posted-on">
                            <a href="blog-archive.html">
                              <i
                                aria-hidden="true"
                                className="icon icon-calendar-page-empty"
                              ></i>
                              {post.date}
                            </a>
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </aside>
          </div>

          {/* Blog Posts */}
          <div className="col-lg-8 order-1 order-lg-1">
            <div className="primary-blog-wrapper">
              <div className="inner-blog-wrapper">
                {currentPosts.map((post, index) => (
                  <article key={index} className="post round-border">
                    <figure className="feature-image">
                      <img src={post.img} alt="" />
                    </figure>
                    <div className="entry-content">
                      <Link to={`/single-blog`}>{post.title}</Link>

                      <div className="entry-meta">
                        <span className="auther-info">
                          <a href="blog-archive.html">
                            <i className="fas fa-user"></i> byxperteam
                          </a>
                        </span>
                        <span className="dot-divider">
                          <i className="fas fa-circle"></i>
                        </span>
                        <span className="posted-on">
                          <a href="blog-archive.html">
                            <i className="fas fa-clock"></i>
                            {post.date}
                          </a>
                        </span>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              {/* Pagination */}
              <div className="post-navigation-wrap">
                <ul className="pagination">
                  <li>
                    <a
                      onClick={() => paginate(Math.max(currentPage - 1, 1))}
                      disabled={currentPage === 1}
                    >
                      <i className="fas fa-arrow-left"></i>
                    </a>
                  </li>
                  {Array.from({ length: totalPages }, (_, i) => (
                    <li
                      key={i}
                      className={currentPage === i + 1 ? "active" : ""}
                    >
                      <a onClick={() => paginate(i + 1)}>{i + 1}</a>
                    </li>
                  ))}
                  <li>
                    <a
                      onClick={() =>
                        paginate(Math.min(currentPage + 1, totalPages))
                      }
                      disabled={currentPage === totalPages}
                    >
                      <i className="fas fa-arrow-right"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogArchive;
